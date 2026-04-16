import { z } from "zod";

const serverEnvSchema = z.object({
  CONTACT_TO_EMAIL: z
    .string()
    .trim()
    .email("CONTACT_TO_EMAIL must be a valid email address."),

  CONTACT_FROM_EMAIL: z
    .string()
    .trim()
    .email("CONTACT_FROM_EMAIL must be a valid email address."),

  EMAIL_PROVIDER_API_KEY: z
    .string()
    .trim()
    .min(1, "EMAIL_PROVIDER_API_KEY is required."),
});

export const serverEnv = serverEnvSchema.parse({
  CONTACT_TO_EMAIL: process.env.CONTACT_TO_EMAIL,
  CONTACT_FROM_EMAIL: process.env.CONTACT_FROM_EMAIL,
  EMAIL_PROVIDER_API_KEY: process.env.EMAIL_PROVIDER_API_KEY,
});