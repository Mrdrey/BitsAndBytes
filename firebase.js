import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCPCPbeRnmw0eefbzP7NKaiqmMaj1-WNrs",
  authDomain: "digital-strata-381202.firebaseapp.com",
  databaseURL: "https://digital-strata-381202-default-rtdb.firebaseio.com",
  projectId: "digital-strata-381202",
  storageBucket: "digital-strata-381202.appspot.com",
  messagingSenderId: "937161739641",
  appId: "1:937161739641:web:e340ad6d5c4a3ccadc73a8",
  measurementId: "G-CTMTK9TMW8"
};

const app = initializeApp(firebaseConfig);

const  auth = getAuth(app);



export {auth};



