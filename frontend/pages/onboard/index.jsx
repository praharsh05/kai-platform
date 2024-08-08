import ROUTES from '@/constants/routes';
import MainAppLayout from '@/layouts/MainAppLayout';
import OnboardLayout from '@/layouts/OnboardLayout';
import OnboardPage from '@/templates/Onboarding/OnboardPage';

const Onboard = () => {
  return <OnboardPage/>;
};

Onboard.getLayout = function getLayout(page) {
  return <OnboardLayout>{page}</OnboardLayout>
}

export default Onboard;