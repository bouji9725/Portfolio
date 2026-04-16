import { z } from "zod";
import type { ContactFieldErrors } from "@/types/api/contact";

export const contactFormSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Name must be at least 2 characters.")
    .max(100, "Name must be 100 characters or less."),

  email: z
    .string()
    .trim()
    .email("Please enter a valid email address.")
    .max(254, "Email must be 254 characters or less."),

  subject: z
    .string()
    .trim()
    .min(3, "Subject must be at least 3 characters.")
    .max(150, "Subject must be 150 characters or less."),

  message: z
    .string()
    .trim()
    .min(10, "Message must be at least 10 characters.")
    .max(5000, "Message must be 5000 characters or less."),

  company: z.string().trim().max(200).optional().default(""),
});

export type ContactFormSchemaInput = z.input<typeof contactFormSchema>;
export type ContactFormSchemaOutput = z.output<typeof contactFormSchema>;

export function mapZodErrorsToFieldErrors(
  error: z.ZodError
): ContactFieldErrors {
  const flattened = error.flatten();

  return Object.fromEntries(
    Object.entries(flattened.fieldErrors).filter(
      ([, value]) => value !== undefined
    )
  ) as ContactFieldErrors;
}