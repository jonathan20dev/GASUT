import { db } from "./firebase";
import { collection, getDocs } from "firebase/firestore";

let users = []
const readUsers = async () => {

  const query = await getDocs(collection(db, `/Usuarios`));

  if (query) {

    const docs = query.docs;
    docs.forEach(user => {
      const id = user.id
      const temp = { ...user.data(), id}
      return users = [...users, temp]
    });
    return users;

  } else {
    return [];
  }
}

readUsers()
export const readProducts = async () => {

  const query = await getDocs(collection(db, `/Productos`));

  if (query) {

    const docs = query.docs;
    let products = [];
    docs.forEach(product => {
      const id = product.id
      const temp = { ...product.data(), id}
      return products = [...products, temp]
    });
    products.forEach(product => {
      const idOwner = product.id_propietario
      users.forEach(user => {
        if(user.id === idOwner){
          product.nombre_propietario = user.nombre
          product.telefono = user.telefono
          product.correo = user.correo
        }
      })
      
    })
    return products;

  } else {
    return [];
  }
}


export const readServices = async () => {

  const query = await getDocs(collection(db, `/Servicios`));

  //console.log(query)

  if (query) {

    const docs = query.docs;
    let services = [];
    docs.forEach(service => {
      const id = service.id
      const temp = { ...service.data(), id}
      return services = [...services, temp]
    });
    services.forEach(service => {
      const idOwner = service.id_propietario
      users.forEach(user => {
        if(user.id === idOwner){
          service.nombre_propietario = user.nombre
          service.telefono = user.telefono
          service.correo = user.correo
          service.img_propietario = user.img
        }
      })
    });

    return services;

  } else {
    return [];
  }
}

