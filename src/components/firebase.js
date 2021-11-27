import firebase from "firebase/app";
import 'firebase/auth'

export const auth = firebase.initializeApp({
    apiKey: "AIzaSyD55DhhJoDYT_UbAgZibbnTY3xmXAeFXQY",
    authDomain: "lets-chat-c6f43.firebaseapp.com",
    projectId: "lets-chat-c6f43",
    storageBucket: "lets-chat-c6f43.appspot.com",
    messagingSenderId: "1090338656374",
    appId: "1:1090338656374:web:a0a9f8678f160893fc8f57"
}).auth();