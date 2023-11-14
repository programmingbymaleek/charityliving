import { async } from "@firebase/util";
import { initializeApp } from "firebase/app";

import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  FacebookAuthProvider,
  GoogleAuthProvider,
  signInWithPopup,
  sendSignInLinkToEmail,
  isSignInWithEmailLink,
  signInWithEmailLink,
} from "firebase/auth";

import { doc, getDoc, setDoc } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBGnSf9Kq2Krw_tjU6kTOB8E9gYc5BSJVQ",
  authDomain: "charityliving-ddb74.firebaseapp.com",
  projectId: "charityliving-ddb74",
  storageBucket: "charityliving-ddb74.appspot.com",
  messagingSenderId: "1016772869236",
  appId: "1:1016772869236:web:c755de901d3c443cace521",
};

//for facebook.. https://charityliving-ddb74.firebaseapp.com/__/auth/handler. will use later..

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//initializing and setting up providers..

const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: "Select your account" });

export const auth = getAuth();

//actioncode settings for email link authentication..
const actionCodeSettings = {
  // URL you want to redirect back to. The domain (www.example.com) for this
  // URL must be in the authorized domains list in the Firebase Console.
  url: "http://localhost:3000/login",
  // This must be true.
  handleCodeInApp: true,
};

export const sendEmailLinkToUser = async (email) => {
  await sendSignInLinkToEmail(auth, email, actionCodeSettings)
    .then(() => {
      // The link was successfully sent. Inform the user.
      console.log("link was successfully sent");
      // Save the email locally so you don't need to ask the user for it again
      // if they open the link on the same device.
      window.localStorage.setItem("emailForSignIn", email);
      // ...
    })
    .catch((error) => {
      console.log(error.code);
      console.log(error.message);
      // ...
    });
};

export const handleEmailLinkVerification = () => {
  // Confirm the link is a sign-in with email link.
  if (isSignInWithEmailLink(auth, window.location.href)) {
    // Additional state parameters can also be passed via URL.
    // This can be used to continue the user's intended action before triggering
    // the sign-in operation.
    // Get the email if available. This should be available if the user completes
    // the flow on the same device where they started it.
    let email = window.localStorage.getItem("emailForSignIn");
    if (!email) {
      // User opened the link on a different device. To prevent session fixation
      // attacks, ask the user to provide the associated email again. For example:
      email = window.prompt("Please provide your email for confirmation");
    }
    // The client SDK will parse the code from the link for you.
    signInWithEmailLink(auth, email, window.location.href)
      .then((result) => {
        // Clear email from storage.
        console.log(result);
        window.localStorage.removeItem("emailForSignIn");
        // You can access the new user via result.user
        // Additional user info profile not available via:
        // result.additionalUserInfo.profile == null
        // You can check if the user is new or existing:
        // result.additionalUserInfo.isNewUser
      })
      .catch((error) => {
        console.log(error.message);
        console.log(error.code);

        // Some error occurred, you can inspect the code: error.code
        // Common errors could be invalid email and invalid or expired OTPs.
      });
  }
};

export const signInWithGooglePopup = () => {
  signInWithPopup(auth, googleProvider);
};

export const SigninUserInWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;
  return await signInWithEmailAndPassword(auth, email, password);
};

export const createUserDocumentFromAuth = async (
  userAuth,
  additionalInformation = {}
) => {
  if (!userAuth) return;
  const userDocRef = doc(db, "users", userAuth.uid);
  const usersnapshot = await getDoc(userDocRef);
  console.log(usersnapshot.exists());
  if (!usersnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInformation,
      });
    } catch (error) {
      alert("there was a problem creating the user", error.message());
    }
  }
  return userDocRef;
};

export const SignOutUser = async () => await signOut(auth);
export const onAuthStateChangedListener = (callback) => {
  onAuthStateChanged(auth, callback);
};
