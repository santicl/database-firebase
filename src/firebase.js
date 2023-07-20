import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/database';

const config = {
    apiKey: "AIzaSsdgfgfs7h60zdhdfhjfjgWhphqj50_Ly7LuGe9hc",
    authDomain: "form-data-33de.firebaseapp.com",
    databaseURL: "https://form-datas-forms-33de-default-rtdb.firebaseio.com",
    projectId: "form-data-formulario-33de",
    storageBucket: "form-data-33de.appspot.com",
    messagingSenderId: "07827075032748",
    appId: "1:781918001739:web:fghfthfhfghdgesfss",
    measurementId: "G-484jfdhdbddj"
  };

firebase.initializeApp(config);

export default firebase;