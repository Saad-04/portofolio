import {initializeApp} from 'firebase/app'
import {collection, getFirestore} from 'firebase/firestore'
import {} from 'firebase/firestore'
const firebaseConfig = {
  apiKey: "AIzaSyA6QVDifnZDFGW5IsqODh913IPqr8r8b-8",
  authDomain: "portofolio-58c6e.firebaseapp.com",
  projectId: "portofolio-58c6e",
  storageBucket: "portofolio-58c6e.appspot.com",
  messagingSenderId: "658272339977",
  appId: "1:658272339977:web:e8e310838e34aaa9c450d8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

export const collectionRef = collection(db,'chat');
// console.log(collectionRef);

