import OnboardLayout from '@/layouts/OnboardLayout';
import OnboardPage from '@/templates/Onboarding/OnboardPage';
import SystemConfigurations from '@/templates/Onboarding/SystemConfigurations/SystemConfigurations';

const Onboard = () => {
  // return <OnboardPage />;
  return <SystemConfigurations />;
};

Onboard.getLayout = function getLayout(page) {
  return <OnboardLayout>{page}</OnboardLayout>;
};

export default Onboard;
