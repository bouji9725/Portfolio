// Request body shape sent from the frontend to the backend
export type ContactFormRequest = {
  name: string;
  email: string;
  subject: string;
  message: string;
  company?: string; // hidden honeypot field for spam bots
};

// Field-level validation errors returned by the backend
export type ContactFieldErrors = Partial<
  Record<keyof ContactFormRequest, string[]>
>;

// Success response shape from the backend
export type ContactSuccessResponse = {
  success: true;
  message: string;
};

// Error response shape from the backend
export type ContactErrorResponse = {
  success: false;
  message: string;
  fieldErrors?: ContactFieldErrors;
};

// Combined API response type
export type ContactApiResponse =
  | ContactSuccessResponse
  | ContactErrorResponse;