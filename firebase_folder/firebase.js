import { initializeApp } from 'firebase/app';
import { getAuth, initializeAuth, getReactNativePersistence, signInWithEmailAndPassword } from 'firebase/auth';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { getFirestore } from 'firebase/firestore';

// Firebase configuration object
const firebaseConfig = {
  apiKey: "AIzaSyAPWZ9jkIul8dKYj4WkXdcTaXPIe3nTZIQ",
  authDomain: "scentuary-c009b.firebaseapp.com",
  projectId: "scentuary-c009b",
  storageBucket: "scentuary-c009b.firebasestorage.app",
  messagingSenderId: "1083085209588",
  appId: "1:1083085209588:web:fb803927e121907f97c3a1"
};

//Initialize Firebase
const app = initializeApp(firebaseConfig);
console.log("Firebase initialized:", app);

//Initialize Auth with persistence
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage)
});

//Initialize Firestore
const db = getFirestore(app);

//Export auth, db, and signInWithEmailAndPassword
export { auth, db, signInWithEmailAndPassword };
