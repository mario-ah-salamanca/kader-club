import Link from "next/link";
import { Suspense } from "react";
import { AuthMessage } from "@/features/auth/auth-message";
import { loginAction } from "@/features/auth/actions";
import { AuthShell } from "@/features/auth/auth-shell";

export default function LoginPage() {
  return (
    <AuthShell
      description="Open your private binder and continue the first collection loop."
      eyebrow="Secure access"
      title="Log in to your club room"
    >
      <Suspense fallback={null}>
        <AuthMessage />
      </Suspense>
      <form className="auth-form" action={loginAction}>
        <label className="field">
          <span>Email</span>
          <input autoComplete="email" name="email" required type="email" />
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
        <button className="button button-primary" type="submit">
          Log in
        </button>
      </form>
      <p className="auth-switch">
        New to Kader Club? <Link href="/signup">Create an account</Link>
      </p>
    </AuthShell>
  );
}
