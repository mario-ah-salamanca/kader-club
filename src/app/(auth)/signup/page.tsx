import Link from "next/link";
import { Suspense } from "react";
import { AuthMessage } from "@/features/auth/auth-message";
import { signupAction } from "@/features/auth/actions";

export default function SignupPage() {
  return (
    <section className="auth-page">
      <div className="auth-panel">
        <h1>Create account</h1>
        <p>Start with secure access before adding cards to your binder.</p>
        <Suspense fallback={null}>
          <AuthMessage />
        </Suspense>
        <form className="auth-form" action={signupAction}>
          <label className="field">
            <span>Email</span>
            <input
              autoComplete="email"
              name="email"
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
          <button className="button" type="submit">
            Sign up
          </button>
        </form>
        <p className="auth-switch">
          Already collecting here? <Link href="/login">Log in</Link>
        </p>
      </div>
    </section>
  );
}
