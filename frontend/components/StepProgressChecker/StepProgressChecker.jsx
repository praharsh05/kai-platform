import CheckCircleTwoToneIcon from '@mui/icons-material/CheckCircleTwoTone';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import { Box, Checkbox, LinearProgress } from '@mui/material';

import styles from './styles';

/**
 * Generates a component that tracks the current step's progress and whether it is completed
 *
 * @param {object} props - The properties for the component
 * @param {boolean} props.isFinal - The boolean value for if this is the final step
 *
 * @returns {JSX.Element} - The step completion checkbox and the step progress if it is not the final step
 */

const StepProgressChecker = (props) => {
  const { isFinal } = props;

  return (
    <Box {...styles.mainBoxProps}>
      <Checkbox
        {...styles.checkboxProps}
        icon={<RadioButtonUncheckedIcon />}
        checkedIcon={<CheckCircleTwoToneIcon />}
      />
      {!isFinal && <LinearProgress {...styles.linearProgressProps} />}
    </Box>
  );
};

export default StepProgressChecker;
