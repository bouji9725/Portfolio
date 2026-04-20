import { NextResponse } from "next/server";
import type { ContactApiResponse } from "@/types/api/contact";
import { submitContact } from "@/lib/server/contact/submit-contact";

export async function POST(request: Request) {
  let body: unknown;

  // Parse JSON safely and return a 400 if the request body is invalid
  try {
    body = await request.json();
  } catch {
    const response: ContactApiResponse = {
      success: false,
      message: "Invalid request body.",
    };

    return NextResponse.json(response, { status: 400 });
  }

  try {
    // Delegate the real business logic to the contact use-case layer
    const { status, response } = await submitContact(request, body);

    return NextResponse.json(response, { status });
  } catch {
    // Never leak provider/runtime internals to the user
    const response: ContactApiResponse = {
      success: false,
      message: "Something went wrong. Please try again later.",
    };

    return NextResponse.json(response, { status: 500 });
  }
}