import { emailClient } from "@/lib/server/email/email-client";
import { serverEnv } from "@/lib/server/env/server-env";

export type SendContactEmailInput = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

export async function sendContactEmail(
  input: SendContactEmailInput
): Promise<void> {
  const { name, email, subject, message } = input;

  const { error } = await emailClient.emails.send({
    from: `Portfolio Contact <${serverEnv.CONTACT_FROM_EMAIL}>`,
    to: [serverEnv.CONTACT_TO_EMAIL],
    subject: `[Portfolio Contact] ${subject}`,
    replyTo: email,
    text: [
      `Name: ${name}`,
      `Email: ${email}`,
      "",
      "Message:",
      message,
    ].join("\n"),
  });

  if (error) {
  console.error("Resend error:", error);
  throw new Error(`Failed to send contact email: ${error.message}`);
}
}