import React, { useEffect, useState } from "react";
import { readProducts } from "../Firebase/readDoc";

export const productContext = React.createContext();

export function ProductContext({ children }) {

  const [arrayProducts, setArrayProducts] = useState([]);
  const [searchValue, setSearchValue] = React.useState('');
  const [filter, setFilter] = React.useState('todo');
  const [openModal, setOpenModal] = React.useState(false);
  const [active, setActive] = React.useState(null);

  useEffect(() => {
    
    async function fetchProducts() {
      const getProducts = await readProducts();
      setArrayProducts(getProducts);
    }
    fetchProducts();
  }, []);

  let searchedProducts = [];

  if (!searchValue.length >= 1) {
    searchedProducts = arrayProducts;
  } else {
    searchedProducts = arrayProducts.filter(product => {
      const productName = product.nombre.toLowerCase();
      const searchName = searchValue.toLowerCase();
      return productName.includes(searchName);
    });
  }

  if (filter !== 'todo') {
    searchedProducts = searchedProducts.filter(product => filter === product.categoria);
  }

  console.log(active)

  return (
    <productContext.Provider
      value={{
        arrayProducts,
        setArrayProducts,
        searchedProducts,
        searchValue, 
        setSearchValue,
        filter, 
        setFilter,
        openModal,
        setOpenModal,
        active, 
        setActive
      }}
      >
      {children}
    </productContext.Provider>
  )
}



