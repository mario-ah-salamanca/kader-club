import { OnboardingStepper } from "@/features/onboarding/onboarding-stepper";
import { ScoutingFocusForm } from "@/features/onboarding/scouting-focus-form";

export default function OnboardingFocusPage() {
  return (
    <section className="onboarding-page">
      <OnboardingStepper activeStep="focus" />
      <ScoutingFocusForm />
    </section>
  );
}
