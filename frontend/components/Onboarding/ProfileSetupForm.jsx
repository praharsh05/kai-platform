import { useState } from 'react';

import styles from './ProfileSetup.module.css';

export default function ProfileSetupForm({ goToNextStep }) {
  const [formData, setFormData] = useState({
    fullName: '',
    occupation: '',
    socialLinks: ['', '', ''],
    profileImage: null,
    bio: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSocialLinkChange = (index, value) => {
    const newSocialLinks = [...formData.socialLinks];
    newSocialLinks[index] = value;
    setFormData({ ...formData, socialLinks: newSocialLinks });
  };

  const handleFileUpload = (e) => {
    setFormData({ ...formData, profileImage: e.target.files[0] });
  };

  const handleNext = () => {
    // Perform validation if necessary
    goToNextStep();
  };

  return (
    <div className={styles.profileSetup}>
      <h2 className={styles.h2}>Profile Setup</h2>
      <p>Get started by setting up your profile</p>

      <div className={styles.formGroup}>
        <input
          className={styles.input}
          type="text"
          name="fullName"
          placeholder="Enter Name"
          value={formData.fullName}
          onChange={handleChange}
        />
        <input
          className={styles.input}
          type="text"
          name="occupation"
          placeholder="Enter Occupation"
          value={formData.occupation}
          onChange={handleChange}
        />
      </div>

      <div className={styles.socialLinks}>
        {formData.socialLinks.map((link, index) => (
          <input
            className={styles.input}
            key={index}
            type="text"
            placeholder={`Paste Link ${index + 1}`}
            value={link}
            onChange={(e) => handleSocialLinkChange(index, e.target.value)}
          />
        ))}
      </div>

      <div className={styles.profileImage}>
        <input
          className={styles.input}
          type="file"
          accept=".jpg, .png, .pdf"
          onChange={handleFileUpload}
        />
        <p>Drag & Drop OR Upload an Image</p>
      </div>

      <textarea
        className={styles.textarea}
        name="bio"
        placeholder="Introduce yourself in a few words"
        value={formData.bio}
        onChange={handleChange}
      />

      <p>Word Limit: 200 Words</p>

      <button className={styles.nextButton} onClick={handleNext} type="submit">
        Next
      </button>
    </div>
  );
}
