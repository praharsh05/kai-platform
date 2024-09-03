import React, { useEffect, useState } from 'react';

import { Box, Button, Grid, Typography } from '@mui/material';

import axios from 'axios';

import { onAuthStateChanged } from 'firebase/auth';

import ProfileSetupForm from '@/components/Onboarding/ProfileSetupForm';

import ProgressBar from '@/components/ProgressBar';

import { auth } from '../../../firebase/config';

import styles from './styles';

export default function ProfileSetupScreen() {
  const [step2Data, setStep2Data] = useState({
    fullName: '',
    occupation: '',
    facebookUrl: '',
    linkedInUrl: '',
    xUrl: '',
    bio: '',
    profileImage: '', // Holds the image file
  });
  const [uid, setUid] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUid(user.uid); // User is signed in, get the UID
      } else {
        setUid(null); // User is signed out, clear the UID
      }
    });

    return () => unsubscribe(); // Clean up subscription on unmount
  }, []);
  const handleSubmit = async () => {
    const formData = new FormData();
    let profileImageUrl = '';
    console.log('uid before submission: ', uid);
    formData.append('uid', uid);
    if (step2Data.profileImage) {
      formData.append('profileImage', step2Data.profileImage);
      console.log(formData);
      try {
        // First API call: upload the profile image
        const uploadResponse = await axios.post(
          `/api/uploadProfileImage?uid=${uid}`,
          formData,
          {
            headers: {
              'Content-Type': 'multipart/form-data',
            },
          }
        );

        profileImageUrl = uploadResponse.data;
      } catch (error) {
        console.error('Error uploading profile image:', error);
      }
    }
    // Now, send the form data along with the profileImageUrl
    const data = {
      uid,
      fullName: step2Data.fullName,
      occupation: step2Data.occupation,
      facebookUrl: step2Data.facebookUrl,
      linkedInUrl: step2Data.linkedInUrl,
      xUrl: step2Data.xUrl,
      bio: step2Data.bio,
      profileImageUrl, // Include the image URL received from the first API call
    };
    console.log(data);
    try {
      await axios.post('/api/saveStep2', data);
      // Implement the logic for moving to the next step here
    } catch (error) {
      console.error('Error uploading step 2 data:', error);
    }
  };
  return (
    <Grid {...styles.mainGridProps}>
      <ProgressBar />
      <Box {...styles.profileSetupMessageBoxProps}>
        <Typography {...styles.profileTitle}>Profile Setup</Typography>
        <Typography {...styles.profileSubTitle}>
          Get started by setting up your profile
        </Typography>
      </Box>
      <ProfileSetupForm
        formData={step2Data}
        setStep2Data={setStep2Data}
        handleChange={() => {}}
      />
      <Button {...styles.NextButtonProps} onClick={handleSubmit}>
        Next
      </Button>
    </Grid>
  );
}
