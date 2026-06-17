"use server";

import { redirect } from "next/navigation";
import { createServerSupabaseClient } from "@/lib/supabase/server";

type AuthFields = {
  email: string;
  password: string;
};

function readAuthFields(formData: FormData): AuthFields | string {
  const email = formData.get("email");
  const password = formData.get("password");

  if (typeof email !== "string" || typeof password !== "string") {
    return "Email and password are required.";
  }

  const trimmedEmail = email.trim().toLowerCase();

  if (!trimmedEmail || !password) {
    return "Email and password are required.";
  }

  if (!trimmedEmail.includes("@")) {
    return "Enter a valid email address.";
  }

  if (password.length < 6) {
    return "Password must be at least 6 characters.";
  }

  return {
    email: trimmedEmail,
    password
  };
}

function authRedirect(
  path: "/login" | "/signup",
  type: "error" | "message",
  value: string
): never {
  redirect(`${path}?${type}=${encodeURIComponent(value)}`);
}

export async function signupAction(formData: FormData) {
  const fields = readAuthFields(formData);

  if (typeof fields === "string") {
    authRedirect("/signup", "error", fields);
  }

  const supabase = await createServerSupabaseClient();
  const { error } = await supabase.auth.signUp({
    email: fields.email,
    password: fields.password
  });

  if (error) {
    authRedirect("/signup", "error", error.message);
  }

  redirect("/app");
}

export async function loginAction(formData: FormData) {
  const fields = readAuthFields(formData);

  if (typeof fields === "string") {
    authRedirect("/login", "error", fields);
  }

  const supabase = await createServerSupabaseClient();
  const { error } = await supabase.auth.signInWithPassword({
    email: fields.email,
    password: fields.password
  });

  if (error) {
    authRedirect("/login", "error", "Email or password was not accepted.");
  }

  redirect("/app");
}

export async function logoutAction() {
  const supabase = await createServerSupabaseClient();
  await supabase.auth.signOut();
  redirect("/login?message=You%20have%20been%20logged%20out.");
}
