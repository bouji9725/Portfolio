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

  // Temporary stub for Phase 3.
  // In Phase 4, this will call the real email provider client.
  console.log("Sending contact email:", {
    to: "configured via env later",
    from: email,
    subject,
    text: `From: ${name} <${email}>\n\n${message}`,
  });
}