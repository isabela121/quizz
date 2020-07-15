import firebase from 'firebase'
import Rebase from 're-base'

const firebaseInfo = {
    apiKey: "AIzaSyD5aRpkI_Nq3_PS4YscvY47K9rK2wVZd6I",
    authDomain: "quizz-a8db7.firebaseapp.com",
    databaseURL: "https://quizz-a8db7.firebaseio.com",
    projectId: "quizz-a8db7",
    storageBucket: "quizz-a8db7.appspot.com",
    messagingSenderId: "701576109356",
    appId: "1:701576109356:web:e17608bf994fbb15fd6089",
    measurementId: "G-JGY116Y5QR"
  };
  // Initialize Firebase
  const db = firebase.database(firebaseInfo)
  const config = Rebase.createClass(db)
  firebase.analytics();


  export default config