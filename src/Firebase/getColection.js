import { db } from './Firebase';
import { collection, getDocs } from 'firebase/firestore';

//coleccion => Productos, Servicios o Usuarios
const getColection = async (coleccion) => {
    const productosC = collection(db, coleccion);
    const productoSP = await getDocs(productosC);
  
    return productoSP.docs.map((element) => ({ ...element.data()}))
  
};

export { getColection };

//Como recibirla
//const variablita = await getColection(Productos)
