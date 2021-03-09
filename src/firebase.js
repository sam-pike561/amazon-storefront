import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyC8qxZVonIB9Rn6MH4lkVte1eJzNR7S4A8",
  authDomain: "clone-8994b.firebaseapp.com",
  projectId: "clone-8994b",
  storageBucket: "clone-8994b.appspot.com",
  messagingSenderId: "463488356730",
  appId: "1:463488356730:web:b81766c52a7cf1c278c6c3",
  measurementId: "G-4WFHNK7Z33"
});

const auth = firebase.auth();

export { auth };
