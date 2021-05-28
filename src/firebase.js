import firebase from "firebase";
import 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyAIVxCiTXfYR09i6QGy69wuMKUSeppuKB4",
    authDomain: "booster-69558.firebaseapp.com",
    projectId: "booster-69558",
    storageBucket: "booster-69558.appspot.com",
    messagingSenderId: "282171286509",
    appId: "1:282171286509:web:3fe3c8b1c25e73422abde4"
};

const fb = firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export {fb,db}