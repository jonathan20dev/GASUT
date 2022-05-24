import React from 'react'
import { serviceContext } from '../../Business/ServiceContext';

export const DetailsModalService = () => {

  const { active } = React.useContext(serviceContext);

  const { nombre } = active;

  return (
    <>
      <p className='mb-1 mt-3'><span className='fw-bold'>Profesión: </span>{ nombre }</p>
      <p className='mb-1'><span className='fw-bold'>Nombre: </span>Marcos</p>
      <p className='mb-1'><span className='fw-bold'>Apellido: </span>Serrano</p>
    </>
  )
}
