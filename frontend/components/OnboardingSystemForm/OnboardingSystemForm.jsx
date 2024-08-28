import { useState } from 'react';

import { Box, Button, FormGroup, Grid, Typography } from '@mui/material';

import SwitchButton from '../SwitchButton/SwitchButton';
import ThemeSwitchButton from '../ThemeSwitchButton/ThemeSwitchButton';

import styles from './styles';

export default function SystemConfig({ goToNextStep }) {
  const [config, setConfig] = useState({
    emailNotifications: false,
    pushNotifications: false,
    reminders: false,
    theme: 'dark',
  });

  const [isEmailActive, setEmailIsActive] = useState(false);
  const [isPushActive, setPushIsActive] = useState(false);
  const [isRemindersActive, setRemindersIsActive] = useState(false);

  const handleNext = () => {
    goToNextStep();
  };

  return (
    <Grid {...styles.systemConfigContainerProps}>
      <Typography {...styles.systemConfigHeaderProps}>
        System Configuration
      </Typography>

      <Typography {...styles.systemConfigSubProps}>
        We need some permissions to get you started
      </Typography>

      <FormGroup>
        <Grid>
          <Grid item xs={12}>
            <div style={styles.RowContainer}>
              <Typography {...styles.labelProps}>
                Enable Email Notifications
              </Typography>
              <SwitchButton
                isActive={isEmailActive}
                onChange={setEmailIsActive}
              />
            </div>
          </Grid>

          <Box style={styles.dividerLine} />

          <Grid item xs={12}>
            <div style={styles.RowContainer}>
              <Typography {...styles.labelProps}>
                Enable Push Notifications
              </Typography>
              <SwitchButton
                isActive={isPushActive}
                onChange={setPushIsActive}
              />
            </div>
          </Grid>

          <Box style={styles.dividerLine} />

          <Grid item xs={12}>
            <div style={styles.RowContainer}>
              <Typography {...styles.labelProps}>Enable Reminders</Typography>
              <SwitchButton
                isActive={isRemindersActive}
                onChange={setRemindersIsActive}
              />
            </div>
          </Grid>

          <Box style={styles.dividerLine} />

          <Grid item xs={12}>
            <div style={styles.RowContainer}>
              <Typography {...styles.themeLabelProps} htmlFor="theme">
                Theme Selection
              </Typography>
              <ThemeSwitchButton
                theme={config.theme}
                onChange={(newTheme) =>
                  setConfig({ ...config, theme: newTheme })
                }
              />
            </div>
          </Grid>
        </Grid>
      </FormGroup>

      <Button {...styles.nextButtonProps} onClick={handleNext} type="submit">
        Finish
      </Button>
    </Grid>
  );
}
