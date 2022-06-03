import React, { useContext, useState } from "react";
import { UseAppContext } from "../../../Business/Context/UseAppContext";
import { Button } from "../../Shared/Button";
import { Tabla } from "../../Shared/Tabla";
import { Modal } from "../../Shared/Modal/Modal.jsx";
import { CreateForm } from "../CreateForm/CreateForm.jsx";

function MisProductos() {
  const {
    products,
    user,
    handleSort,
    userProductSearch,
    setUserProductSearch,
  } = useContext(UseAppContext);
  const [busqueda, setBusqueda] = useState("");
  const { openModal, setOpenModal } = useContext(UseAppContext);

  const onClickButton = () => {
    setOpenModal({
      ...openModal,
      modal1: true,
    });
  };

  const handleSearch = (e) => {
    setBusqueda(e.target.value);
    filtrar(e.target.value);
  };

  const filtrar = (busca) => {
    const busquedaResuelta = products.filter((product) => {
      if (
        product.nombre.toLowerCase().includes(busca.toLowerCase()) ||
        product.categoria.toLowerCase().includes(busca.toLowerCase())
      ) {
        return product;
      }
    });
    setUserProductSearch(busquedaResuelta);
  };

  return (
    <div className="container">
      <div className="contenedorAccionesP">
        <div className="botonNuevo">
          <Button
            clase={"btn btn-primary"}
            texto={"Nuevo producto"}
            accion={onClickButton}
            color={"#395B45"}
            ancho={"100%"}
          />
        </div>

        <div className="contenedorFiltros">
          <div
            style={{ alignContent: "center" }}
            className="btn-outline-light"
            type="button"
          >
            <div className="nav-item dropdown" style={{ height: "100%" }}>
              <div
                style={{
                  textDecoration: "none",
                  fontSize: "17px",
                  color: "black",
                  height: "100%",
                }}
                id="navbarDropdownMenuLink"
                data-bs-toggle="dropdown"
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    height: "100%",
                    alignItems: "center",
                  }}
                >
                  <i className="bi bi-filter-left"></i>ordenar
                </div>
              </div>
              <ul
                className="dropdown-menu"
                style={{ fontSize: "14px" }}
                aria-labelledby="navbarDropdownMenuLink"
              >
                <li>
                  <button
                    className="dropdown-item"
                    onClick={() =>
                      handleSort("products", products, "cantidad", ">")
                    }
                  >
                    Cantidad (menor a mayor)
                  </button>
                </li>
                <li>
                  <button
                    className="dropdown-item"
                    onClick={() =>
                      handleSort("products", products, "cantidad", "<")
                    }
                  >
                    Cantidad (mayor a menor)
                  </button>
                </li>
                <li>
                  <button
                    className="dropdown-item"
                    onClick={() =>
                      handleSort("products", products, "nombre", ">")
                    }
                  >
                    Nombre A-Z
                  </button>
                </li>
                <li>
                  <button
                    className="dropdown-item"
                    onClick={() =>
                      handleSort("products", products, "nombre", "<")
                    }
                  >
                    Nombre Z-A
                  </button>
                </li>
                <li>
                  <button
                    className="dropdown-item"
                    onClick={() =>
                      handleSort("products", products, "categoria", ">")
                    }
                  >
                    Categoría A-Z
                  </button>
                </li>
                <li>
                  <button
                    className="dropdown-item"
                    onClick={() =>
                      handleSort("products", products, "categoria", "<")
                    }
                  >
                    Categoría Z-A
                  </button>
                </li>
              </ul>
            </div>
          </div>

          <div className="btn-outline-light ms-3">
            <form>
              <input
                style={{ height: "37px" }}
                className="form-control me-2"
                type="search"
                value={busqueda}
                onChange={handleSearch}
                placeholder={"Buscar..."}
                aria-label="Search"
              />
            </form>
          </div>
        </div>
      </div>

      {userProductSearch !== undefined && products.length > 0 ? (
        <Tabla
          titulos={["Imagen", "Nombre", "Categoría", "Descripción", "Cantidad"]}
          filas={userProductSearch}
        />
      ) : (
        <div className="row mb-4">
          <div className="text-center mx-auto">
            <p
              className="text-muted"
              style={{ marginLeft: "15px", paddingTop: "50px" }}
            >
              Aún no has compartido algun producto con la comunidad
            </p>
          </div>
        </div>
      )}

      {openModal.modal1 && (
        <Modal>
          <CreateForm
            objeto={{
              img: "",
              nombre: "",
              categoria: "",
              descripcion: "",
              cantidad: 0,
              id_propietario: user.id,
            }}
            categorias={[
              "Deportivos",
              "Electrónicos",
              "Hogar",
              "Jardinería",
              "Prendas de vestir",
              "Otros",
            ]}
            elemento={"producto"}
          />
        </Modal>
      )}
    </div>
  );
}

export { MisProductos };
