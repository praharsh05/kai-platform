import { useState } from 'react';

import { Button, Grid } from '@mui/material';

import axios from 'axios';

import ProgressBar from '@/components/ProgressBar';

import FinalStepsPage from './FinalStepsPage';
import styles from './styles';
import WelcomePage from './WelcomePage';

const STEPS = [
  'Welcome',
  'Profile Setup',
  'System Configurations',
  'Final Steps',
];

const OnboardPage = () => {
  const [progress, setProgress] = useState(0);
  const [activeStep, setActiveStep] = useState(0);

  const [uid, setUid] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleNext = () => {
    setProgress(0);
    setActiveStep((prev) => prev + 1);
  };

  const handleClick = () => {
    if (progress < 80) {
      setProgress((prev) => prev + 20);
    } else {
      handleNext();
    }
  };

  const submitWelcomeStep = async () => {
    setIsSubmitting(true);
    try {
      await axios.post('api/saveStep1', { uid });
    } catch (error) {
      console.error('Error during submission for step 1:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const submitFinalStep = async () => {
    setIsSubmitting(true);
    try {
      await axios.post('api/saveStep4', { uid });
    } catch (error) {
      console.error('Error during submission for step 4:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  // const handleClick = () => {
  //   switch (activeStep) {
  //     case 0:
  //       submitWelcomeStep();
  //       break;
  //     case 1:
  //       break;
  //     case 2:
  //       break;
  //     case 3:
  //       submitFinalStep();
  //       break;
  //     default:
  //   }
  // }

  const updateButtonText = () => {
    switch (activeStep) {
      case 0:
        return 'Start Here!';
      case 3:
        return 'Finish';
      default:
        return 'Next';
    }
  };

  const renderPage = () => {
    switch (activeStep) {
      case 0:
        return <WelcomePage />;
      case 1:
        return null;
      case 2:
        return null;
      case 3:
        return <FinalStepsPage steps={STEPS} current={activeStep} />;
      default:
        return null;
    }
  };

  return (
    <Grid {...styles.mainGridProps}>
      <ProgressBar steps={STEPS} current={activeStep} progress={progress} />
      {renderPage()}
      <Button {...styles.startButtonProps} onClick={handleClick}>
        {updateButtonText()}
      </Button>
    </Grid>
  );
};

export default OnboardPage;
