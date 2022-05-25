import React from "react";
import { UseAppContext } from "../../../Business/Context/AppContext";
import {Button} from "../../Shared/Button";
import { Tabla } from "../../Shared/Tabla";
import { Modal } from '../../Shared/Modal/Modal.jsx'
import { NewProductForm } from '../NewProductForm/NewProductForm.jsx'

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

  const {openModal, setOpenModal} = UseAppContext();

  const onClickButton = () => {
    setOpenModal(prevState => !prevState);
    console.log(openModal)
  }

  return (
    <div className="container">
      <Button clase={"btn btn-primary"} texto={'Nuevo producto'} accion={onClickButton}/>
      <Tabla titulos={['imagen', 'nombre', 'tipo', 'descripción']} filas={productos}/> 
      {
        openModal && <Modal>
          <NewProductForm/>
        </Modal>
      }
    </div>
  );
}

export { MisProductos };
