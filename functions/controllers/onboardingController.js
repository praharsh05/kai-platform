// File containing firebase functions for onboardong workflow

const functions = require('firebase-functions');
const admin = require('firebase-admin');

/**
 * This function saves the step 1 of the onboarding process by adding the field of
 * onboardingStepCompleted to the firestore collection of Users.
 *
 * @return {functions.Response} - The response for success and status of 200 when
 * firestore is updated.
 * @throws {HttpsError} Throws an error resposne with status 500 and error message
 * if firestore cannot be updated.
 */
exports.saveStep1 = functions.https.onRequest(async (req, res) => {
  const { uid } = req.body;

  try {
    await admin.firestore().collection('Users').doc(uid).set(
      {
        onboardingStepCompleted: 1,
      },
      { merge: true }
    );

    res.status(200).send({ success: true });
  } catch (error) {
    res.status(500).send({ success: false, error: error.message });
  }
});

/**
 * This function saves the step 2 of the onboarding process by adding the given fields
 * to the firestore collection of Users.
 *
 * @return {functions.Response} - The response for success with status code 200 when firestore is updated.
 * @throws {HttpsError} Throws an error resposne with status 500 and error message
 * if firestore cannot be updated.
 */
exports.saveStep2 = functions.https.onRequest(async (req, res) => {
  const {
    uid,
    fullName,
    occupation,
    facebookUrl,
    linkedInUrl,
    xUrl,
    profileImage,
    bio,
  } = req.body;

  try {
    await admin.firestore().collection('Users').doc(uid).set(
      {
        fullName,
        occupation,
        facebookUrl,
        linkedInUrl,
        xUrl,
        profileImage,
        bio,
        onboardingStepCompleted: 2,
      },
      { merge: true }
    );

    res.status(200).send({ success: true });
  } catch (error) {
    res.status(500).send({ success: false, error: error.message });
  }
});

/**
 * This function saves the step 3 of the onboarding process by adding the given fields
 * to the firestore collection of Users.
 *
 * @return {functions.Response} - The response for success with status code 200 when firestore is updated.
 * @throws {HttpsError} Throws an error resposne with status 500 and error message
 * if firestore cannot be updated.
 */
exports.saveStep3 = functions.https.onRequest(async (req, res) => {
  const { uid, emailNotification, pushNotification, reminder, theme } =
    req.body;

  try {
    await admin.firestore().collection('Users').doc(uid).set(
      {
        emailNotification,
        pushNotification,
        reminder,
        theme,
        onboardingStepCompleted: 3,
      },
      { merge: true }
    );

    res.status(200).send({ success: true });
  } catch (error) {
    res.status(500).send({ success: false, error: error.message });
  }
});

/**
 * This function saves the step 4 of the onboarding process by adding the given fields
 * to the firestore collection of Users.
 *
 * @return {functions.Response} - The response for success with status code 200 when firestore is updated.
 * @throws {HttpsError} Throws an error resposne with status 500 and error message
 * if firestore cannot be updated.
 */
exports.saveStep4 = functions.https.onRequest(async (req, res) => {
  const { uid } = req.body;

  try {
    await admin.firestore().collection('Users').doc(uid).set(
      {
        onboardingStepCompleted: 4,
      },
      { merge: true }
    );

    res.status(200).send({ success: true });
  } catch (error) {
    res.status(500).send({ success: false, error: error.message });
  }
});

/**
 * This function get the latest step completed by the user and the data till the point.
 *
 * @return {functions.Response} - The response includes status code of 200, onboarding step completed,
 * and the user data.
 * @return {functions.Response} - If the user with the given unique id does not exists then a response with
 * message and status code 404 will be sent.
 * @throws {HttpsError} Throws an error resposne with status 500 and error message if any other error occurs.
 */
exports.getLatestStep = functions.https.onRequest(async (req, res) => {
  const { uid } = req.query;

  try {
    const userDoc = await admin.firestore().collection('Users').doc(uid).get();
    if (!userDoc.exists) {
      res.status(404).send({ success: false, message: 'User not found' });
    } else {
      res.status(200).send({
        success: true,
        onboardingStepCompleted: userDoc.data().onboardingStepCompleted,
        data: userDoc.data(),
      });
    }
  } catch (error) {
    res.status(500).send({ success: false, error: error.message });
  }
});

exports.uploadProfileImage = functions.https.onRequest(async (req, res) => {
  // Implement file upload logic here, possibly using Firebase Storage
});
