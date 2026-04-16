import { sendContactEmail } from "@/lib/server/email/send-contact-email";
import type { ContactApiResponse } from "@/types/api/contact";
import { contactFormSchema } from "@/validation/contact.schema";
import { mapZodErrorsToFieldErrors } from "@/validation/contact.schema";

export async function submitContact(
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

  const { name, email, subject, message } = result.data;

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