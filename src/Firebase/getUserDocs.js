import { db } from './Firebase';
import { collection, getDocs } from 'firebase/firestore';

const getUserCollection = async (id,coleccion) => {
    const userDocC = collection(db, coleccion);
    const userDocSP = await getDocs(userDocC);
  
    return userDocSP.docs.map((element) => ({ ...element.data(), id: element.id})).filter(element => element.id_propietario === id)
  
};

export { getUserCollection };