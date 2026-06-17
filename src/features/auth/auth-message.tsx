"use client";

import { useSearchParams } from "next/navigation";

export function AuthMessage() {
  const searchParams = useSearchParams();
  const error = searchParams.get("error");
  const message = searchParams.get("message");

  if (error) {
    return (
      <p className="message error" role="alert">
        {error}
      </p>
    );
  }

  if (message) {
    return <p className="message success">{message}</p>;
  }

  return null;
}
