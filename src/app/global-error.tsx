"use client";

import { useEffect } from "react";

export default function GlobalError({
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
    console.error("Global application error:", error);
  }, [error]);

  return (
    <html lang="en">
      <body>
        <div
          style={{
            display: "flex",
            minHeight: "100vh",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "1rem",
            padding: "1rem",
            textAlign: "center",
            fontFamily: "system-ui, sans-serif",
          }}
        >
          <h2 style={{ fontSize: "1.5rem", fontWeight: "bold", color: "#0f172a" }}>
            Something went wrong
          </h2>
          <p style={{ maxWidth: "28rem", color: "#475569" }}>
            A critical error occurred. Our team has been notified.
          </p>
          <button
            onClick={reset}
            style={{
              marginTop: "0.5rem",
              borderRadius: "0.5rem",
              backgroundColor: "#2563eb",
              paddingLeft: "1.5rem",
              paddingRight: "1.5rem",
              paddingTop: "0.625rem",
              paddingBottom: "0.625rem",
              fontSize: "0.875rem",
              fontWeight: 600,
              color: "white",
              border: "none",
              cursor: "pointer",
            }}
          >
            Try again
          </button>
        </div>
      </body>
    </html>
  );
}
