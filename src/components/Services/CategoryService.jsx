import React from 'react';
import { appContext } from '../../Business/AppContext';

const icons = require.context('../../assets/icons', true);

export const CategoryService = ({ name, image }) => {
  
  const { filterServices, setFilterServices } = React.useContext(appContext);

  const handleFilter = () => {
    if(filterServices !== name.toLowerCase()) {
      setFilterServices(name.toLowerCase())
    } else {
      setFilterServices("todo")
    }
  }

  const isActive = filterServices === name.toLowerCase() ? "d-flex align-items-center cp mb-2 active" : "d-flex align-items-center cp mb-2"

  return (
    <div className={isActive} onClick={handleFilter}>
      <img className='icon me-1' src={icons(`./${image}.svg`)} alt={ name } />
      <p>{ name }</p>
    </div>
  )
}
