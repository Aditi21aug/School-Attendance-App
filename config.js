import  firebase from "firebase";

//initialize your database

const firebaseConfig = {
  apiKey: "AIzaSyAUlJpgSmr_FRhX1stjoxvOe-e-WQXo718",
  authDomain: "school-attendance-app-d1e58.firebaseapp.com",
  projectId: "school-attendance-app-d1e58",
  storageBucket: "school-attendance-app-d1e58.appspot.com",
  messagingSenderId: "22134187102",
  appId: "1:22134187102:web:344fa97eb366a36780c0cf"
};

 if(!firebase.apps.length){ firebase.initializeApp(firebaseConfig); }
 export default firebase.database();
 

  