import { useState } from 'react';

import {
  Box,
  Button,
  Container,
  Grid,
  TextField,
  Typography,
} from '@mui/material';

import styles from './ProfileSetupStyles';

export default function ProfileSetupForm({ goToNextStep }) {
  const [profileData, setProfileData] = useState({
    fullName: '',
    occupation: '',
    socialLinks: ['', '', ''],
    bio: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfileData({
      ...profileData,
      [name]: value,
    });
  };

  const handleSocialLinkChange = (index, value) => {
    const updatedLinks = [...profileData.socialLinks];
    updatedLinks[index] = value;
    setProfileData({ ...profileData, socialLinks: updatedLinks });
  };

  return (
    <Box>
      {/* <Container>
        <Typography variant="h5" gutterBottom>
          Profile Setup
        </Typography>
        <Typography variant="subtitle1" gutterBottom>
          Get started by setting up your profile
        </Typography>
      </Container>
      <Box component="form" sx={{ mt: 3, flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item size={12}>
            <Grid item>
              <TextField
                fullWidth
                label="Full Name"
                name="fullName"
                value={profileData.fullName}
                onChange={handleChange}
                variant="outlined"
              />
            </Grid>
            <Grid item>
              <TextField
                fullWidth
                label="Occupation"
                name="occupation"
                value={profileData.occupation}
                onChange={handleChange}
                variant="outlined"
              />
            </Grid>
          </Grid>
          <Grid size={12}>
            {profileData.socialLinks.map((link, index) => (
              <Grid item xs={12} m={11} key={index}>
                <TextField
                  fullWidth
                  label={`Social Link ${index + 1}`}
                  value={link}
                  onChange={(e) =>
                    handleSocialLinkChange(index, e.target.value)
                  }
                  variant="outlined"
                />
              </Grid>
            ))}
          </Grid>

          <Grid item xs={12} m={12}>
            <Box
              sx={{
                border: '1px dashed gray',
                padding: 2,
                borderRadius: 1,
                textAlign: 'center',
                cursor: 'pointer',
              }}
            >
              Drag & Drop OR{' '}
              <Button variant="text" component="span">
                Upload an Image
              </Button>
            </Box>
          </Grid>

          <Grid item xs={12} m={12}>
            <TextField
              fullWidth
              label="Bio"
              name="bio"
              multiline
              rows={4}
              value={profileData.bio}
              onChange={handleChange}
              variant="outlined"
            />
          </Grid>
        </Grid>

         <Box sx={{ mt: 3 }}>
          <Button
            variant="contained"
            color="primary"
            fullWidth
            // onClick={() => router.push('/profile-setup/system-configurations')}
          >
            Next
          </Button>
        </Box> 
      </Box> */}
    </Box>
  );
}
