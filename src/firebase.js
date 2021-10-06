import firebase from "firebase/app";
import "firebase/auth";

export const auth = firebase.initializeApp({
    apiKey: "AIzaSyCU4YxpyVTXgWBDRgDG609DsvZmWW0pDd0",
    authDomain: "nuchat-247a1.firebaseapp.com",
    projectId: "nuchat-247a1",
    storageBucket: "nuchat-247a1.appspot.com",
    messagingSenderId: "567862602494",
    appId: "1:567862602494:web:20a5919ebf3da2a82e13af"
}).auth();