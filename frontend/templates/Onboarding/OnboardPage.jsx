import { useState } from 'react';

import { Box, Button, Grid, Typography } from '@mui/material';

import ProgressBar from '@/components/ProgressBar';

import styles from './styles';

const OnboardPage = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const goToNextStep = () => {
    setCurrentStep(currentStep + 1);
  };
  const renderMessage = () => {
    return (
      <Box {...styles.welcomeMessageBoxProps}>
        <Typography {...styles.welcomMessageProps}>
          Welcome to <span style={styles.kaiWordProps}>KAI</span> 👋
        </Typography>
        <Typography {...styles.subMessageProps}>
          Let&apos;s get started!
        </Typography>
      </Box>
    );
  };

  return (
    <Grid {...styles.mainGridProps}>
      <ProgressBar />
      {renderMessage()}
      <Button {...styles.startButtonProps} onClick={goToNextStep}>
        Start Here!
      </Button>
    </Grid>
  );
};

export default OnboardPage;
