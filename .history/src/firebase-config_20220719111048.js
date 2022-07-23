import { initializeApp } from "firebase/app";
import {
    getAuth,
    signInWithPopup,
    createUserWithEmailAndPassword,
    signOut,
} from 'firebase/auth';

import {
    getFirestore,
    query,
    getDocs,
    collection,
    where,
    addDoc,
} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBa0ZoF17PxPb29Vs410B8xyLxPRmLu-xI",
  authDomain: "example-fire-558d2.firebaseapp.com",
  projectId: "example-fire-558d2",
  storageBucket: "example-fire-558d2.appspot.com",
  messagingSenderId: "310580388763",
  appId: "1:310580388763:web:fe5d293f400e9324fab73e",
  measurementId: "G-VJPC2CXSC6"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
