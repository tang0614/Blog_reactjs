import * as firebase from "firebase/app";
import "firebase/storage";
import "firebase/firestore";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyCdrYCNaFPKdIMXWHBo8Mh9W4y6c6REGS4",
  authDomain: "bakingdb.firebaseapp.com",
  databaseURL: "https://bakingdb.firebaseio.com",
  projectId: "bakingdb",
  storageBucket: "bakingdb.appspot.com",
  messagingSenderId: "1046291691190",
  appId: "1:1046291691190:web:b50313793ae929c509d817",
  measurementId: "G-6PCGCSPHQC",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const timestamp = firebase.firestore.FieldValue.serverTimestamp;

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();

export { projectStorage, projectFirestore, timestamp };
