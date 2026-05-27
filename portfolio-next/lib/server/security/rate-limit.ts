type RateLimitEntry = {
  count: number;
  resetAt: number;
};

const WINDOW_MS = 10 * 60 * 1000; // 10 minutes
const MAX_REQUESTS = 3;

// In-memory fallback — resets on cold starts.
// Replace with Upstash Redis for persistent rate limiting across deploys:
//   npm install @upstash/redis @upstash/ratelimit
//   Set UPSTASH_REDIS_REST_URL + UPSTASH_REDIS_REST_TOKEN in .env.local
const store = new Map<string, RateLimitEntry>();

export function checkRateLimit(identifier: string): {
  success: boolean;
  remaining: number;
  resetAt: number;
} {
  const now = Date.now();
  const entry = store.get(identifier);

  if (!entry || now > entry.resetAt) {
    const resetAt = now + WINDOW_MS;
    store.set(identifier, { count: 1, resetAt });
    return { success: true, remaining: MAX_REQUESTS - 1, resetAt };
  }

  if (entry.count >= MAX_REQUESTS) {
    return { success: false, remaining: 0, resetAt: entry.resetAt };
  }

  entry.count += 1;
  store.set(identifier, entry);
  return { success: true, remaining: MAX_REQUESTS - entry.count, resetAt: entry.resetAt };
}
