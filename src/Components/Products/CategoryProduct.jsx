import React from 'react';
import { UseAppContext } from '../../Business/Context/UseAppContext';

const icons = require.context('../../Assets/icons', true);

export const CategoryProduct = ({ name, image }) => {
    
  const { filterProducts, setFilterProducts, setAProducts, arrayProducts } = React.useContext(UseAppContext);

  const handleFilter = () => {
    if(filterProducts !== name.toLowerCase()) {
      filtrar(name.toLowerCase())
      setFilterProducts(name.toLowerCase())
    } else {
      filtrar("")
      setFilterProducts("todo")
    }
  }

  const filtrar = (busca) => {
    const busquedaResuelta = arrayProducts.filter((produc) => {
      if (
        produc.categoria.toLowerCase().includes(busca.toLowerCase())
      ) {
        return produc;
      }
    });
    setAProducts(busquedaResuelta);
  };

  const isActive = filterProducts === name.toLowerCase() ? "d-flex align-items-center cp mb-2 active-button" : "d-flex align-items-center cp mb-2"

  return (
    <div className={isActive} onClick={handleFilter}>
      <img className='icon me-1' src={icons(`./${image}.svg`)} alt={ name } />
      <p>{ name }</p>
    </div>
  )
}
