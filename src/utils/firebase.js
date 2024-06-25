// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCpMeevGsT9eW5cvOUC1Va0IF8CDqGDesA",
    authDomain: "netflixgpt-4343b.firebaseapp.com",
    projectId: "netflixgpt-4343b",
    storageBucket: "netflixgpt-4343b.appspot.com",
    messagingSenderId: "380089794929",
    appId: "1:380089794929:web:2d79caa47718614f5a36d0",
    measurementId: "G-8S7C7F2EGN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();