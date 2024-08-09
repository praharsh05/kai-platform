import { Box, Button, Grid, Typography } from '@mui/material';

import ProgressBar from '@/components/ProgressBar';

import styles from './styles';

const OnboardPage = () => {
  const renderMessage = () => {
    return (
      <Box {...styles.welcomeMessageBoxProps}>
        <Typography {...styles.welcomMessageProps}>
          Welcome to <span style={{ color: '#8653FF' }}>KAI</span> 👋
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
      <Button {...styles.startButtonProps}>Start Here!</Button>
    </Grid>
  );
};

export default OnboardPage;
