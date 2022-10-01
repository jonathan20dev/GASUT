import { setDoc, doc  } from 'firebase/firestore';
import { db } from './firebase';

const insertUser = async (id,user) => {
    return setDoc(doc(db, 'Usuarios', id), user);
}

export { insertUser };