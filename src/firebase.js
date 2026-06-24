import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCxNgvjaGUF_N1yeA9MDmexfJREpylVM2g",
  authDomain: "hamja-portfulio.firebaseapp.com",
  projectId: "hamja-portfulio",
  storageBucket: "hamja-portfulio.firebasestorage.app",
  messagingSenderId: "964972496345",
  appId: "1:964972496345:web:e2c292bb0cfaa7eaf1c5c8",
  measurementId: "G-ETE2364CV2",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
