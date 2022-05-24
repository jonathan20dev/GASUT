import { db } from "./firebase";
import { collection, getDocs } from "firebase/firestore";

export const readProducts = async () => {

  const query = await getDocs(collection(db, `/Productos`));

  console.log(query)

  if (query) {

    const docs = query.docs;
    let products = [];
    docs.forEach(product => {
      const id = product.id
      const temp = { ...product.data(), id}
      return products = [...products, temp]
    });

    return products;

  } else {
    return [];
  }
}

export const readServices = async () => {

  const query = await getDocs(collection(db, `/Servicios`));

  console.log(query)

  if (query) {

    const docs = query.docs;
    let services = [];
    docs.forEach(service => {
      const id = service.id
      const temp = { ...service.data(), id}
      return services = [...services, temp]
    });

    return services;

  } else {
    return [];
  }
}