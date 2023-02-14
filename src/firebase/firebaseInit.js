import firebase from 'firebase/app';
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA3J8zbeR4lNeq1GI9WhaBMtog49DpSy98",
  authDomain: "fireblogs-vuee.firebaseapp.com",
  projectId: "fireblogs-vuee",
  storageBucket: "fireblogs-vuee.appspot.com",
  messagingSenderId: "41835622211",
  appId: "1:41835622211:web:96ab14753557db706d49f6"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { timestamp };
export default firebaseApp.firestore();
