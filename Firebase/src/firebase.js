import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyB7BoeZXVBCVxfCsZJfmIhNMImWWPv8DPI",
  authDomain: "employee-management-syst-50ae5.firebaseapp.com",
  projectId: "employee-management-syst-50ae5",
  storageBucket: "employee-management-syst-50ae5.firebasestorage.app",
  messagingSenderId: "124267296917",
  appId: "1:124267296917:web:a986c5f3b5e5308bdd439c",
  databaseURL:"https://employee-management-syst-50ae5-default-rtdb.firebaseio.com/"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

const db = getDatabase(app);