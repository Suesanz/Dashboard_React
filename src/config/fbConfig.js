import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Replace this with your own config details
var config = {

  apiKey: "AIzaSyDg_Lpf0gNlIdBNmmOWKs7T9UvLud3Qgeg",
  authDomain: "verdant-abacus-186311.firebaseapp.com",
  databaseURL: "https://verdant-abacus-186311.firebaseio.com",
  projectId: "verdant-abacus-186311",
  storageBucket: "verdant-abacus-186311.appspot.com",
  messagingSenderId: "687785097148",
  appId: "1:687785097148:web:9e76cbc4e9ed65b0"
};
firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase 