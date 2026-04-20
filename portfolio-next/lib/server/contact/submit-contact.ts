import { sendContactEmail } from "@/lib/server/email/send-contact-email";
import { checkRateLimit } from "@/lib/server/security/rate-limit";
import { isHoneypotTriggered } from "@/lib/server/security/honeypot";
import { getClientIp } from "@/lib/server/security/request-meta";
import type { ContactApiResponse } from "@/types/api/contact";
import {
  contactFormSchema,
  mapZodErrorsToFieldErrors,
} from "@/validation/contact.schema";

export async function submitContact(
  request: Request,
  body: unknown
): Promise<{ status: number; response: ContactApiResponse }> {
  const result = contactFormSchema.safeParse(body);

  if (!result.success) {
    return {
      status: 400,
      response: {
        success: false,
        message: "Please correct the highlighted fields.",
        fieldErrors: mapZodErrorsToFieldErrors(result.error),
      },
    };
  }

  const { name, email, subject, message, company } = result.data;

  if (isHoneypotTriggered(company)) {
    return {
      status: 400,
      response: {
        success: false,
        message: "Invalid request.",
      },
    };
  }

  const clientIp = getClientIp(request);
  const rateLimit = checkRateLimit(clientIp);

  if (!rateLimit.success) {
    return {
      status: 429,
      response: {
        success: false,
        message: "Too many requests. Please try again later.",
      },
    };
  }

  await sendContactEmail({
    name,
    email,
    subject,
    message,
  });

  return {
    status: 200,
    response: {
      success: true,
      message: "Your message has been sent.",
    },
  };
}