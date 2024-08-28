import { Box, Button, Grid, TextField, Typography } from '@mui/material';

import styles from './ProfileSetupStyles';

export default function ProfileSetupForm() {
  return (
    <Box {...styles.mainContainerProps}>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item size={6}>
            <Typography {...styles.formLabel}>Full Name</Typography>
            <TextField
              fullWidth
              label="Enter Name"
              name="fullName"
              {...styles.formTextField}
            />
          </Grid>
          <Grid item size={6}>
            <Typography {...styles.formLabel}>Occupation</Typography>
            <TextField
              fullWidth
              label="Enter Occupation"
              name="occupation"
              {...styles.formTextField}
            />
          </Grid>
        </Grid>
        <Box sx={{ flexDirection: 'row' }}>
          <Grid container>
            <Grid item size={12}>
              <Typography {...styles.formLabel}>Social Links</Typography>
              <Grid item size={12}>
                <TextField fullWidth label="Social Link" variant="outlined" />
              </Grid>
              <Grid item size={12}>
                <TextField fullWidth label="Social Link" variant="outlined" />
              </Grid>
              <Grid item size={12}>
                <TextField fullWidth label="Social Link" variant="outlined" />
              </Grid>
            </Grid>
          </Grid>
        </Box>
        <Grid container>
          <Grid item size={12}>
            <Typography {...styles.formLabel}>Profile</Typography>
            <Box
              sx={{
                border: '1px solid gray',
                padding: 2,
                borderRadius: '20px',
                textAlign: 'center',
                cursor: 'pointer',
              }}
            >
              <Typography {...styles.formLabel}>Drag & Drop OR </Typography>
              <Button>Upload an Image</Button>
              <Typography {...styles.formProfileCaption}>
                Formats: JPG, PNG, PDF | Upto 1 MB
              </Typography>
            </Box>
          </Grid>
        </Grid>
        <Grid container>
          <Grid item size={12}>
            <Typography {...styles.formLabel}>Bio</Typography>
            <Grid item size={12}>
              <TextField
                fullWidth
                label="Introduce yourself in a few words"
                variant="outlined"
              />
              <Typography {...styles.formProfileCaption}>
                Word Limit: 200 words
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
