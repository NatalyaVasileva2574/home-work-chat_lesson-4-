import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyAmk-AsVtX_cKC4QyjPMGsiRadf_DZ0JJk",
  authDomain: "gbchat9-cb032.firebaseapp.com",
  databaseURL: "https://gbchat9-cb032-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "gbchat9-cb032",
  storageBucket: "gbchat9-cb032.appspot.com",
  messagingSenderId: "702945202319",
  appId: "1:702945202319:web:bdf977096b15b67267e0fa",
  measurementId: "G-2W9VC081ZH"
};

export const firebase = initializeApp(firebaseConfig);

export const auth = getAuth(firebase);
export const database = getDatabase(firebase);