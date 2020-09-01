import firebase from "firebase";



const firebaseConfig = {
    apiKey: "AIzaSyCK1Y4A5xjH9htjwXledF2b0tw6ns9hwbI",
    authDomain: "sayba-app.firebaseapp.com",
    databaseURL: "https://sayba-app.firebaseio.com",
    projectId: "sayba-app",
    storageBucket: "sayba-app.appspot.com",
    messagingSenderId: "742564578797",
    appId: "1:742564578797:web:1d08d73b3c9e8bd07853e4",
    measurementId: "G-BVEFNVPR87"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {auth, provider};
  export default db;