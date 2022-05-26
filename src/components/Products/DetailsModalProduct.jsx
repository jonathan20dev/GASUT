import React from 'react'
import { appContext } from '../../Business/AppContext';

export const DetailsModalProduct = () => {

  const { active } = React.useContext(appContext);

  const { nombre, cantidad } = active;

  return (
    <>
      <p className='mb-1 mt-3'><span className='fw-bold'>Nombre: </span>{ nombre }</p>
      <p className='mb-1'><span className='fw-bold'>Cantidad: </span>{ cantidad }</p>
      <p className='mb-1'><span className='fw-bold'>Propietario: </span>Fabricio Ulate</p>
    </>
  )
}
