import React from 'react'
import { productContext } from '../../Business/ProductContext';

export const DetailsModalProduct = () => {

  const { active } = React.useContext(productContext);

  const { nombre, cantidad } = active;

  return (
    <>
      <p className='mb-1 mt-3'><span className='fw-bold'>Nombre: </span>{ nombre }</p>
      <p className='mb-1'><span className='fw-bold'>Cantidad: </span>{ cantidad }</p>
      <p className='mb-1'><span className='fw-bold'>Propietario: </span>Fabricio Ulate</p>
    </>
  )
}
