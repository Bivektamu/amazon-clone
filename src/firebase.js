import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyBj4u3bcMKEAJot0zaGiLWmC5NLZWoRiIA",
  authDomain: "clone-ca2ec.firebaseapp.com",
  databaseURL: "https://clone-ca2ec.firebaseio.com",
  projectId: "clone-ca2ec",
  storageBucket: "clone-ca2ec.appspot.com",
  messagingSenderId: "357154841487",
  appId: "1:357154841487:web:af04ee178c5b5c7b5621fa",
  measurementId: "G-CXMC05TH8X"
};

// initialize app
const firebaseApp = firebase.initializeApp(firebaseConfig);

// intialize database
const db = firebaseApp.firestore();

// initialize authentication functions
const auth = firebase.auth();

export { db, auth };