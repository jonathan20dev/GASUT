
import React, {useState} from 'react'
import {Button} from '../../Shared/Button'
import { Tabla } from '../../Shared/Tabla'

function MisServicios() {
  const [servicios, setServicios] =useState([{
    imagen:'img',
    nombre: 'nombrz',
    tipo: 'tipo',
    descripcion: 'descripcion'
  },
  {
    imagen:'img',
    nombre: 'nombrx',
    tipo: 'tipo',
    descripcion: 'descripcion'
  },
  {
    imagen:'img',
    nombre: 'nombra',
    tipo: 'tipo',
    descripcion: 'descripcion'
  },
  {
    imagen:'img',
    nombre: 'nombre',
    tipo: 'tipo',
    descripcion: 'descripcion'
  },
  {
    imagen:'img',
    nombre: 'nombrc',
    tipo: 'tipo',
    descripcion: 'descripcion'
  }])
  
  const handleNameSort = () => {
    setServicios([...servicios.sort((first, second) => (first.nombre > second.nombre) ? 1 : ((second.nombre > first.nombre) ? -1 : 0))])
  } 

  return (
    <div className="container">
      <div className="justify-content-start">
      <Button clase={"btn btn-primary"} texto={'Nuevo servicio'}/>
        <div className="btn btn-sm btn-outline-light" type="button">
        <div className="nav-item dropdown">
        <a style={{textDecoration: 'none', fontSize:"17px", color: 'black'}} href="#" id="navbarDropdownMenuLink" data-bs-toggle="dropdown" ><i className="bi bi-filter-left"></i>ordenar por</a>
          <ul className="dropdown-menu" style={{fontSize:"14px"}} aria-labelledby="navbarDropdownMenuLink">
            <li><button className="dropdown-item" onClick={handleNameSort}>Nombre</button></li>
          </ul>
        </div>
        </div>
      </div>

      <Tabla titulos={['imagen','nombre', 'tipo', 'descripción']} filas={servicios}/>
    </div>
  )
}

export { MisServicios }