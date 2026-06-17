import type { OnboardingStep } from "@/features/onboarding/types";

const steps: { id: OnboardingStep; label: string; meta: string }[] = [
  { id: "welcome", label: "Welcome", meta: "Step 1 of 3" },
  { id: "focus", label: "Scouting Focus", meta: "Step 2 of 3" },
  { id: "first-card", label: "First Card", meta: "Step 3 of 3" }
];

type OnboardingStepperProps = {
  activeStep: OnboardingStep;
};

export function OnboardingStepper({ activeStep }: OnboardingStepperProps) {
  const activeIndex = steps.findIndex((step) => step.id === activeStep);

  return (
    <div className="onboarding-stepper" aria-label="Onboarding progress">
      {steps.map((step, index) => {
        const isActive = index === activeIndex;
        const isComplete = index < activeIndex;

        return (
          <div
            className="onboarding-step"
            data-active={isActive}
            data-complete={isComplete}
            key={step.id}
          >
            <span>{isActive ? step.meta : step.meta.replace(" of 3", "")}</span>
            <div />
            <strong>{step.label}</strong>
          </div>
        );
      })}
    </div>
  );
}
