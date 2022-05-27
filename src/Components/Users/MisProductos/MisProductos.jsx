import React, {useContext, useEffect} from "react";
import { UseAppContext } from "../../../Business/Context/UseAppContext";
import { Button } from "../../Shared/Button";
import { Tabla } from "../../Shared/Tabla";
import { Modal } from "../../Shared/Modal/Modal.jsx";
import { CreateForm } from "../CreateForm/CreateForm.jsx";

function MisProductos() {
  const {products, getUserDocument, handleSort } = useContext(UseAppContext)
  useEffect(() => {
    getUserDocument('Productos');
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
                <button className="dropdown-item" onClick={()=>handleSort("products", products, "cantidad", ">")}>
                  Cantidad (menor a mayor)
                </button>
              </li>
              <li>
                <button className="dropdown-item" onClick={()=>handleSort("products", products, "cantidad", "<")}>
                  Cantidad (mayor a menor)
                </button>
              </li>
              <li>
                <button className="dropdown-item" onClick={()=>handleSort("products", products, "nombre", ">")}>
                  Nombre A-Z
                </button>
              </li>
              <li>
                <button className="dropdown-item" onClick={()=>handleSort("products", products, "nombre", "<")}>
                  Nombre Z-A
                </button>
              </li>
              <li>
                <button className="dropdown-item" onClick={()=>handleSort("products", products, "categoria", ">")}>
                  Categoría A-Z
                </button>
              </li>
              <li>
                <button className="dropdown-item" onClick={()=>handleSort("products", products, "categoria", "<")}>
                  Categoría Z-A
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
      
      {(products !== undefined && products.length > 0 )?
      <Tabla
        titulos={["Imagen", "Nombre", "Categoría", "Descripción", "Cantidad"]}
        filas={products}
      /> : 
      <div className="row mb-4">
      <div className="text-center mx-auto">
        <p className="text-muted" style={{marginLeft: '15px',paddingTop: '50px',}}>Aún no has compartido algun producto con la comunidad</p>
      </div>
      </div>}
      
      
      
      {openModal && (
        <Modal>
          <CreateForm categorias={['Deportivos', 'Electrónicos', 'Hogar', 'Jardinería', 'Prendas de vestir', 'Otro']} elemento={'producto'}/>
        </Modal>
      )}
    </div>
  );
}

export { MisProductos };
