import { OnboardingStepper } from "@/features/onboarding/onboarding-stepper";
import { FirstAcquisitionPicker } from "@/features/onboarding/first-acquisition-picker";

export default function FirstCardOnboardingPage() {
  return (
    <section className="onboarding-page">
      <OnboardingStepper activeStep="first-card" />
      <FirstAcquisitionPicker />
    </section>
  );
}
