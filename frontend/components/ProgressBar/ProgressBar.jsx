import { useState } from 'react';

import ArrowDropDownCircleIcon from '@mui/icons-material/ArrowDropDownCircle';
import { Backdrop, Box, IconButton, Menu, MenuItem } from '@mui/material';

import StepCompletedChecker from '../StepCompletedChecker';
import StepProgressChecker from '../StepProgressChecker';

import styles from './styles';

const steps = [
  'Welcome',
  'Profile Setup',
  'System Configurations',
  'Final Steps',
];

const ProgressBar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [open, setOpen] = useState(Boolean(anchorEl));

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    setOpen(true);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setOpen(false);
  };

  const renderProgressChecker = () => {
    return (
      <Box {...styles.progressCheckerBoxProps}>
        {steps.map((value, index) => {
          if (index === 0) {
            return <StepCompletedChecker key={value} />;
          }
          return (
            <>
              <StepProgressChecker key={value} />
              <StepCompletedChecker key={value} />
            </>
          );
        })}
      </Box>
    );
  };

  const renderDropdownMenu = () => {
    return (
      <>
        <IconButton
          {...styles.iconButtonProps}
          id="dropdown-button"
          aria-controls={open ? 'steps-menu' : undefined}
          aria-expanded={open ? 'true' : undefined}
          onClick={handleClick}
        >
          <ArrowDropDownCircleIcon />
        </IconButton>
        <Backdrop {...styles.backdropProps} open={open} onClick={handleClose}>
          <Menu
            {...styles.menuProps}
            id="steps-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
          >
            {steps.map((value) => (
              <MenuItem key={value}>
                <StepCompletedChecker />
                {value}
              </MenuItem>
            ))}
          </Menu>
        </Backdrop>
      </>
    );
  };

  return (
    <Box {...styles.mainContainerProps}>
      {renderProgressChecker()}
      {renderDropdownMenu()}
    </Box>
  );
};

export default ProgressBar;
