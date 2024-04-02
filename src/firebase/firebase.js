// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";
import {getStorage} from "firebase/storage"


const firebaseConfig = {
  apiKey: "AIzaSyATdSeKKF5OGd0WS1u8XKu0brzM3GZ2imo",
  authDomain: "insta-clone-d7692.firebaseapp.com",
  projectId: "insta-clone-d7692",
  storageBucket: "insta-clone-d7692.appspot.com",
  messagingSenderId: "1033141060996",
  appId: "1:1033141060996:web:b3874694a4907b015589d1",
  measurementId: "G-FKN7YF84YF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);
const storage = getStorage(app);

export {app,auth,firestore,storage};
