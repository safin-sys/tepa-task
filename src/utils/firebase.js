import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyArahWAOi0WmxWMkdZsfbKO8Tg4AQtzxBw",
  authDomain: "tepa-35b3a.firebaseapp.com",
  projectId: "tepa-35b3a",
  storageBucket: "tepa-35b3a.appspot.com",
  messagingSenderId: "661641526164",
  appId: "1:661641526164:web:7d04b9050021c71a75ed81",
  measurementId: "G-1MFP7JPVPJ"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)