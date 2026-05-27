import * as Sentry from "@sentry/nextjs";

// Add your SENTRY_DSN to .env.local to enable error tracking.
// Get your DSN at: https://sentry.io → Settings → Projects → Client Keys
Sentry.init({
  dsn: process.env.NEXT_PUBLIC_SENTRY_DSN,
  tracesSampleRate: 0.1,
  enabled: process.env.NODE_ENV === "production",
});
