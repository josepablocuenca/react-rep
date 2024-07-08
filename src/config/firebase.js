// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { productos } from "../data/asyncMock";
import { addDoc, collection, getFirestore } from 'firebase/firestore'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC1lZeQrHJekP4bbVBLpwLJAteZ_ELSa2M",
  authDomain: "reactjs-codere.firebaseapp.com",
  projectId: "reactjs-codere",
  storageBucket: "reactjs-codere.appspot.com",
  messagingSenderId: "1017797867464",
  appId: "1:1017797867464:web:f410e4e325660de51ef2fd"
};

//console.log("Se conecta")
// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)

// productos.forEach( (prod) =>{
//     addDoc(collection(db, 'productos'), prod) 
//         .then((elem) => console.log(`se agrego el producto: ${elem.id}`))
//         .catch((error) => console.log(error))       
// })