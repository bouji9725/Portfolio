import { NextResponse } from "next/server";
import type { ContactApiResponse } from "@/types/api/contact";
import { submitContact } from "@/lib/server/contact/submit-contact";

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

  try {
    const { status, response } = await submitContact(body);
    return NextResponse.json(response, { status });
  } catch (error) {
  console.error("API ERROR:", error);
    const response: ContactApiResponse = {
      success: false,
      message: "Something went wrong. Please try again later.",
    };

    return NextResponse.json(response, { status: 500 });
  }
}