import { setDoc, doc  } from 'firebase/firestore';
import { db } from './firebase';

//No es recomendable utilizarlo para productos o servicios
//Inserta con el mismo ID con el cual esta guardado en firebase Auth

const insertUser = async (id,user) => {
    return setDoc(doc(db, 'Usuarios', id), user);
}

export { insertUser };