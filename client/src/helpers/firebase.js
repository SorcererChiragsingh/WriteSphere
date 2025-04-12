import { getAuth, GoogleAuthProvider } from 'firebase/auth'
import { getEvn } from "./getEnv";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: getEvn('VITE_FIREBASE_API'),
  authDomain: "writesphere-e2ade.firebaseapp.com",
  projectId: "writesphere-e2ade",
  storageBucket: "writesphere-e2ade.firebasestorage.app",
  messagingSenderId: "269481342102",
  appId: "1:269481342102:web:c41679affe0e87dd44feb7",
  measurementId: "G-WC14HYWJ8Z"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth = getAuth(app)
const provider = new GoogleAuthProvider()

export { auth, provider }