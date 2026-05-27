"use client";

import { useState } from "react";
import type {
  ContactApiResponse,
  ContactFieldErrors,
} from "@/types/api/contact";

type ContactFormValues = {
  name: string;
  email: string;
  subject: string;
  message: string;
  company: string;
};

const INITIAL_FORM_VALUES: ContactFormValues = {
  name: "",
  email: "",
  subject: "",
  message: "",
  company: "",
};

export default function ContactForm() {
  const [formData, setFormData] =
    useState<ContactFormValues>(INITIAL_FORM_VALUES);
  const [fieldErrors, setFieldErrors] = useState<ContactFieldErrors>({});
  const [serverMessage, setServerMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  function handleChange(
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const { name, value } = event.target;

    setFormData((prev) => ({ ...prev, [name]: value }));

    setFieldErrors((prev) => {
      const next = { ...prev };
      delete next[name as keyof ContactFieldErrors];
      return next;
    });

    setServerMessage("");
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setIsSubmitting(true);
    setServerMessage("");
    setIsSuccess(false);
    setFieldErrors({});

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data: ContactApiResponse = await response.json();

      if (!response.ok) {
        if ("fieldErrors" in data && data.fieldErrors) {
          setFieldErrors(data.fieldErrors);
        }
        setServerMessage(data.message || "Something went wrong.");
        setIsSuccess(false);
        return;
      }

      setServerMessage(data.message || "Your message has been sent.");
      setIsSuccess(true);
      setFormData(INITIAL_FORM_VALUES);
    } catch {
      setServerMessage("Something went wrong. Please try again later.");
      setIsSuccess(false);
    } finally {
      setIsSubmitting(false);
    }
  }

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
      {/* Honeypot — hidden from real users, traps bots */}
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

      {/* Subject */}
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

      {/* Message */}
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

      {/* Always-present live region — announced to screen readers on change */}
      <div role="status" aria-live="polite" aria-atomic="true" className="sr-only">
        {serverMessage}
      </div>

      {/* Visible status message */}
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

      {/* Submit */}
      <button
        type="submit"
        disabled={isSubmitting}
        aria-busy={isSubmitting}
        className="inline-flex items-center justify-center rounded-xl border border-white/20 bg-white/10 px-6 py-3 font-semibold text-white backdrop-blur-sm transition hover:bg-white/20 disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:bg-white/10"
      >
        {isSubmitting ? "Sending…" : "Send Message"}
      </button>
    </form>
  );
}
