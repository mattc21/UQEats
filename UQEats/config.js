import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCKzOpbaoahmlLRZEKvvGoqpYZQBtRNPxU",
  authDomain: "test-36e64.firebaseapp.com",
  projectId: "test-36e64",
  storageBucket: "test-36e64.appspot.com",
  messagingSenderId: "394455791615",
  appId: "1:394455791615:web:27cfc2e92b1498920919ca",
  measurementId: "G-MV2PJQ1D0P"
}

if (!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
} 
export {firebase};