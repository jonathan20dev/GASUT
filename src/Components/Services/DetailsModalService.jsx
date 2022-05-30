import React from 'react'
import { UseAppContext } from '../../Business/Context/UseAppContext';

export const DetailsModalService = () => {

  const { active } = React.useContext(UseAppContext);

  const { nombre, nombre_propietario} = active;
  let arrayName = nombre_propietario.split(" ");

  return (
    <>
      <p className='mb-1 mt-3'><span className='fw-bold'>Profesión: </span>{ nombre }</p>
      <p className='mb-1'><span className='fw-bold'>Nombre: </span>{arrayName[0]}</p>
      <p className='mb-1'><span className='fw-bold'>Apellido: </span>{arrayName[1]}</p>
    </>
  )
}
