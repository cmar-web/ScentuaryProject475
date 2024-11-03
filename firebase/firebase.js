import { initializeApp } from 'firebase/app';
import { getAuth, initializeAuth, getReactNativePersistence } from 'firebase/auth'; // Make sure getReactNativePersistence is imported
import AsyncStorage from "@react-native-async-storage/async-storage";
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAPWZ9jkIul8dKYj4WkXdcTaXPIe3nTZIQ",
  authDomain: "scentuary-c009b.firebaseapp.com",
  projectId: "scentuary-c009b",
  storageBucket: "scentuary-c009b.firebasestorage.app",
  messagingSenderId: "1083085209588",
  appId: "1:1083085209588:web:fb803927e121907f97c3a1"
};

const app = initializeApp(firebaseConfig);

// Initialize Auth with persistence using AsyncStorage
const auth = initializeAuth(app, {
    persistence: getReactNativePersistence(AsyncStorage)
});

// Initialize Firestore
const db = getFirestore(app);

// Export auth and db 
export { auth, db };
