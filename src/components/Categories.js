import React from 'react';
import { categories } from '../data/categories';
import { Category } from './Category';

const icons = require.context('../assets/icons', true);

export const Categories = ({ page }) => {

  const items = categories.filter(item => item.page === page);

  return (
    <>
      <div className="col-4 mt-3 categories p-4 rounded">
        <form className='input-wrapper'>
          <input 
            type="text"
            className="form-control"
            id="search"
            placeholder="Buscar"
          />
          <img className="input-icon icon" src={icons('./buscar.svg')} alt="Buscar" />
        </form>
        <h5 className='text-uppercase fw-bold mt-5'>Ubicación</h5>
        <p>{(page === 'products' ? 'Productos' : 'Servicios' )} cercanos a Aguas Zarcas</p>
        <h5 className='text-uppercase fw-bold mt-5 mb-3'>Categorías</h5>
        {
          items.map( ({ id, name, image }) => <Category key={ id } name={ name } image={ image } />)
        }
      </div>
    </>
  )
}
