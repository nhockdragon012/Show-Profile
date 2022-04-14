import { initializeApp } from "firebase/app";
import {getDatabase} from "firebase/database"
const firebaseConfig = {
  apiKey: "<API_KEY>",
  authDomain: "<auth_domain>",
  databaseURL: "<database_url>",
  projectId: "my-profile-d080b",
  storageBucket: "my-profile-d080b.appspot.com",
  messagingSenderId: "<mess_id>",
  appId: "<API_ID>",
  measurementId: "G-0T0LX6QZZE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export default database