/* eslint-disable import/no-extraneous-dependencies */
import axios from 'axios';
import FormData from 'form-data';

export default async function handler(req, res) {
  const { uid } = req.query.uid; // Retrieve the UID from the query parameter
  console.log('uid in img: ', uid);
  if (req.method === 'POST') {
    const formData = new FormData();
    // Append the profile image file to FormData
    formData.append('profileImage', req.file, {
      filename: req.file.originalname,
      contentType: req.file.mimetype,
    });

    try {
      // Send the image to the Firebase function
      const response = await axios.post(
        `http://127.0.0.1:5001/kai-onboarding-e68ed/us-central1/uploadProfileImage?uid=${uid}`,
        formData,
        {
          headers: {
            ...formData.getHeaders(),
          },
        }
      );

      // Return the URL of the uploaded image
      res.status(200).json({ profileImageUrl: response });
    } catch (error) {
      console.error('Error uploading profile image:', error);
      res.status(500).json({ error: 'Failed to upload profile image' });
    }
  } else {
    res.status(405).end(); // Method Not Allowed
  }
}
