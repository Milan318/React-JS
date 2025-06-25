import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAkXjpG7j8qzfM2Jt6hOs_WFO1pZXG6isM",
  authDomain: "redux-824a2.firebaseapp.com",
  projectId: "redux-824a2",
  storageBucket: "redux-824a2.firebasestorage.app",
  messagingSenderId: "900773658130",
  appId: "1:900773658130:web:66002e34e002e63a88a2cb",
  databaseURL:"https://redux-824a2-default-rtdb.firebaseio.com/"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);