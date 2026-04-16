// Shared API contract for the portfolio contact form.
// This file defines the request and response shapes used by both client and server.

export type ContactFormRequest = {
  name: string;
  email: string;
  subject: string;
  message: string;
  company?: string; // honeypot field, should stay empty
};

export type ContactFieldErrors = Partial<
  Record<keyof ContactFormRequest, string[]>
>;

export type ContactSuccessResponse = {
  success: true;
  message: string;
};

export type ContactErrorResponse = {
  success: false;
  message: string;
  fieldErrors?: ContactFieldErrors;
};

export type ContactApiResponse =
  | ContactSuccessResponse
  | ContactErrorResponse;