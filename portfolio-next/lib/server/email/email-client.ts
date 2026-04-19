import { Resend } from "resend";
import { serverEnv } from "@/lib/server/env/server-env";

export const emailClient = new Resend(serverEnv.EMAIL_PROVIDER_API_KEY);