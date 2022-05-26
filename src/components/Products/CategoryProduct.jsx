import React from 'react';
import { appContext } from '../../Business/AppContext';

const icons = require.context('../../assets/icons', true);

export const CategoryProduct = ({ name, image }) => {
    
  const { filterProducts, setFilterProducts } = React.useContext(appContext);

  const handleFilter = () => {
    if(filterProducts !== name.toLowerCase()) {
      setFilterProducts(name.toLowerCase())
    } else {
      setFilterProducts("todo")
    }
  }

  const isActive = filterProducts === name.toLowerCase() ? "d-flex align-items-center cp mb-2 active" : "d-flex align-items-center cp mb-2"

  return (
    <div className={isActive} onClick={handleFilter}>
      <img className='icon me-1' src={icons(`./${image}.svg`)} alt={ name } />
      <p>{ name }</p>
    </div>
  )
}
