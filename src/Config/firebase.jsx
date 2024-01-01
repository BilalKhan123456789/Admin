
import { initializeApp } from "firebase/app";
//  import {getAuth} from 'firebase/auth'
 import {getDatabase} from 'firebase/database'
import { getStorage } from "firebase/storage";
// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD9zxkCXJL7CzRkbbNLqd9uF0TICX5Wnws",
  authDomain: "navtivehackhaton.firebaseapp.com",
  databaseURL: "https://navtivehackhaton-default-rtdb.firebaseio.com",
  projectId: "navtivehackhaton",
  storageBucket: "navtivehackhaton.appspot.com",
  messagingSenderId: "282189000978",
  appId: "1:282189000978:web:cbd47ab1c84d44214c03cb"
};







// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db =getDatabase(app)
const storage=getStorage(app)

export {db,storage}