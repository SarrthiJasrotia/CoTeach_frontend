import firebase from 'firebase/compat/app';
import 'firebase/compat/auth'

const firebaseConfig = {
  apiKey: "AIzaSyCjpaO9bqJnRtatUdHlQIuaBe0nAJyPNWc",
  authDomain: "people-40c5a.firebaseapp.com",
  projectId: "people-40c5a",
  storageBucket: "people-40c5a.appspot.com",
  messagingSenderId: "299746526574",
  appId: "1:299746526574:web:56fe8293d70515e769ad7f"
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