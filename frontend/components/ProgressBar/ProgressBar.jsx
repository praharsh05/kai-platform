import { useState } from 'react';

import ArrowDropDownCircleIcon from '@mui/icons-material/ArrowDropDownCircle';
import {
  Backdrop,
  Box,
  Checkbox,
  IconButton,
  Menu,
  MenuItem,
} from '@mui/material';

import StepProgressChecker from '../StepProgressChecker';

import styles from './styles';

const STEPS = [
  'Welcome',
  'Profile Setup',
  'System Configurations',
  'Final Steps',
];

/**
 * Generate a progress bar that includes each step progress checker and a dropdown menu
 *
 * @returns {JSX.Element} The progress bar
 */
const ProgressBar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [open, setOpen] = useState(Boolean(anchorEl));

  // Event handler when the dropdown menu is opened
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    setOpen(true);
  };

  // Event handler when the dropdown menu is closed
  const handleClose = () => {
    setAnchorEl(null);
    setOpen(false);
  };

  const renderProgressChecker = (index) => {
    return (
      <StepProgressChecker key={index} isFinal={index === STEPS.length - 1} />
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
            {STEPS.map((value) => (
              <MenuItem key={value}>
                <Checkbox />
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
      {STEPS.map((value, index) => renderProgressChecker(index))}
      {renderDropdownMenu()}
    </Box>
  );
};

export default ProgressBar;
