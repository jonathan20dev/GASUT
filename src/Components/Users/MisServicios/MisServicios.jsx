import React, { useContext, useEffect } from "react";
import { Button } from "../../Shared/Button";
import { Tabla } from "../../Shared/Tabla";
import { UseAppContext } from "../../../Business/Context/UseAppContext";
import { Modal } from "../../Shared/Modal/Modal.jsx";
import { CreateForm } from "../CreateForm/CreateForm.jsx";

function MisServicios() {
  const { services, getUserServices, handleNameSort, openModal, setOpenModal} =
    useContext(UseAppContext);
  useEffect(() => {
    getUserServices();
  }, []);

  const onClickButton = () => {
    setOpenModal((prevState) => !prevState);
    console.log(openModal);
  };

  return (
    <div className="container">
      <div className="justify-content-start">
        <Button
          clase={"btn btn-primary"}
          texto={"Nuevo servicio"}
          accion={onClickButton}
        />
        <div className="btn btn-sm btn-outline-light" type="button">
          <div className="nav-item dropdown">
            <a
              style={{
                textDecoration: "none",
                fontSize: "17px",
                color: "black",
              }}
              href="#"
              id="navbarDropdownMenuLink"
              data-bs-toggle="dropdown"
            >
              <i className="bi bi-filter-left"></i>ordenar por
            </a>
            <ul
              className="dropdown-menu"
              style={{ fontSize: "14px" }}
              aria-labelledby="navbarDropdownMenuLink"
            >
              <li>
                <button
                  className="dropdown-item"
                  onClick={() => handleNameSort("services")}
                >
                  Nombre
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Tabla
        titulos={["Imagen", "Nombre", "Categoría", "Descripción"]}
        filas={services}
      />
      {openModal && (
        <Modal>
          <CreateForm categorias={['Autónomo', 'Costura', 'Guarañar', 'Limpieza', 'Pintar', 'Manicura', 'Otro']} elemento={'servicio'}/>
        </Modal>
      )}
    </div>
  );
}

export { MisServicios };
