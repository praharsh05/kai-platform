# onboardingController

This controller includes functions for onboarding process.

## saveStep1

1. This function saves the step 1 of the onboarding process by adding the field of onboardingStepCompleted to the firestore collection of Users.
2. Testing:
   <img width="1392" alt="Screenshot 2024-08-12 at 14 46 52" src="https://github.com/user-attachments/assets/2db9a9ff-880c-49a3-8f15-c057e1c85750">
   <img width="1440" alt="Screenshot 2024-08-12 at 14 46 57" src="https://github.com/user-attachments/assets/bb7b046d-7de8-4cce-a602-e061dba1f901">

## saveStep2

1. This function saves the step 2 of the onboarding process by adding the given fields to the firestore collection of Users.
2. Testing:
   <img width="1392" alt="Screenshot 2024-08-12 at 14 47 20" src="https://github.com/user-attachments/assets/52b7129d-6053-4c7d-b2d8-a1fa865f08ff">
   <img width="1440" alt="Screenshot 2024-08-12 at 14 47 26" src="https://github.com/user-attachments/assets/8d6be131-4665-4bfc-a099-bdaa94217745">

## saveStep3

1. This function saves the step 3 of the onboarding process by adding the given fields to the firestore collection of Users.
2. Testing:
   <img width="1392" alt="Screenshot 2024-08-12 at 15 37 06" src="https://github.com/user-attachments/assets/598ddc08-abc4-4a8c-a47b-3e75471c6fd6">
   <img width="1440" alt="Screenshot 2024-08-12 at 14 48 18" src="https://github.com/user-attachments/assets/899102f4-e787-4abc-8387-320f35c26533">

## saveStep4

1. This function saves the step 4 of the onboarding process by adding the given fields to the firestore collection of Users.
2. Testing:
   <img width="1392" alt="Screenshot 2024-08-12 at 14 48 38" src="https://github.com/user-attachments/assets/8a41baba-6b22-4cad-8abb-e4e0d1186306">
   <img width="1440" alt="Screenshot 2024-08-12 at 14 48 44" src="https://github.com/user-attachments/assets/2f364422-27c7-4dd4-adb3-8ee383158610">

## getLatestStep

1. This function get the latest step completed by the user and the data till the point.
2. Testing:
   <img width="1392" alt="Screenshot 2024-08-12 at 14 47 51" src="https://github.com/user-attachments/assets/ec4e18af-9a8a-4596-9b82-ec2d68de508d">

## uploadProfileImage

1. This function handles the uploading of a profile image for a user to Firebase Storage and updates the corresponding Firestore document with the URL of the uploaded image.
2. Testing:
   Step 1: In Postman, add the "Content-Type" with value "multipart/form-data" in Headers
   <img width="1084" alt="Screenshot 2024-08-21 at 7 35 08 AM" src="https://github.com/user-attachments/assets/18efb65b-2996-4df3-a9a7-0164cf530df9">
   Step 2: In Body, add "file" with type "File" and select a testing image
   <img width="1079" alt="Screenshot 2024-08-21 at 7 37 18 AM" src="https://github.com/user-attachments/assets/3d3dbfcd-2979-45a8-aeb1-1297cc0e749f">
   Step 3: In Params, add "uid"
   <img width="1080" alt="Screenshot 2024-08-21 at 7 38 25 AM" src="https://github.com/user-attachments/assets/f0c83e06-18fb-49e8-a205-51d4437c2787">
   Step 4: Click send and get fileUrl in the response
   <img width="1084" alt="Screenshot 2024-08-17 at 10 41 01 PM" src="https://github.com/user-attachments/assets/40c68c40-0bce-461b-a6a8-5163f1b09e30">
   Step 5: Open the Firebase Emulator, and in the Storage tab, it shows the uploaded file and its location.
   <img width="1434" alt="Screenshot 2024-08-17 at 10 41 59 PM" src="https://github.com/user-attachments/assets/b4e66f90-8009-4327-a85f-7f50b099f37f">
