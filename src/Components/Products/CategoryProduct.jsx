import React from 'react';
import { UseAppContext } from '../../Business/Context/UseAppContext';

const icons = require.context('../../Assets/icons', true);

export const CategoryProduct = ({ name, image }) => {
    
  const { filterProducts, setFilterProducts } = React.useContext(UseAppContext);

  const handleFilter = () => {
    if(filterProducts !== name.toLowerCase()) {
      setFilterProducts(name.toLowerCase())
    } else {
      setFilterProducts("todo")
    }
  }

  const isActive = filterProducts === name.toLowerCase() ? "d-flex align-items-center cp mb-2 active-button" : "d-flex align-items-center cp mb-2"

  return (
    <div className={isActive} onClick={handleFilter}>
      <img className='icon me-1' src={icons(`./${image}.svg`)} alt={ name } />
      <p>{ name }</p>
    </div>
  )
}
