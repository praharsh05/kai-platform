import { Box, Grid, Typography, Step, Stepper, StepLabel} from "@mui/material";
import styles from "./styles";

const steps = ['Welcome', 'Profile Setup', 'System Configurations', 'Final Steps'];

const OnboardLayout = (props) => {
  const { children } = props
  return (
    <Box {...styles.mainContainerProps}>
      {children}
    </Box>
  )
};

export default OnboardLayout;