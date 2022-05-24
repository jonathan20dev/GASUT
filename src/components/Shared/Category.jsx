import React from 'react';
import { productContext } from '../../Business/ProductContext';
import { serviceContext } from '../../Business/ServiceContext';

const icons = require.context('../../assets/icons', true);

export const Category = ({ name, image, page }) => {
  let context;
  if(page === 'services') {
      context = serviceContext;
  } else {
      context = productContext;
  }

  const { filter, setFilter } = React.useContext(context);

  const handleFilter = () => {
    if(filter !== name.toLowerCase()) {
      setFilter(name.toLowerCase())
    } else {
      setFilter("todo")
    }
  }

  const isActive = filter === name.toLowerCase() ? "d-flex align-items-center cp mb-2 active" : "d-flex align-items-center cp mb-2"

  return (
    <div className={isActive} onClick={handleFilter}>
      <img className='icon me-1' src={icons(`./${image}.svg`)} alt={ name } />
      <p>{ name }</p>
    </div>
  )
}
