"use client";

import * as Sentry from "@sentry/nextjs";
import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    Sentry.captureException(error);
  }, [error]);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
      <p className="text-7xl font-bold text-red-400">!</p>
      <h1 className="mt-4 text-2xl font-semibold text-white">
        Something went wrong
      </h1>
      <p className="mt-3 text-white/60">An unexpected error occurred.</p>
      <button
        onClick={reset}
        className="mt-8 rounded-full border border-white/20 bg-white/5 px-5 py-2.5 font-medium text-white transition hover:border-white/40 hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
      >
        Try again
      </button>
    </main>
  );
}
