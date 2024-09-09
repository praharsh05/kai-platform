import { useState } from 'react';

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Grid,
  Typography,
} from '@mui/material';

import CustomCheckIcon from '../CustomCheckIcon';
import ProgressStepper from '../ProgressStepper';

import styles from './styles';

/**
 * Generate a progress bar that includes each step progress checker and a dropdown menu
 *
 * @returns {JSX.Element} The progress bar
 */
const ProgressBar = (props) => {
  const { steps, current, progress } = props;
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
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
            <ProgressStepper
              steps={steps}
              current={current}
              progress={progress}
            />
          </Box>
        </AccordionSummary>
        <AccordionDetails {...styles.accordionDetailsProps}>
          {steps.map((step, index) => (
            <Grid key={index} {...styles.accordionItemProps}>
              <CustomCheckIcon
                checked={index < current}
                {...styles.customCheckIconProps}
              />
              <Typography {...styles.stepLabelProps}>{step}</Typography>
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
