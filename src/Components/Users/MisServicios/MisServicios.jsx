import React, { useContext, useEffect } from "react";
import { Button } from "../../Shared/Button";
import { Tabla } from "../../Shared/Tabla";
import { UseAppContext } from "../../../Business/Context/UseAppContext";
import { Modal } from "../../Shared/Modal/Modal.jsx";
import { CreateForm } from "../CreateForm/CreateForm.jsx";

function MisServicios() {
  const { services, user,getUserDocument, handleSort, openModal, setOpenModal} =
    useContext(UseAppContext);
  useEffect(() => {
    getUserDocument('Servicios');
  }, []);

  const onClickButton = () => {
    setOpenModal({
      ...openModal, 
      modal1:true
    })
  };

  return (
    <div className="container">
      <div className="justify-content-start">
        <Button
          clase={"btn btn-primary"}
          texto={"Nuevo servicio"}
          accion={onClickButton}
          color={'#395B45'}
        />
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
      
      {(services !== undefined && services.length > 0 )?
      <Tabla
        titulos={["Imagen", "Nombre", "Categoría", "Descripción"]}
        filas={services}
      />
      :
      <div className="row mb-4">
      <div className="text-center mx-auto">
        <p className="text-muted" style={{marginLeft: '15px',paddingTop: '50px',}}>Aún no has compartido tus servicios con la comunidad</p>
      </div>
      </div>}
      
      {openModal.modal1 && (
        <Modal>
          <CreateForm objeto={{img: '',
            nombre: '',
            categoria: '',
            likes: 0,
            descripcion: "",
            id_propietario: user.id}} 
            categorias={['Autónomo', 'Costura', 'Guarañar', 'Limpieza', 'Pintar', 'Manicura']} 
            elemento={'servicio'}/>
        </Modal>
      )}
    </div>
  );
}

export { MisServicios };
