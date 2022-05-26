import React, {useContext, useEffect} from "react";
import { UseAppContext } from "../../../Business/Context/UseAppContext";
import { Button } from "../../Shared/Button";
import { Tabla } from "../../Shared/Tabla";
import { Modal } from "../../Shared/Modal/Modal.jsx";
import { CreateForm } from "../CreateForm/CreateForm.jsx";

function MisProductos() {
  const {products, getUserProducts, handleSort, handleNameSort } = useContext(UseAppContext)
  useEffect(() => {
    getUserProducts();
}, [])

  const { openModal, setOpenModal } = useContext(UseAppContext)

  const onClickButton = () => {
    setOpenModal((prevState) => !prevState);
    console.log(openModal);
  };

  return (
    <div className="container">
      <div className="justify-content-start">
      <Button
        clase={"btn btn-primary"}
        texto={"Nuevo producto"}
        accion={onClickButton}
      />
        <div className="btn btn-sm btn-outline-light" type="button">
          <div className="nav-item dropdown">
            <div
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
            </div>
            <ul
              className="dropdown-menu"
              style={{ fontSize: "14px" }}
              aria-labelledby="navbarDropdownMenuLink"
            >
              <li>
                <button className="dropdown-item" onClick={handleSort}>
                  Cantidad
                </button>
              </li>
              <li>
                <button className="dropdown-item" onClick={()=>handleNameSort("products")}>
                  Nombre
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Tabla
        titulos={["Imagen", "Nombre", "Categoría", "Descripción", "Cantidad"]}
        filas={products}
      />
      {openModal && (
        <Modal>
          <CreateForm categorias={['Deportivos', 'Electrónicos', 'Hogar', 'Jardinería', 'Prendas de vestir', 'Otro']} elemento={'producto'}/>
        </Modal>
      )}
    </div>
  );
}

export { MisProductos };
