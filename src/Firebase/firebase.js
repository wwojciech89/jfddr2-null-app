import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyC7n089yKLBsASh9poL8I9xse6iIm2x46k",
  authDomain: "piwko-10443.firebaseapp.com",
  projectId: "piwko-10443",
  storageBucket: "piwko-10443.appspot.com",
  messagingSenderId: "406560500620",
  appId: "1:406560500620:web:87450c7e032b04e14084a9",
};
firebase.initializeApp(firebaseConfig);

export default firebase;
