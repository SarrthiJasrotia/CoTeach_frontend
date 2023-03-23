import firebase from 'firebase/compat/app';
import 'firebase/compat/auth'

const firebaseConfig = {
  apiKey: "AIzaSyCBwoOgGrGnr0k5XYqLuvxaFb5uBewwXOY",
  authDomain: "coteachbackend.firebaseapp.com",
  projectId: "coteachbackend",
  storageBucket: "coteachbackend.appspot.com",
  messagingSenderId: "138875847849",
  appId: "1:138875847849:web:df3d127e6c8ce2bb17d5b8",
  measurementId: "G-3MHW3CLMZX"
};
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
// Sign in using a popup.
const provider = new firebase.auth.GoogleAuthProvider();

function login() {
  return auth.signInWithPopup(provider);
}

function logout() {
  return auth.signOut();
}

export {
  login,
  logout,
  auth
}