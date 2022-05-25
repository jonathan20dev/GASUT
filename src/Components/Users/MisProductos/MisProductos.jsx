import React, {useState,useContext} from "react";
import { UseAppContext } from "../../../Business/Context/UseAppContext";
import { Button } from "../../Shared/Button";
import { Tabla } from "../../Shared/Tabla";
import { Modal } from "../../Shared/Modal/Modal.jsx";
import { NewProductForm } from "../NewProductForm/NewProductForm.jsx";

function MisProductos() {
  const {products, getUserProducts } = useContext(UseAppContext)
  

  const [producte, setProductes] = useState([
    {
      imagen: "img",
      nombre: "nombrz",
      tipo: "tipo",
      cantidad: 4,
      descripcion: "descripcion",
    },
    {
      imagen: "img",
      nombre: "nombrk",
      tipo: "tipo",
      cantidad: 8,
      descripcion: "descripcion",
    },
    {
      imagen: "img",
      nombre: "nombrl",
      tipo: "tipo",
      cantidad: 3,
      descripcion: "descripcion",
    },
    {
      imagen: "img",
      nombre: "nombrd",
      tipo: "tipo",
      cantidad: 12,
      descripcion: "descripcion",
    },
    {
      imagen: "img",
      nombre: "nombre",
      tipo: "tipo",
      cantidad: 5,
      descripcion: "descripcion",
    },
  ]);

  const handleSort = () => {
    setProductes([...producte.sort((a, b) => a.cantidad - b.cantidad)]);
  };
  const handleNameSort = () => {
    setProductes([
      ...producte.sort((a, b) =>
        a.nombre > b.nombre ? 1 : b.nombre > a.nombre ? -1 : 0
      ),
    ]);
  };

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
                <button className="dropdown-item" onClick={handleNameSort}>
                  Nombre
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Tabla
        titulos={["imagen", "nombre", "tipo", "cantidad", "descripción"]}
        filas={producte}
      />
      {openModal && (
        <Modal>
          <NewProductForm />
        </Modal>
      )}
    </div>
  );
}

export { MisProductos };
