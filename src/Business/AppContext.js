import React, { useEffect, useState } from "react";
import { readProducts, readServices} from "../Firebase/readDoc";

export const appContext = React.createContext();

export function AppContext({ children }) {

  const [arrayProducts, setArrayProducts] = useState([]);
  const [searchProducts, setSearchProducts] = React.useState('');
  const [arrayServices, setArrayServices] = useState([]);
  const [searchServices, setSearchServices] = React.useState('');
  const [filterProducts, setFilterProducts] = React.useState('todo');
  const [filterServices, setFilterServices] = React.useState('todo');
  const [openModal, setOpenModal] = React.useState(false);
  const [active, setActive] = React.useState(null);

  useEffect(() => {
    
    async function fetchProducts() {
      const getProducts = await readProducts();
      setArrayProducts(getProducts);
    }
    fetchProducts();

    async function fetchServices() {
      const getServices = await readServices();
      setArrayServices(getServices);
    }
    fetchServices();
}, []);

  let searchedProducts = [];

  if (!searchProducts.length >= 1) {
    searchedProducts = arrayProducts;
  } else {
    searchedProducts = arrayProducts.filter(product => {
      const productName = product.nombre.toLowerCase();
      const searchName = searchProducts.toLowerCase();
      return productName.includes(searchName);
    });
  }

  let searchedServices = [];

  if (!searchServices.length >= 1) {
    searchedServices = arrayServices;
  } else {
    searchedServices = arrayServices.filter(service => {
      const serviceName = service.nombre.toLowerCase();
      const searchName = searchServices.toLowerCase();
      return serviceName.includes(searchName);
    });
  }

  if (filterProducts !== 'todo') {
    searchedProducts = searchedProducts.filter(product => filterProducts === product.categoria);
  }

  if (filterServices !== 'todo') {
    searchedServices = searchedServices.filter(service => filterServices === service.categoria);
  }

  return (
    <appContext.Provider
      value={{
        arrayProducts,
        setArrayProducts,
        searchedProducts,
        searchProducts, 
        setSearchProducts,
        arrayServices,
        setArrayServices,
        searchedServices,
        searchServices, 
        setSearchServices,
        filterProducts, 
        setFilterProducts,
        filterServices, 
        setFilterServices,
        openModal,
        setOpenModal,
        active, 
        setActive
      }}
      >
      {children}
    </appContext.Provider>
  )
}