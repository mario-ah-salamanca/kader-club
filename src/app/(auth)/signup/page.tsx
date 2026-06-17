import Link from "next/link";
import { Suspense } from "react";
import { AuthMessage } from "@/features/auth/auth-message";
import { signupAction } from "@/features/auth/actions";
import { AuthShell } from "@/features/auth/auth-shell";

export default function SignupPage() {
  return (
    <AuthShell
      description="Create secure access before setting up your profile, scouting focus, and first card target."
      eyebrow="Create account"
      title="Welcome to the Club"
    >
      <Suspense fallback={null}>
        <AuthMessage />
      </Suspense>
      <form className="auth-form" action={signupAction}>
        <label className="field">
          <span>Full name</span>
          <input
            autoComplete="name"
            name="fullName"
            placeholder="Cristiano Ronaldo"
            required
            type="text"
          />
        </label>
        <label className="field">
          <span>Email</span>
          <input
            autoComplete="email"
            name="email"
            placeholder="cr7@kaderclub.com"
            required
            type="email"
          />
        </label>
        <label className="field">
          <span>Password</span>
          <input
            autoComplete="new-password"
            minLength={6}
            name="password"
            required
            type="password"
          />
        </label>
        <label className="checkbox-field">
          <input defaultChecked name="acceptedTerms" required type="checkbox" />
          <span>I understand this MVP is a private collection tool, not a marketplace.</span>
        </label>
        <button className="button button-primary" type="submit">
          Create account
        </button>
      </form>
      <p className="auth-switch">
        Already collecting here? <Link href="/login">Log in</Link>
      </p>
    </AuthShell>
  );
}
