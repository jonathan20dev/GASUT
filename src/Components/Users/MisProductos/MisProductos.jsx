import React from "react";
import Button from "../../Shared/Button";
import { Tabla } from "../../Shared/Tabla";

function MisProductos() {
  const productos = [
    {
      imagen:'img',
      nombre: 'nombre',
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
      nombre: 'nombre',
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
      nombre: 'nombre',
      tipo: 'tipo',
      descripcion: 'descripcion'
    }
  ]

  return (
    <div className="container">
      <Button clase={"btn btn-primary"} texto={'Nuevo producto'}/>
      <Tabla titulos={['imagen', 'nombre', 'tipo', 'descripción']} filas={productos}/> 
    </div>
  );
}

export { MisProductos };
