import Link from "next/link";
import { Suspense } from "react";
import { AuthMessage } from "@/features/auth/auth-message";
import { loginAction } from "@/features/auth/actions";

export default function LoginPage() {
  return (
    <section className="auth-page">
      <div className="auth-panel">
        <h1>Log in</h1>
        <p>Open your private binder and continue the First Collection Loop.</p>
        <Suspense fallback={null}>
          <AuthMessage />
        </Suspense>
        <form className="auth-form" action={loginAction}>
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
              autoComplete="current-password"
              minLength={6}
              name="password"
              required
              type="password"
            />
          </label>
          <button className="button" type="submit">
            Log in
          </button>
        </form>
        <p className="auth-switch">
          New to Kader Club? <Link href="/signup">Create an account</Link>
        </p>
      </div>
    </section>
  );
}
