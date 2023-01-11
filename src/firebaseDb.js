import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyChlyXwW9IP85uepjAo3wbDvPDukZtwWYA",
    authDomain: "detailsform-47884.firebaseapp.com",
    projectId: "detailsform-47884",
    storageBucket: "detailsform-47884.appspot.com",
    messagingSenderId: "527053811940",
    appId: "1:527053811940:web:56b36e7095e1102b4f7cf1",
    measurementId: "G-CRZWH9KRWE"
  };


const firebaseApp = firebase.initializeApp(firebaseConfig);
export const db = firebaseApp.firestore();