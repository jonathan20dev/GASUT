import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAGTIzCJpj21NGyTXlilxSdwB1NVn7-dtU",
    authDomain: "gasut-s5.firebaseapp.com",
    projectId: "gasut-s5",
    storageBucket: "gasut-s5.appspot.com",
    messagingSenderId: "253161483004",
    appId: "1:253161483004:web:88273fcd27cb501372c579"
  };

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

//(╯°□°）╯︵ ┻━┻
export { db };

