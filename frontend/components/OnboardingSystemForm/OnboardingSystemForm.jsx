import { useState } from 'react';

import {
  Button,
  FormControlLabel,
  FormGroup,
  Grid,
  Switch,
  Typography,
} from '@mui/material';

import ThemeSwitchButton from '../ThemeSwitchButton/ThemeSwitchButton';

import styles from './styles';

export default function SystemConfig({ goToNextStep }) {
  const [config, setConfig] = useState({
    emailNotifications: false,
    pushNotifications: false,
    reminders: false,
    theme: 'light',
  });

  const handleSwitchChange = (e) => {
    setConfig({ ...config, [e.target.name]: e.target.checked });
  };

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
            <FormControlLabel
              labelPlacement="start"
              label={
                <Typography {...styles.labelProps}>
                  Enable Email Notifications
                </Typography>
              }
              control={
                <Switch
                  checked={config.emailNotifications}
                  onChange={handleSwitchChange}
                  name="emailNotifications"
                  color="primary"
                  {...styles.switchProps}
                />
              }
            />
          </Grid>

          <Grid item xs={12}>
            <FormControlLabel
              labelPlacement="start"
              label={
                <Typography {...styles.labelProps}>
                  Enable Push Notifications
                </Typography>
              }
              control={
                <Switch
                  checked={config.pushNotifications}
                  onChange={handleSwitchChange}
                  name="pushNotifications"
                  color="primary"
                  {...styles.switchProps}
                />
              }
            />
          </Grid>

          <Grid item xs={12}>
            <FormControlLabel
              labelPlacement="start"
              label={
                <Typography {...styles.labelProps}>Enable Reminders</Typography>
              }
              control={
                <Switch
                  checked={config.reminders}
                  onChange={handleSwitchChange}
                  name="reminders"
                  color="primary"
                  {...styles.switchProps}
                />
              }
            />
          </Grid>

          <Grid item xs={12}>
            <Typography {...styles.themeLabelProps} htmlFor="theme">
              Theme Selection
            </Typography>
            <ThemeSwitchButton
              theme={config.theme}
              onChange={(newTheme) => setConfig({ ...config, theme: newTheme })}
            />
          </Grid>
        </Grid>
      </FormGroup>

      <Button {...styles.nextButtonProps} onClick={handleNext} type="submit">
        Finish
      </Button>
    </Grid>
  );
}
