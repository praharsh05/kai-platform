import axios from 'axios';

export default async function handler(req, res) {
  const {
    uid,
    fullName,
    occupation,
    facebookUrl,
    linkedInUrl,
    xUrl,
    bio,
    profileImage,
  } = req.body;
  const data = {
    uid,
    fullName,
    occupation,
    facebookUrl,
    linkedInUrl,
    xUrl,
    bio,
    profileImage,
  };

  try {
    const response = await axios.post(
      'http://127.0.0.1:5001/kai-onboarding-e68ed/us-central1/onboardingStep2',
      data,
      {
        headers: { 'Content-Type': 'multipart/form-data' },
      }
    );

    res.status(200).json({ success: true, data: response.data });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
}
