import React from 'react';
import { UseAppContext } from '../../Business/Context/UseAppContext';

const icons = require.context('../../Assets/icons', true);

export const CategoryService = ({ name, image }) => {
  
  const { filterServices, setFilterServices,arrayServices, setAServices } = React.useContext(UseAppContext);

  const handleFilter = () => {
    if(filterServices !== name.toLowerCase()) {
      filtrar(name.toLowerCase())
      setFilterServices(name.toLowerCase())
    } else {
      setFilterServices("todo")
      filtrar('')
    }
  }

  const filtrar = (busca) => {
    const busquedaResuelta = arrayServices.filter((service) => {
      if (
        service.categoria.toLowerCase().includes(busca.toLowerCase())
      ) {
        return service;
      }
    });
    setAServices(busquedaResuelta);
  };

  const isActive = filterServices === name.toLowerCase() ? "d-flex align-items-center cp mb-2 active-button" : "d-flex align-items-center cp mb-2"

  return (
    <div className={isActive} onClick={handleFilter}>
      <img className='icon me-1' src={icons(`./${image}.svg`)} alt={ name } />
      <p>{ name }</p>
    </div>
  )
}
