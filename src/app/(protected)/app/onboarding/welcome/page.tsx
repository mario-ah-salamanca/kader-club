import Link from "next/link";
import { ArrowRightIcon, SparklesIcon } from "@/components/icons";
import { OnboardingStepper } from "@/features/onboarding/onboarding-stepper";
import { createServerSupabaseClient } from "@/lib/supabase/server";

export default async function OnboardingWelcomePage() {
  const supabase = await createServerSupabaseClient();
  const { data } = await supabase.auth.getUser();
  const fullName = data.user?.user_metadata?.full_name;
  const displayName =
    typeof fullName === "string" && fullName.trim()
      ? fullName.trim().split(" ")[0]
      : "Collector";

  return (
    <section className="onboarding-page">
      <OnboardingStepper activeStep="welcome" />
      <div className="onboarding-panel">
        <span className="eyebrow">
          <SparklesIcon /> Let&apos;s get started
        </span>
        <h1>
          Welcome to the Club, <span>{displayName}.</span>
        </h1>
        <p>
          We will personalize your first collection loop around your scouting
          focus and first card target. This keeps the MVP fun while staying
          grounded in collection management.
        </p>
        <div className="welcome-binder-visual" aria-hidden="true">
          <div />
          <div />
          <div />
        </div>
        <Link className="button button-primary" href="/app/onboarding/focus">
          Start setup <ArrowRightIcon />
        </Link>
      </div>
    </section>
  );
}
