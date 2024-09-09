import { useState } from 'react';

import { Button, Grid } from '@mui/material';

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

  return (
    <Grid {...styles.mainGridProps}>
      <ProgressBar steps={STEPS} current={activeStep} progress={progress} />
      {/* <WelcomePage /> */}
      <FinalStepsPage steps={STEPS} />
      <Button {...styles.startButtonProps} onClick={handleClick}>
        Start Here!
      </Button>
    </Grid>
  );
};

export default OnboardPage;
