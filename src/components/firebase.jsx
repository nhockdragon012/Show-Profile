
import { initializeApp } from "firebase/app";
import {getDatabase} from "firebase/database"
const firebaseConfig = {
  apiKey: "AIzaSyDCfqVQ1z6Rc309fpyZCqIwojEIFZ0LFhY",
  authDomain: "my-profile-d080b.firebaseapp.com",
  databaseURL: "https://my-profile-d080b-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "my-profile-d080b",
  storageBucket: "my-profile-d080b.appspot.com",
  messagingSenderId: "343548594583",
  appId: "1:343548594583:web:e28c6c7edc3b914c245cd2",
  measurementId: "G-0T0LX6QZZE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export default database