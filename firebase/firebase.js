import { initializeApp } from 'firebase/app';
import { getAuth, initializeAuth, getReactNativePersistence, signInWithEmailAndPassword } from 'firebase/auth';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { getFirestore } from 'firebase/firestore';

//Configs - couldm't see them on android project in fb, so i added on a web proj to the fb
//which is where all this info is taken from
const firebaseConfig = {
  apiKey: "AIzaSyAPWZ9jkIul8dKYj4WkXdcTaXPIe3nTZIQ",
  authDomain: "scentuary-c009b.firebaseapp.com",
  projectId: "scentuary-c009b",
  storageBucket: "scentuary-c009b.firebasestorage.app",
  messagingSenderId: "1083085209588",
  appId: "1:1083085209588:web:fb803927e121907f97c3a1"
};

const app = initializeApp(firebaseConfig);
console.log("Firebase initialized:");

//Initialize Auth w persistence
const auth = initializeAuth(app, {
    persistence: getReactNativePersistence(AsyncStorage)
});

//Initialize Firestore
const db = getFirestore(app);

//Export auth and db
export { auth, db ,signInWithEmailAndPassword};
