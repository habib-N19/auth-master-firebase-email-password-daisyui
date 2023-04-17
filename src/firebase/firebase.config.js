// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCaw7FAs5cRPE4hkZWZVfk0hPI0M_EZF4I",
    authDomain: "auth-email-daisyui.firebaseapp.com",
    projectId: "auth-email-daisyui",
    storageBucket: "auth-email-daisyui.appspot.com",
    messagingSenderId: "1077220686948",
    appId: "1:1077220686948:web:bec11570ebfe051097f371"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;