import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: "vag-imports-4a75f.firebaseapp.com",
    projectId: "vag-imports-4a75f",
    storageBucket: "vag-imports-4a75f.appspot.com",
    messagingSenderId: "301308008253",
    appId: "1:301308008253:web:e20355c21adc21301a5754"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);