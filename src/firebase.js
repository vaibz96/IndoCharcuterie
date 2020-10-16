import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAFIU7gPcrZCnnAJEXWNKD-B4q9vckizjU",
    authDomain: "indocharcuterie.firebaseapp.com",
    databaseURL: "https://indocharcuterie.firebaseio.com",
    projectId: "indocharcuterie",
    storageBucket: "indocharcuterie.appspot.com",
    messagingSenderId: "1067291162150",
    appId: "1:1067291162150:web:44dfed1cb2079b6e6758e7",
    measurementId: "G-KVQ74BD817"
});

const auth = firebase.auth();

export { auth };