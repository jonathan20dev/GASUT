
import React, {useContext, useEffect} from 'react'
import {Button} from '../../Shared/Button'
import { Tabla } from '../../Shared/Tabla'
import { UseAppContext } from "../../../Business/Context/UseAppContext";

function MisServicios() {
  const {services, getUserServices, handleSort } = useContext(UseAppContext)
  useEffect(() => {
    getUserServices();
}, [])

  return (
    <div className="container">
      <div className="justify-content-start">
      <Button clase={"btn btn-primary"} texto={'Nuevo servicio'}/>
        <div className="btn btn-sm btn-outline-light" type="button">
        <div className="nav-item dropdown">
        <div style={{textDecoration: 'none', fontSize:"17px", color: 'black'}} id="navbarDropdownMenuLink" data-bs-toggle="dropdown" ><i className="bi bi-filter-left"></i>ordenar por</div>
          <ul className="dropdown-menu" style={{fontSize:"14px"}} aria-labelledby="navbarDropdownMenuLink">
            <li><button className="dropdown-item" onClick={()=>handleSort("services", services, "nombre",">")}>Nombre A-Z</button></li>
            <li><button className="dropdown-item" onClick={()=>handleSort("services", services, "nombre","<")}>Nombre Z-A</button></li>
            <li><button className="dropdown-item" onClick={()=>handleSort("services", services, "categoria",">")}>Categoría A-Z</button></li>
            <li><button className="dropdown-item" onClick={()=>handleSort("services", services, "categoria","<")}>Categoría Z-A</button></li>
          </ul>
        </div>
        </div>
      </div>

      <Tabla titulos={['Imagen','Nombre', 'Categoría', 'Descripción']} filas={services}/>
    </div>
  )
}

export { MisServicios }