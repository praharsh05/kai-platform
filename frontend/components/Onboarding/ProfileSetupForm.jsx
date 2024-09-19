import React, { useRef } from 'react'; // Import useRef to handle file input ref

import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';

import LinkedInIcon from '@mui/icons-material/LinkedIn';

import TwitterIcon from '@mui/icons-material/Twitter';

import { Box, Button, Grid, TextField, Typography } from '@mui/material';

import styles from './ProfileSetupStyles';

const ProfileSetupForm = ({ formData, handleChange, setStep2Data }) => {
  const fileInputRef = useRef(null); // Create a ref for the file input

  // Function to handle file input changes
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    setStep2Data({ ...formData, profileImage: file });
  };

  // Function to trigger file input click
  const handleButtonClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click(); // Trigger the file input click
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setStep2Data({ ...formData, [name]: value });
    handleChange(e);
  };

  const uploadImageText = ' Upload an Image';
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
              value={formData.fullName}
              onChange={handleInputChange}
              {...styles.textFieldSmall}
            />
          </Grid>
          <Grid item size={6}>
            <Typography {...styles.formLabel}>Occupation</Typography>
            <TextField
              placeholder="Enter Occupation"
              name="occupation"
              value={formData.occupation}
              onChange={handleInputChange}
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
                  <TextField
                    {...styles.socialLinkTextField}
                    name="facebookUrl"
                    value={formData.facebookUrl}
                    onChange={handleInputChange}
                  />
                </Box>
              </Grid>
              <Grid item size={12} sx={{ paddingBottom: '12px' }}>
                <Box {...styles.uploadBox}>
                  <LinkedInIcon {...styles.socialIcons} />
                  <TextField
                    {...styles.socialLinkTextField}
                    name="linkedInUrl"
                    value={formData.linkedInUrl}
                    onChange={handleInputChange}
                  />
                </Box>
              </Grid>
              <Grid item size={12}>
                <Box {...styles.uploadBox}>
                  <TwitterIcon {...styles.socialIcons} />
                  <TextField
                    {...styles.socialLinkTextField}
                    name="xUrl"
                    value={formData.xUrl}
                    onChange={handleInputChange}
                  />
                </Box>
              </Grid>
            </Grid>
          </Grid>
        </Box>
        <Grid container>
          <Grid item size={12}>
            <Typography {...styles.formLabel}>Profile</Typography>
            <Button
              {...styles.profileUploadButton}
              onClick={handleButtonClick} // Add click handler to trigger file input
            >
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
                        ref={fileInputRef} // Attach ref to the file input
                        onChange={handleImageUpload} // Handle file change
                        style={{ display: 'none' }} // Hide the input element
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
                value={formData.bio}
                name="bio"
                onChange={handleInputChange}
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
};

export default ProfileSetupForm;
