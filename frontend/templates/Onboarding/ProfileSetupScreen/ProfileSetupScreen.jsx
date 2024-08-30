import { Box, Button, Grid, Typography } from '@mui/material';

import ProfileSetupForm from '@/components/Onboarding/ProfileSetupForm';

import ProgressBar from '@/components/ProgressBar';

import styles from './styles';

export default function ProfileSetupScreen({ goToNextStep }) {
  return (
    <Grid {...styles.mainGridProps}>
      <ProgressBar />
      <Box {...styles.profileSetupMessageBoxProps}>
        <Typography {...styles.profileTitle}>Profile Setup</Typography>
        <Typography {...styles.profileSubTitle}>
          Get started by setting up your profile
        </Typography>
      </Box>
      <ProfileSetupForm goToNextStep={goToNextStep} />
      <Button {...styles.NextButtonProps} onClick={goToNextStep}>
        Next
      </Button>
    </Grid>
  );
}
