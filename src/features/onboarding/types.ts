export type OnboardingStep = "welcome" | "focus" | "first-card";

export type CollectorPreference = {
  selectedLeagues: string[];
  selectedClubs: string[];
  selectedCardId?: string;
};
