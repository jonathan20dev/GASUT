import React, {useState} from "react";
import Button from "../../Shared/Button";
import { Tabla } from "../../Shared/Tabla";

function MisProductos() {
  const [products, setProducts] = useState([
    {
      imagen:'img',
      nombre: 'nombrz',
      tipo: 'tipo',
      cantidad: 4,
      descripcion: 'descripcion',
    },
    {
      imagen:'img',
      nombre: 'nombrk',
      tipo: 'tipo',
      cantidad: 8,
      descripcion: 'descripcion'
    },
    {
      imagen:'img',
      nombre: 'nombrl',
      tipo: 'tipo',
      cantidad: 3,
      descripcion: 'descripcion'
    },
    {
      imagen:'img',
      nombre: 'nombrd',
      tipo: 'tipo',
      cantidad: 12,
      descripcion: 'descripcion'
    },
    {
      imagen:'img',
      nombre: 'nombre',
      tipo: 'tipo',
      cantidad: 5,
      descripcion: 'descripcion'
    }
  ])

  const handleSort = () => {
    setProducts([...products.sort((a,b) => a.cantidad-b.cantidad)])
  }
  const handleNameSort = () => {
    setProducts([...products.sort((first, second) => (first.nombre > second.nombre) ? 1 : ((second.nombre > first.nombre) ? -1 : 0))])
  } 

  return (
    <div className="container">
      
      <div className="justify-content-start">
        <Button clase={"btn btn-primary me-2"} texto={'Nuevo producto'}/>
        <div className="btn btn-sm btn-outline-light" type="button">
        <div className="nav-item dropdown">
        <a style={{textDecoration: 'none', fontSize:"17px", color: 'black'}} href="#" id="navbarDropdownMenuLink" data-bs-toggle="dropdown" ><i className="bi bi-filter-left"></i>ordenar por</a>
          <ul className="dropdown-menu" style={{fontSize:"14px"}} aria-labelledby="navbarDropdownMenuLink">
            <li><button className="dropdown-item" onClick={handleSort}>Cantidad</button></li>
            <li><button className="dropdown-item" onClick={handleNameSort}>Nombre</button></li>
          </ul>
        </div>
        </div>
      </div>
    
      <Tabla titulos={['imagen', 'nombre', 'tipo', 'cantidad', 'descripción']} filas={products}/> 
    </div>
  );
}

export { MisProductos };
