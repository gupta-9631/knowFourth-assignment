import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAjHWqaTAzxxBIMwoB82cJ5STwb5NHHiMw",
  authDomain: "fir-project-fdca9.firebaseapp.com",
  projectId: "fir-project-fdca9",
  storageBucket: "fir-project-fdca9.appspot.com",
  messagingSenderId: "831420054899",
  appId: "1:831420054899:web:5654d561f2a0d06078d906",
  measurementId: "G-W86NLX3MLW",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore(app);

export { app, auth, db };
