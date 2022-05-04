import { addDoc, collection } from 'firebase/firestore';
import { db } from './firebase';
//ಠ_ಠ

//coleccion = Productos o Servicios
//docu = objeto de producto o Servicio que se desee insertar

const insertDocument = async (coleccion, docu) => {
    const documentCollection = collection(db, coleccion);
    await addDoc(documentCollection, docu);
};

export { insertDocument };

//Ejemeplo
//insertDocument('Productos', {nombre: 'taza', cantidad: 12, ...})