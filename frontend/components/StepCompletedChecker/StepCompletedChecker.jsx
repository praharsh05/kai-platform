import CheckCircleTwoToneIcon from '@mui/icons-material/CheckCircleTwoTone';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import { Checkbox } from '@mui/material';

import styles from './styles';

const StepCompletedChecker = () => {
  return (
    <Checkbox
      {...styles.checkboxProps}
      icon={<RadioButtonUncheckedIcon />}
      checkedIcon={<CheckCircleTwoToneIcon />}
    />
  );
};

export default StepCompletedChecker;
