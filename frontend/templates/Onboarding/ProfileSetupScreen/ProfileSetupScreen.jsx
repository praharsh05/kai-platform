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
  const [isSubmitting, setIsSubmitting] = useState(false);

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
    setIsSubmitting(true); // Indicate the form is submitting
    try {
      let profileImageUrl = '';

      // Upload profile image if it exists
      if (step2Data.profileImage) {
        const formData = new FormData();
        formData.append('profileImage', step2Data.profileImage); // Image file
        const uploadResponse = await axios.post(
          `http://127.0.0.1:5001/kai-onboarding-e68ed/us-central1/uploadProfileImage?uid=${uid}`,
          formData,
          {
            headers: { 'Content-Type': 'multipart/form-data' },
          }
        );

        profileImageUrl = uploadResponse.data.fileUrl; // Get the URL from response
        // console.log('Profile Image URL:', profileImageUrl.data.fileUrl);
      }

      // Now send the form data along with the image URL to another endpoint
      const userProfileData = {
        uid,
        fullName: step2Data.fullName,
        occupation: step2Data.occupation,
        facebookUrl: step2Data.facebookUrl,
        linkedInUrl: step2Data.linkedInUrl,
        xUrl: step2Data.xUrl,
        bio: step2Data.bio,
        profileImage: profileImageUrl, // Include the image URL if it exists
      };

      // Send the user profile data to another API (e.g., saveStep2)
      await axios.post('/api/saveStep2', userProfileData);

      // Implement your logic to proceed to the next step here
    } catch (error) {
      console.error('Error during submission for step 2:', error);
    } finally {
      setIsSubmitting(false); // Reset submitting state
    }
  };

  // Handle form field changes
  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'profileImage' && files.length > 0) {
      setStep2Data({ ...step2Data, profileImage: files[0] });
    } else {
      setStep2Data({ ...step2Data, [name]: value });
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
        handleChange={handleChange}
      />
      <Button {...styles.NextButtonProps} onClick={handleSubmit}>
        Next
      </Button>
    </Grid>
  );
}
