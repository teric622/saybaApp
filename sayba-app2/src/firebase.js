import firebase from "firebase";



// const firebaseConfig = {
//     apiKey: "AIzaSyCK1Y4A5xjH9htjwXledF2b0tw6ns9hwbI",
//     authDomain: "sayba-app.firebaseapp.com",
//     databaseURL: "https://sayba-app.firebaseio.com",
//     projectId: "sayba-app",
//     storageBucket: "sayba-app.appspot.com",
//     messagingSenderId: "742564578797",
//     appId: "1:742564578797:web:1d08d73b3c9e8bd07853e4",
//     measurementId: "G-BVEFNVPR87"
//   };

// const firebaseConfig = {
//   apiKey: "AIzaSyAe-rLYQncjtqpAWoyjNdaKUubJRaBvk_g",
//   authDomain: "nezapp-76c1b.firebaseapp.com",
//   databaseURL: "https://nezapp-76c1b.firebaseio.com",
//   projectId: "nezapp-76c1b",
//   storageBucket: "nezapp-76c1b.appspot.com",
//   messagingSenderId: "831702249365",
//   appId: "1:831702249365:web:7ebf21b03fe130d7c9909c",
//   measurementId: "G-XP8WYQGJXV"
// };


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDm-tFVc0TPB7ElSDSZ8vqGfPIPoCSdf98",
  authDomain: "nez-app-et.firebaseapp.com",
  databaseURL: "https://nez-app-et.firebaseio.com",
  projectId: "nez-app-et",
  storageBucket: "nez-app-et.appspot.com",
  messagingSenderId: "356280542908",
  appId: "1:356280542908:web:2fc9c0e71d9a738acc92b9",
  measurementId: "G-JTX9GSX65B"
};




  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {auth, provider};
  export default db;