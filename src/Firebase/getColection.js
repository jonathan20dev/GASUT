import { db } from './Firebase';
import { collection, getDocs } from 'firebase/firestore';

//coleccion => Productos, Servicios o Usuarios
//id: element.id hace referencia al ID del documento (en la coleccion)
const getColection = async (coleccion) => {
    const productosC = collection(db, coleccion);
    const productoSP = await getDocs(productosC);
  
    return productoSP.docs.map((element) => ({ ...element.data(), id: element.id}))
  
};

export { getColection };

