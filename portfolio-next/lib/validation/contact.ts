import { CONTACT_LIMITS } from "@/lib/constants/contact";

type ValidatableField = "name" | "email" | "subject" | "message";

export function validateField(name: ValidatableField, value: string): string[] {
  const errors: string[] = [];

  switch (name) {
    case "name":
      if (value.length > 0 && value.length < CONTACT_LIMITS.nameMin)
        errors.push(`At least ${CONTACT_LIMITS.nameMin} characters required`);
      if (value.length > CONTACT_LIMITS.nameMax)
        errors.push(`Max ${CONTACT_LIMITS.nameMax} characters`);
      break;

    case "email":
      if (value.length > 0 && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value))
        errors.push("Enter a valid email address");
      break;

    case "subject":
      if (value.length > 0 && value.length < CONTACT_LIMITS.subjectMin)
        errors.push(`At least ${CONTACT_LIMITS.subjectMin} characters required`);
      if (value.length > CONTACT_LIMITS.subjectMax)
        errors.push(`Max ${CONTACT_LIMITS.subjectMax} characters`);
      break;

    case "message":
      if (value.length > 0 && value.length < CONTACT_LIMITS.messageMin)
        errors.push(`At least ${CONTACT_LIMITS.messageMin} characters required`);
      if (value.length > CONTACT_LIMITS.messageMax)
        errors.push(`Max ${CONTACT_LIMITS.messageMax} characters`);
      break;
  }

  return errors;
}
