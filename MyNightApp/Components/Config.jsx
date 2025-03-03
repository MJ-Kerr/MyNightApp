import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";
import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCQKqs2S6JRAjiPGb-9CDH1lapU-eIMmTM",
  authDomain: "mynightapp-c9c7c.firebaseapp.com",
  databaseURL: "https://mynightapp-c9c7c-default-rtdb.firebaseio.com",
  projectId: "mynightapp-c9c7c",
  storageBucket: "mynightapp-c9c7c.appspot.com",
  messagingSenderId: "1025308955866",
  appId: "1:1025308955866:web:5338e130fab28f6456c1e3",
  measurementId: "G-GH3PSMEY8X",
};

const app = initializeApp(firebaseConfig);
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage),
});
const db = getDatabase(app);

// Export the auth and db objects
export { auth, db };
