import { Box } from '@mui/material';

import CustomCheckIcon from '../CustomCheckIcon';

import StepProgress from './StepProgress';

import styles from './styles';

const ProgressStepper = (props) => {
  const { steps, current, progress } = props;

  const renderIndividualStep = (key) => {
    return (
      <Box key={key} {...styles.mainBoxProps}>
        <CustomCheckIcon checked={key < current} />
        {key !== steps.length - 1 && (
          <StepProgress step={key} current={current} progress={progress} />
        )}
      </Box>
    );
  };

  return <>{steps.map((step, index) => renderIndividualStep(index))}</>;
};

export default ProgressStepper;
