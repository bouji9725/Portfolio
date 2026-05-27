import { describe, it, expect } from "vitest";
import { validateField } from "@/lib/validation/contact";

describe("validateField — name", () => {
  it("returns no errors for an empty string", () => {
    expect(validateField("name", "")).toEqual([]);
  });

  it("returns error when name is too short", () => {
    expect(validateField("name", "J")).toHaveLength(1);
  });

  it("returns no errors for a valid name", () => {
    expect(validateField("name", "John")).toEqual([]);
  });

  it("returns error when name exceeds max length", () => {
    expect(validateField("name", "A".repeat(101))).toHaveLength(1);
  });
});

describe("validateField — email", () => {
  it("returns no errors for an empty string", () => {
    expect(validateField("email", "")).toEqual([]);
  });

  it("returns error for an invalid email", () => {
    expect(validateField("email", "notanemail")).toHaveLength(1);
  });

  it("returns error for email missing domain", () => {
    expect(validateField("email", "user@")).toHaveLength(1);
  });

  it("returns no errors for a valid email", () => {
    expect(validateField("email", "user@example.com")).toEqual([]);
  });
});

describe("validateField — subject", () => {
  it("returns no errors for an empty string", () => {
    expect(validateField("subject", "")).toEqual([]);
  });

  it("returns error when subject is too short", () => {
    expect(validateField("subject", "hi")).toHaveLength(1);
  });

  it("returns no errors for a valid subject", () => {
    expect(validateField("subject", "Hello there")).toEqual([]);
  });

  it("returns error when subject exceeds max length", () => {
    expect(validateField("subject", "A".repeat(151))).toHaveLength(1);
  });
});

describe("validateField — message", () => {
  it("returns no errors for an empty string", () => {
    expect(validateField("message", "")).toEqual([]);
  });

  it("returns error when message is too short", () => {
    expect(validateField("message", "Short")).toHaveLength(1);
  });

  it("returns no errors for a valid message", () => {
    expect(validateField("message", "This is a long enough message.")).toEqual([]);
  });

  it("returns error when message exceeds max length", () => {
    expect(validateField("message", "A".repeat(5001))).toHaveLength(1);
  });
});
