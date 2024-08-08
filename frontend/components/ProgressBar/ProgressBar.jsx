import { useState } from "react";
import { Step, Stepper, StepLabel, Box, Menu, IconButton, MenuItem } from "@mui/material";
import styles from "./styles";
import ArrowDropDownCircleIcon from '@mui/icons-material/ArrowDropDownCircle';

const steps = [
  "Welcome",
  "Profile Setup",
  "System Configurations",
  "Final Steps",
];

const ProgressBar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <Box {...styles.mainContainerProps}>
      <Stepper {...styles.stepperProps}>
        {steps.map((value) => (
          <Step key={value}>
            <StepLabel>{value}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <IconButton
        id='dropdown-button'
        aria-controls={open ? 'steps-menu' : undefined}
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}  
      >
        <ArrowDropDownCircleIcon/>
      </IconButton>
      <Menu
        id='steps-menu'
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        {steps.map((value) => (
          <MenuItem>{value}</MenuItem>
        ))}
      </Menu>
    </Box>
  );
};

export default ProgressBar;
