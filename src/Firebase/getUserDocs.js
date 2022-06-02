import { db } from './firebase';
import { collection, getDocs } from 'firebase/firestore';

const getUserCollection = async (id,coleccion) => {
    const userDocC = collection(db, coleccion);
    const userDocSP = await getDocs(userDocC);
    const documento = userDocSP.docs.map((element) => ({...element.data(),id: element.id})).filter(element => element.id_propietario === id)
    const another = (coleccion === "Productos")? 
    documento.map(el => [{img: el.img, nombre: el.nombre, categoria: el.categoria, descripcion: el.descripcion, cantidad: el.cantidad, id: el.id, id_propietario: el.id_propietario}]).flat() : 
    documento.map(el => [{img: el.img, nombre: el.nombre, categoria: el.categoria, descripcion: el.descripcion, id: el.id, id_propietario: el.id_propietario, likes: el.likes}]).flat()
    return another
};

export { getUserCollection };