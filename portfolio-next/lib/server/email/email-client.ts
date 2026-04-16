import { serverEnv } from "@/lib/server/env/server-env";

export function getEmailClient() {
  // Touch the env here so misconfiguration fails fast
  // once this client is actually used.
  return {
    apiKey: serverEnv.EMAIL_PROVIDER_API_KEY,
  };
}