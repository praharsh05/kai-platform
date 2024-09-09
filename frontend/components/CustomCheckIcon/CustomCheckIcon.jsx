import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import { Checkbox } from '@mui/material';

const CustomCheckIcon = (props) => {
  return (
    <Checkbox
      {...props}
      icon={<RadioButtonUncheckedIcon />}
      checkedIcon={<CheckCircleIcon />}
    />
  );
};

export default CustomCheckIcon;
