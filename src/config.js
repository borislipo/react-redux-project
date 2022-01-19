// Import the functions you need from the SDKs you need
import { initializeApp  } from "https://www.gstatic.com/firebasejs/9.6.3/firebase-app.js"
import { collection, addDoc, getFirestore, getDocs, deleteDoc , doc, setDoc, getDoc  } from "https://www.gstatic.com/firebasejs/9.6.3/firebase-firestore.js"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCREIzl5j1xP44iQwDXenI-DQaKC1UM51o",
    authDomain: "photowall-13a07.firebaseapp.com",
    projectId: "photowall-13a07",
    storageBucket: "photowall-13a07.appspot.com",
    messagingSenderId: "632305656470",
    appId: "1:632305656470:web:4db9df3f67a65db52a58b7",
    measurementId: "G-W7ZF63J3BN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore();

export { db, collection, addDoc, getDocs, deleteDoc, doc, setDoc, getDoc};

