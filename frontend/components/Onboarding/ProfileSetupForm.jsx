import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';

import LinkedInIcon from '@mui/icons-material/LinkedIn';

import TwitterIcon from '@mui/icons-material/Twitter';

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
        <Box sx={{ flexDirection: 'row', flexGrow: 1 }}>
          <Grid container spacing={2}>
            <Grid item size={12}>
              <Typography {...styles.formLabel}>Social Links</Typography>
              <Grid item size={12}>
                <Box {...styles.uploadBox}>
                  <FacebookRoundedIcon
                    {...styles.socialIcons}
                    sx={{ color: 'primary.main', mr: 1, my: 0.5 }}
                  />
                  <TextField
                    fullWidth
                    label="| Paste Link"
                    variant="standard"
                  />
                </Box>
              </Grid>
              <Grid item size={12}>
                <Box {...styles.uploadBox}>
                  <LinkedInIcon
                    {...styles.socialIcons}
                    sx={{ color: 'primary.main', mr: 1, my: 0.5 }}
                  />
                  <TextField
                    fullWidth
                    label="| Paste Link"
                    variant="standard"
                  />
                </Box>
              </Grid>
              <Grid item size={12}>
                <Box {...styles.uploadBox}>
                  <TwitterIcon
                    {...styles.socialIcons}
                    sx={{ color: 'primary.main', mr: 1, my: 0.5 }}
                  />
                  <TextField
                    fullWidth
                    label="| Paste Link"
                    variant="standard"
                  />
                </Box>
              </Grid>
            </Grid>
          </Grid>
        </Box>
        <Grid container>
          <Grid item size={12}>
            <Typography {...styles.formLabel}>Profile</Typography>
            <Box {...styles.uploadBox}>
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
