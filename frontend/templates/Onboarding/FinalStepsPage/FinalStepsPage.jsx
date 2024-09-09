import { Grid, Typography } from '@mui/material';

import CustomCheckIcon from '@/components/CustomCheckIcon';

import styles from './styles';

const FinalStepsPage = (props) => {
  const { steps } = props;

  const renderHeaderMessage = () => {
    return (
      <>
        <Typography {...styles.finalStepMessageProps}>Final Steps</Typography>
        <Typography {...styles.subMessageProps}>
          Review your progree before wrapping up!
        </Typography>
      </>
    );
  };

  const renderSteps = () => {
    return (
      <Grid {...styles.stepsContainerProps}>
        {steps.map((step, index) => (
          <Grid key={index} {...styles.stepItemProps}>
            <CustomCheckIcon />
            <Typography {...styles.stepLabelProps}>{step}</Typography>
          </Grid>
        ))}
      </Grid>
    );
  };

  return (
    <Grid {...styles.mainContainerProps}>
      {renderHeaderMessage()}
      {renderSteps()}
    </Grid>
  );
};

export default FinalStepsPage;
