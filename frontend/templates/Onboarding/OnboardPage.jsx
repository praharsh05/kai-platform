import { Button, Grid } from '@mui/material';

import ProgressBar from '@/components/ProgressBar';

import styles from './styles';
import WelcomePage from './WelcomePage';

const OnboardPage = () => {

  return (
    <Grid {...styles.mainGridProps}>
      <ProgressBar />
      <WelcomePage />
      <Button {...styles.startButtonProps}>Start Here!</Button>
    </Grid>
  );
};

export default OnboardPage;
