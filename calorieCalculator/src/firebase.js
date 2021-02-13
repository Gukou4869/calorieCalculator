import firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyBb54jvlfM1LsSL0E5ZIkOf42cLuS7xG_U",
  authDomain: "login-2734b.firebaseapp.com",
  projectId: "login-2734b",
  storageBucket: "login-2734b.appspot.com",
  messagingSenderId: "1043601139036",
  appId: "1:1043601139036:web:321f5c6153c0535b66cd99",
};

const fire = firebase.initializeApp(firebaseConfig);

export default fire;
