// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBG2u_BxOKytxNhe_43DXXfdH4z9xCiX_A",
    authDomain: "pokedex-92df9.firebaseapp.com",
    databaseURL: "https://pokedex-92df9-default-rtdb.firebaseio.com",
    projectId: "pokedex-92df9",
    storageBucket: "pokedex-92df9.appspot.com",
    messagingSenderId: "253711353613",
    appId: "1:253711353613:web:786be152f111317d099244",
    measurementId: "G-WB8BZBNZQ7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getDatabase(app);
export default app;