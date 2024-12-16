import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyAHhrXGNNRXpCRT3ARRoJqAhGXvrictYXs",
  authDomain: "mjpwgl.firebaseapp.com",
  projectId: "mjpwgl",
  storageBucket: "mjpwgl.appspot.com",
  messagingSenderId: "706901341463",
  appId: "1:706901341463:web:23a687a752775de913b352",
  measurementId: "G-MH4BMXRXS1"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export {firebaseConfig,db}