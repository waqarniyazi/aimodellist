// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDBKdEbmCxgzdKfyzKtIK4YqHbSx2qjCfQ",
  authDomain: "ai-model-list.firebaseapp.com",
  projectId: "ai-model-list",
  storageBucket: "ai-model-list.firebasestorage.app",
  messagingSenderId: "92544282866",
  appId: "1:92544282866:web:35ef8881712a7296e6e06b",
  measurementId: "G-3F6VVS3RD3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);