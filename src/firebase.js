import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/database';

const config = {
  // TUS CREDENCIALES
  };

firebase.initializeApp(config);

export default firebase;