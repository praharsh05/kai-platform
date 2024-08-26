import { useState } from 'react';

import {
  FormControlLabel,
  FormGroup,
  Grid,
  MenuItem,
  Select,
  Switch,
  Typography,
} from '@mui/material';

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

  const handleThemeChange = (e) => {
    setConfig({ ...config, theme: e.target.value });
  };

  const handleNext = () => {
    goToNextStep();
  };

  return (
    <div>
      <Typography variant="h2" style={{ marginBottom: '20px' }}>
        System Configuration
      </Typography>

      <FormGroup>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <FormControlLabel
              control={
                <Switch
                  checked={config.emailNotifications}
                  onChange={handleSwitchChange}
                  name="emailNotifications"
                  color="primary"
                />
              }
              label={
                <Typography variant="Body 1">
                  Enable Email Notifications
                </Typography>
              }
            />
          </Grid>

          <Grid item xs={12}>
            <FormControlLabel
              control={
                <Switch
                  checked={config.pushNotifications}
                  onChange={handleSwitchChange}
                  name="pushNotifications"
                  color="primary"
                />
              }
              label={
                <Typography variant="Body 1">
                  Enable Push Notifications
                </Typography>
              }
            />
          </Grid>

          <Grid item xs={12}>
            <FormControlLabel
              control={
                <Switch
                  checked={config.reminders}
                  onChange={handleSwitchChange}
                  name="reminders"
                  color="primary"
                />
              }
              label={<Typography variant="Body 1">Enable Reminders</Typography>}
            />
          </Grid>

          <Grid item xs={12}>
            <Typography variant="Body 1" component="label" htmlFor="theme">
              Theme Selection
            </Typography>
            <Select
              id="theme"
              name="theme"
              value={config.theme}
              onChange={handleThemeChange}
              fullWidth
              style={{ marginTop: '8px' }}
            >
              <MenuItem value="light">Light</MenuItem>
              <MenuItem value="dark">Dark</MenuItem>
            </Select>
          </Grid>
        </Grid>
      </FormGroup>

      <button className={styles.nextButton} onClick={handleNext} type="submit">
        Next
      </button>
    </div>
  );
}
