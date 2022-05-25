import React from 'react'
import {Button} from '../../Shared/Button'
import { Tabla } from '../../Shared/Tabla'

function MisServicios() {
  const servicios = [
    {
      imagen:'img',
      tipo: 'tipo',
      descripcion: 'descripcion'
    },
    {
      imagen:'img',
      tipo: 'tipo',
      descripcion: 'descripcion'
    },
    {
      imagen:'img',
      tipo: 'tipo',
      descripcion: 'descripcion'
    },
    {
      imagen:'img',
      tipo: 'tipo',
      descripcion: 'descripcion'
    },
    {
      imagen:'img',
      tipo: 'tipo',
      descripcion: 'descripcion'
    }
  ]
  
  return (
    <div className="container">
      <Button clase={"btn btn-primary"} texto={'Nuevo servicio'}/>
      <Tabla titulos={['imagen', 'tipo', 'descripción']} filas={servicios}/>
    </div>
  )
}

export { MisServicios }