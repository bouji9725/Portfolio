import { NextResponse } from "next/server";
import type { ContactApiResponse } from "@/types/api/contact";
import {
  contactFormSchema,
  mapZodErrorsToFieldErrors,
} from "@/validation/contact.schema";

export async function POST(request: Request) {
  let body: unknown;

  try {
    body = await request.json();
  } catch {
    const response: ContactApiResponse = {
      success: false,
      message: "Invalid request body.",
    };

    return NextResponse.json(response, { status: 400 });
  }

  const result = contactFormSchema.safeParse(body);

  if (!result.success) {
    const response: ContactApiResponse = {
      success: false,
      message: "Please correct the highlighted fields.",
      fieldErrors: mapZodErrorsToFieldErrors(result.error),
    };

    return NextResponse.json(response, { status: 400 });
  }

  try {
    const response: ContactApiResponse = {
      success: true,
      message: "Your message has been sent.",
    };

    return NextResponse.json(response, { status: 200 });
  } catch {
    const response: ContactApiResponse = {
      success: false,
      message: "Something went wrong. Please try again later.",
    };

    return NextResponse.json(response, { status: 500 });
  }
}