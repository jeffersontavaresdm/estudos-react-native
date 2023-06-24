import {initializeApp} from 'firebase/app';
import {getDatabase} from 'firebase/database';
import {getAuth} from 'firebase/auth';

// Pegar as configs em:
// https://console.firebase.google.com/u/0/project/<nome-do-projeto>-<code>/settings/general/web:<token>
// Path: https://console.firebase.google.com/u/0/ -> projeto -> clica no projeto, na engrenagem e desce a tela.
const firebaseConfig = {
  apiKey: '...',
  authDomain: '...',
  databaseURL: '...',
  projectId: '...',
  storageBucket: '...',
  messagingSenderId: '...',
  appId: '...',
  measurementId: '...',
};

const firebaseApp = initializeApp(firebaseConfig);

// Database
const firebaseDB = getDatabase(firebaseApp);

// Authentication
const firebaseAuth = getAuth(firebaseApp);

export {firebaseApp, firebaseDB, firebaseAuth};
