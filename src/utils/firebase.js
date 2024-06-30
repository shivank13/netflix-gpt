// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth} from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBWZ-9MG-ipcdNud0ldiHln8m0zp_hTpFs",
  authDomain: "netflix-gpt-ef60c.firebaseapp.com",
  projectId: "netflix-gpt-ef60c",
  storageBucket: "netflix-gpt-ef60c.appspot.com",
  messagingSenderId: "412587004916",
  appId: "1:412587004916:web:a17602c629025755179fa1",
  measurementId: "G-PEZ4XTBMXJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();