import SystemConfiguratoinsForm from '@/components/OnboardingSystemForm/OnboardingSystemForm';
import OnboardingLayout from '@/layouts/OnboardLayout';

export default function ProfileSetupScreen({ goToNextStep }) {
  return (
    <OnboardingLayout currentStep={3}>
      <SystemConfiguratoinsForm goToNextStep={goToNextStep} />
    </OnboardingLayout>
  );
}
