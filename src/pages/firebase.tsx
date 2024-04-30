// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDxhYflwGmu3WTFyuadDOtnpmI7_mAk-C8",
  authDomain: "it35-sawan-on.firebaseapp.com",
  projectId: "it35-sawan-on",
  storageBucket: "it35-sawan-on.appspot.com",
  messagingSenderId: "735462327852",
  appId: "1:735462327852:web:d698ace2e108000cb03389",
  measurementId: "G-H5XWQ4PMSV"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const analytics = getAnalytics(firebaseApp);
const db = getFirestore(firebaseApp);

export { db };