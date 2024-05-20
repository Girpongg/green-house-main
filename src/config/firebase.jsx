import { initializeApp } from "firebase/app";
import { collection, getFirestore } from "firebase/firestore";
import { getStorage ,ref} from "firebase/storage";
import { GoogleAuthProvider, getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDzqpAQJU6DupjXrOgEuRn8_RTDGOdQC4o",
  authDomain: "kebun-wedoro.firebaseapp.com",
  projectId: "kebun-wedoro",
  storageBucket: "kebun-wedoro.appspot.com",
  messagingSenderId: "1036855138130",
  appId: "1:1036855138130:web:e8308dd7996d074fe38c8b"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const plantsCollectionName = "plants";
export const plantsCollectionRef = collection(db, plantsCollectionName);

export const emailsCollectionName = "emails";
export const emailsCollectionRef = collection(db, emailsCollectionName);

export const storage = getStorage(app);
export const plantImageFolder = "plant-images/";

export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();