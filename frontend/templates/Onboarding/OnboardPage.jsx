import { Box, Grid, Typography, Button } from "@mui/material";
import styles from "./styles";
import ProgressBar from "@/components/ProgressBar";

const OnboardPage = (props) => {
  return (
    <Grid {...styles.mainGridProps}>
      <ProgressBar />
      <Box {...styles.welcomeMessageBoxProps}>
        <Typography {...styles.welcomMessageProps}>
          Welcome to <span style={{ color: '#8653FF' }}>KAI</span> 👋
        </Typography>
        <Typography {...styles.subMessageProps}>Let's get started!</Typography>
      </Box>
      <Button {...styles.startButtonProps}>Start Here!</Button>
    </Grid>
  );
};

export default OnboardPage;
