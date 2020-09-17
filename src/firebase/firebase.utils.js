import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config=
    {
        apiKey: "AIzaSyBRGlYWvRych6UQO3QTw3TU1Q1DwJHaDBk",
        authDomain: "crwn-db-d449b.firebaseapp.com",
        databaseURL: "https://crwn-db-d449b.firebaseio.com",
        projectId: "crwn-db-d449b",
        storageBucket: "crwn-db-d449b.appspot.com",
        messagingSenderId: "862097919941",
        appId: "1:862097919941:web:b2c0ce25a36c425d8f45ac",
        measurementId: "G-QQCHPP02NH"
      };

    firebase.initializeApp(config);
    
    export const auth=firebase.auth();
    export const firestore=firebase.firestore();
    const provider=new firebase.auth.GoogleAuthProvider();
    provider.setCustomParameters({prompt: 'select_account'});
    export const signInWithGoogle=()=> auth.signInWithPopup(provider);
    export default firebase;
