import firebase from 'firebase'
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDmbLAXkEUYMuDl2gEgqGuTWUFatP8gh3w",
    authDomain: "facebook-clone-e3aa2.firebaseapp.com",
    projectId: "facebook-clone-e3aa2",
    storageBucket: "facebook-clone-e3aa2.appspot.com",
    messagingSenderId: "444350321895",
    appId: "1:444350321895:web:5caa6484eb7d95dacd7e42",
    measurementId: "G-TDC55CQ50P"
  };
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();


  export { auth, provider};
  export default db;