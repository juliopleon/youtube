// import storage from "firebase/compat/storage";
import firebase from "firebase/compat/app"
import "firebase/compat/storage";



const firebaseConfig = {
    apiKey: "AIzaSyApdQ96HQTwnYRTenm78J2dKsrqjvip7rs",
    authDomain: "netflix-clone-a2a46.firebaseapp.com",
    projectId: "netflix-clone-a2a46",
    storageBucket: "netflix-clone-a2a46.appspot.com",
    messagingSenderId: "542587068580",
    appId: "1:542587068580:web:67aa3eceeb08b130064631",
};

firebase.initializeApp(firebaseConfig);


const storage = firebase.storage()
export default storage