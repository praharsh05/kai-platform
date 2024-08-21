import OnboardLayout from '@/layouts/OnboardLayout';
import OnboardPage from '@/templates/Onboarding/OnboardPage';
import ProfileSetupScreen from '@/templates/Onboarding/ProfileSetupScreen/ProfileSetupScreen';

const Onboard = () => {
  // return <OnboardPage />;
  return <ProfileSetupScreen />;
  // return (
  //   <div>
  //     {/* {currentStep === 1 && <OnboardPage goToNextStep={goToNextStep} />} */}
  //     {currentStep === 2 && <ProfileSetupScreen goToNextStep={goToNextStep} />}
  //     {/* Add more steps as needed */}
  //   </div>
  // );
};

Onboard.getLayout = function getLayout(page) {
  return <OnboardLayout>{page}</OnboardLayout>;
};

export default Onboard;
