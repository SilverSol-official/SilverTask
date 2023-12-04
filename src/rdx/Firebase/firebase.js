import {
    initializeApp
} from "firebase/app";
import {
    GoogleAuthProvider,
    getAuth
} from "firebase/auth";
import {
    getDatabase
} from "firebase/database";


const firebaseConfig = {
    apiKey: 'AIzaSyB9aN09cdP--m_NX7BRmL_heSDwI26utOA',
    authDomain: 'silver-tasks.firebaseapp.com',
    projectId: 'silver-tasks',
    storageBucket: 'silver-tasks.appspot.com',
    messagingSenderId: '873224296775',
    appId: '1:873224296775:web:04daa506f2a83a8a711462',
    measurementId: 'G-69EWCNZF6W',
    databaseURL: "https://silver-tasks-default-rtdb.europe-west1.firebasedatabase.app",
};


// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const database = getDatabase(app);
export const googleAuthProvider = new GoogleAuthProvider();