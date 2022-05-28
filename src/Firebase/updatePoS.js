import { setDoc, doc  } from 'firebase/firestore';
import { db } from './firebase';

const updatePoS = async (id,obj,coleccion) => {
    return setDoc(doc(db, coleccion, id), obj);
}

export { updatePoS };