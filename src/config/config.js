import firebase from 'firebase';

// Required for side-effects
require('firebase/firestore');


const config = {
    apiKey: "AIzaSyAtCDu8k7Pe-B-50LDz_eH_Zerjf-ddQo8",
    authDomain: "super-peces.firebaseapp.com",
    databaseURL: "https://super-peces.firebaseio.com",
    projectId: "super-peces",
    storageBucket: "super-peces.appspot.com",
    messagingSenderId: "32751525690"
};

const uiConfig = {
  signInFlow: 'popup',
  signInSuccessUrl: '/',
  signInOptions: [
    firebase.auth.GoogleAuthProvider.PROVIDER_ID
    // firebase.auth.EmailAuthProvider.PROVIDER_ID,
  ],
};

export default firebase.initializeApp(config);
export const db = firebase.firestore();
export const firebaseAuth = firebase.auth;
export const firebaseUI = uiConfig;