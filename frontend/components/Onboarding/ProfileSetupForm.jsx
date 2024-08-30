import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';

import LinkedInIcon from '@mui/icons-material/LinkedIn';

import TwitterIcon from '@mui/icons-material/Twitter';

import { Box, Button, Grid, TextField, Typography } from '@mui/material';

import styles from './ProfileSetupStyles';

export default function ProfileSetupForm() {
  const uploadImageText = ' Uplaod an Image';
  const bioTextSecondary = ' 200 words';
  return (
    <Box {...styles.mainContainerProps}>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={3}>
          <Grid item size={6}>
            <Typography {...styles.formLabel}>Full Name</Typography>
            <TextField
              placeholder="Enter Name"
              name="fullName"
              {...styles.textFieldSmall}
            />
          </Grid>
          <Grid item size={6}>
            <Typography {...styles.formLabel}>Occupation</Typography>
            <TextField
              placeholder="Enter Occupation"
              name="occupation"
              {...styles.textFieldSmall}
            />
          </Grid>
        </Grid>
        <Box {...styles.socialSection}>
          <Grid container spacing={2}>
            <Grid item size={12}>
              <Typography {...styles.formLabel}>Social Links</Typography>
              <Grid item size={12} {...styles.socialLinkGrid}>
                <Box {...styles.uploadBox}>
                  <FacebookRoundedIcon {...styles.socialIcons} />
                  <TextField {...styles.socialLinkTextField} />
                </Box>
              </Grid>
              <Grid item size={12} sx={{ paddingBottom: '12px' }}>
                <Box {...styles.uploadBox}>
                  <LinkedInIcon {...styles.socialIcons} />
                  <TextField {...styles.socialLinkTextField} />
                </Box>
              </Grid>
              <Grid item size={12}>
                <Box {...styles.uploadBox}>
                  <TwitterIcon {...styles.socialIcons} />
                  <TextField {...styles.socialLinkTextField} />
                </Box>
              </Grid>
            </Grid>
          </Grid>
        </Box>
        <Grid container>
          <Grid item size={12}>
            <Typography {...styles.formLabel}>Profile</Typography>
            <Button {...styles.profileUploadButton}>
              <Grid
                container
                direction="column"
                alignItems="center"
                spacing={0}
              >
                <Grid item>
                  <Box display="flex" flexDirection="row" alignItems="center">
                    <Typography {...styles.uploadTextPrimary}>
                      Drag & Drop OR
                      <Box component="span" {...styles.uploadTextSecondary}>
                        {uploadImageText}
                      </Box>
                      <input
                        type="file"
                        hidden
                        // onChange={handleFileChange} // handle file change here
                      />
                    </Typography>
                  </Box>
                </Grid>
                <Grid item>
                  <Typography {...styles.formProfileCaption}>
                    Formats: JPG, PNG, PDF | Upto 1 MB
                  </Typography>
                </Grid>
              </Grid>
            </Button>
          </Grid>
        </Grid>
        <Grid container>
          <Grid item size={12} sx={{ paddingTop: '12px' }}>
            <Typography {...styles.formLabel}>Bio</Typography>
            <Grid item size={12}>
              <TextField
                placeholder="Introduce yourself in a few words"
                {...styles.bioTextField}
              />
            </Grid>
            <Box {...styles.bioTextSection}>
              <Typography {...styles.bioCaptionPrimary}>
                Word Limit:
                <Box component="span" {...styles.bioCaptionSecondary}>
                  {bioTextSecondary}
                </Box>
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
