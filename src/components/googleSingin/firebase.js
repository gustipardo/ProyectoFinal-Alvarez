import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth, GoogleAuthProvider, onAuthStateChanged } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBILKY1n4swxAmfW7Uar_qOCC_2zZWVEDA",
  authDomain: "clase13-fcd7a.firebaseapp.com",
  projectId: "clase13-fcd7a",
  storageBucket: "clase13-fcd7a.appspot.com",
  messagingSenderId: "245284477983",
  appId: "1:245284477983:web:e63e8183165e7bb9aa892a"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);


const getAuthUserUid = () => {
  return new Promise((resolve, reject) => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        resolve(user.uid);
      } else {
        resolve(null);
      }
    }, reject);
  });
};

export { db, provider, auth, getAuthUserUid };
