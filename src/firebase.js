import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyCYW_uEfkpKUlv9F7P9ig4a3WGjq77Bqwo",
    authDomain: "realtor-clone-xd.firebaseapp.com",
    projectId: "realtor-clone-xd",
    storageBucket: "realtor-clone-xd.appspot.com",
    messagingSenderId: "646073541227",
    appId: "1:646073541227:web:d218c1de9e6606a1dc072e"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore();