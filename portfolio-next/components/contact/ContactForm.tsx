"use client";

import { useState } from "react";
import type {
  ContactApiResponse,
  ContactFieldErrors,
} from "@/types/api/contact";

// Local form state shape used only inside this component
type ContactFormValues = {
  name: string;
  email: string;
  subject: string;
  message: string;
  company: string; // Hidden honeypot field
};

// Initial empty form values
const INITIAL_FORM_VALUES: ContactFormValues = {
  name: "",
  email: "",
  subject: "",
  message: "",
  company: "",
};

export default function ContactForm() {
  // Stores all current input values
  const [formData, setFormData] =
    useState<ContactFormValues>(INITIAL_FORM_VALUES);

  // Stores field-specific backend validation errors
  const [fieldErrors, setFieldErrors] = useState<ContactFieldErrors>({});

  // Stores a general success or error message
  const [serverMessage, setServerMessage] = useState("");

  // Tracks whether the last request succeeded
  const [isSuccess, setIsSuccess] = useState(false);

  // Tracks loading state while submitting
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Handles typing in all inputs and textarea fields
  function handleChange(
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const { name, value } = event.target;

    // Update only the changed field
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Remove the existing error for the field the user is editing
    setFieldErrors((prev) => {
      const next = { ...prev };
      delete next[name as keyof ContactFieldErrors];
      return next;
    });

    // Clear global message while user edits again
    setServerMessage("");
  }

  // Handles form submission to the backend API
  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setIsSubmitting(true);
    setServerMessage("");
    setIsSuccess(false);
    setFieldErrors({});

    try {
      // Send request to your backend route
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data: ContactApiResponse = await response.json();

      // Handle validation errors / rate limit / generic backend failures
      if (!response.ok) {
        if ("fieldErrors" in data && data.fieldErrors) {
          setFieldErrors(data.fieldErrors);
        }

        setServerMessage(data.message || "Something went wrong.");
        setIsSuccess(false);
        return;
      }

      // Success path: show success message and reset the form
      setServerMessage(data.message || "Your message has been sent.");
      setIsSuccess(true);
      setFormData(INITIAL_FORM_VALUES);
    } catch {
      // Network or unexpected runtime failure
      setServerMessage("Something went wrong. Please try again later.");
      setIsSuccess(false);
    } finally {
      setIsSubmitting(false);
    }
  }

  // Reusable helper:
  // returns the correct input style depending on whether a field has an error
  function getFieldClass(hasError: boolean) {
    return [
      "w-full rounded-xl px-4 py-3 text-white placeholder:text-white/40 outline-none transition",
      "bg-white/10 backdrop-blur-sm",
      hasError
        ? "border border-red-400/70 focus:border-red-300 focus:ring-2 focus:ring-red-400/30"
        : "border border-white/15 focus:border-purple-300/60 focus:ring-2 focus:ring-purple-300/20",
    ].join(" ");
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {/* 
        Hidden honeypot field.
        Real users never interact with this.
        Bots often fill every field and get blocked by the backend.
      */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="company">Company</label>
        <input
          id="company"
          name="company"
          type="text"
          value={formData.company}
          onChange={handleChange}
          autoComplete="off"
          tabIndex={-1}
        />
      </div>

      {/* Name + Email row */}
      <div className="grid gap-5 md:grid-cols-2">
        <div>
          <label
            htmlFor="name"
            className="mb-2 block text-sm font-medium text-white"
          >
            Name
          </label>

          <input
            id="name"
            name="name"
            type="text"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your name"
            className={getFieldClass(Boolean(fieldErrors.name?.length))}
          />

          {/* Show backend validation error under the field */}
          {fieldErrors.name?.map((error) => (
            <p key={error} className="mt-2 text-sm text-red-300">
              {error}
            </p>
          ))}
        </div>

        <div>
          <label
            htmlFor="email"
            className="mb-2 block text-sm font-medium text-white"
          >
            Email
          </label>

          <input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="you@example.com"
            className={getFieldClass(Boolean(fieldErrors.email?.length))}
          />

          {fieldErrors.email?.map((error) => (
            <p key={error} className="mt-2 text-sm text-red-300">
              {error}
            </p>
          ))}
        </div>
      </div>

      {/* Subject field */}
      <div>
        <label
          htmlFor="subject"
          className="mb-2 block text-sm font-medium text-white"
        >
          Subject
        </label>

        <input
          id="subject"
          name="subject"
          type="text"
          value={formData.subject}
          onChange={handleChange}
          placeholder="What is this about?"
          className={getFieldClass(Boolean(fieldErrors.subject?.length))}
        />

        {fieldErrors.subject?.map((error) => (
          <p key={error} className="mt-2 text-sm text-red-300">
            {error}
          </p>
        ))}
      </div>

      {/* Message field */}
      <div>
        <label
          htmlFor="message"
          className="mb-2 block text-sm font-medium text-white"
        >
          Message
        </label>

        <textarea
          id="message"
          name="message"
          rows={6}
          value={formData.message}
          onChange={handleChange}
          placeholder="Tell me about your project, role, or idea..."
          className={getFieldClass(Boolean(fieldErrors.message?.length))}
        />

        {fieldErrors.message?.map((error) => (
          <p key={error} className="mt-2 text-sm text-red-300">
            {error}
          </p>
        ))}
      </div>

      {/* Global backend success/error message */}
      {serverMessage ? (
        <div
          className={`rounded-xl px-4 py-3 text-sm backdrop-blur-sm ${
            isSuccess
              ? "border border-green-400/30 bg-green-500/10 text-green-200"
              : "border border-red-400/30 bg-red-500/10 text-red-200"
          }`}
        >
          {serverMessage}
        </div>
      ) : null}

      {/* Submit button */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="inline-flex items-center justify-center rounded-xl border border-white/20 bg-white/10 px-6 py-3 font-semibold text-white backdrop-blur-sm transition hover:bg-white/20 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {isSubmitting ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
}