import ProfileSetupForm from '@/components/Onboarding/ProfileSetupForm';

import OnboardingLayout from '@/layouts/OnboardLayout';

export default function ProfileSetupScreen({ goToNextStep }) {
  return (
    <OnboardingLayout currentStep={2}>
      <ProfileSetupForm goToNextStep={goToNextStep} />
    </OnboardingLayout>
  );
}
