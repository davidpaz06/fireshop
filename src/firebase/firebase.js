// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBw2TWA-Vz5It6qJR48EQbsoj4QnuGyGKs",
  authDomain: "fireshop-cd3a4.firebaseapp.com",
  projectId: "fireshop-cd3a4",
  storageBucket: "fireshop-cd3a4.firebasestorage.app",
  messagingSenderId: "885256475933",
  appId: "1:885256475933:web:9085fe7244412558d2bdf4",
  measurementId: "G-NWVV2XZ0QM",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
