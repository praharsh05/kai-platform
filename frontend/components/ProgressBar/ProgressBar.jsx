import { useState } from "react";

import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Backdrop,
  Box,
  Checkbox,
  Grid,
  IconButton,
  Menu,
  MenuItem,
  Typography,
} from "@mui/material";
import CheckCircleTwoToneIcon from '@mui/icons-material/CheckCircleTwoTone';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import StepProgressChecker from "../StepProgressChecker";

import styles from "./styles";

const STEPS = [
  "Welcome",
  "Profile Setup",
  "System Configurations",
  "Final Steps",
];

/**
 * Generate a progress bar that includes each step progress checker and a dropdown menu
 *
 * @returns {JSX.Element} The progress bar
 */
const ProgressBar = () => {
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const renderProgressChecker = (index) => {
    return (
      <StepProgressChecker key={index} isFinal={index === STEPS.length - 1} />
    );
  };

  const renderProgressBar = () => {
    return (
      <Accordion
        expanded={expanded === 'panel'}
        onChange={handleChange('panel')}
        {...styles.accordionProps}
      >
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Box {...styles.progressContainerProps}>
            {STEPS.map((step, index) => renderProgressChecker(index))}
          </Box>
        </AccordionSummary>
        <AccordionDetails {...styles.accordionDetailsProps}>
          {STEPS.map((step, index) => (
            <Grid key={index} {...styles.accordionItemProps}>
              <Checkbox
                icon={<RadioButtonUncheckedIcon />}
                checkedIcon={<CheckCircleTwoToneIcon />}
                sx={{ marginTop: '5px' }}
              />
              <Typography sx={{ marginTop: '12px' }}>
                {step}
              </Typography>
            </Grid>
          ))}
        </AccordionDetails>
      </Accordion>
    );
  };

  return (
    <Box {...styles.mainContainerProps}>
      {expanded && <div style={{ ...styles.expandedBgProps }} />}
      {renderProgressBar()}
    </Box>
  );
};

export default ProgressBar;
