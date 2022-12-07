import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence } from "firebase/auth/react-native"
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
    API_KEY,
    AUTH_DOMAIN,
    PROJECT_ID,
    STORAGE_BUCKET,
    MESSAGING_SENDER_ID,
    APP_ID,
    MEASUREMENT_ID
} from "@env"
const firebaseConfig = {
  apiKey: "AIzaSyCQ2aTc18Uc14tJ8hr3TPH2b-8hz1T0h8Y",
  authDomain: "project2-e092a.firebaseapp.com",
  projectId: "project2-e092a",
  storageBucket: "project2-e092a.appspot.com",
  messagingSenderId: "964379751414",
  appId: "1:964379751414:web:bf8b91df521ab764474dd7",
  measurementId: "G-SKSFV4FDZF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = initializeAuth(app, {
    persistence: getReactNativePersistence(AsyncStorage)
})

export { auth }