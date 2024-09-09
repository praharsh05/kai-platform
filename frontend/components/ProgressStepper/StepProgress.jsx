import { LinearProgress } from '@mui/material';

import styles from './styles';

const StepProgress = (props) => {
  const { step, current, progress } = props;
  let value = 0;
  if (current === step) {
    value = progress;
  } else if (current > step) {
    value = 100;
  }
  return <LinearProgress {...styles.linearProgressProps} value={value} />;
};

export default StepProgress;
