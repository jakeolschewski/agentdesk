"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Report to Sentry via the browser loader script (window.Sentry)
    if (typeof window !== "undefined" && "Sentry" in window) {
      (window as unknown as { Sentry: { captureException: (e: Error) => void } }).Sentry.captureException(error);
    }
    console.error("Application error:", error);
  }, [error]);

  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center gap-4 px-4 text-center">
      <h2 className="text-2xl font-bold text-slate-900">Something went wrong</h2>
      <p className="max-w-md text-slate-600">
        An unexpected error occurred. Our team has been notified and is working on a fix.
      </p>
      <button
        onClick={reset}
        className="mt-2 rounded-lg bg-blue-600 px-6 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 transition-colors"
      >
        Try again
      </button>
    </div>
  );
}
