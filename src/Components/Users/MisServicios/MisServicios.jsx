import React, { useContext, useEffect, useState } from "react";
import { Button } from "../../Shared/Button";
import { Tabla } from "../../Shared/Tabla";
import { UseAppContext } from "../../../Business/Context/UseAppContext";
import { Modal } from "../../Shared/Modal/Modal.jsx";
import { CreateForm } from "../CreateForm/CreateForm.jsx";

function MisServicios() {
  const [busqueda, setBusqueda] = useState("");
  const {
    services,
    user,
    getUserDocument,
    handleSort,
    openModal,
    setOpenModal,
    setUserServiceSearch,
    userServiceSearch,
  } = useContext(UseAppContext);
  useEffect(() => {
    getUserDocument("Servicios");
  }, []);

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
    const busquedaResuelta = services.filter((service) => {
      if (
        service.nombre.toLowerCase().includes(busca.toLowerCase()) ||
        service.categoria.toLowerCase().includes(busca.toLowerCase())
      ) {
        return service;
      }
    });
    setUserServiceSearch(busquedaResuelta);
  };

  return (
    <div className="container">
      <div className="contenedorAccionesP">
        <div className="botonNuevo">
          <Button
            clase={"btn btn-primary"}
            texto={"Nuevo servicio"}
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
                      handleSort("services", services, "nombre", ">")
                    }
                  >
                    Nombre A-Z
                  </button>
                </li>
                <li>
                  <button
                    className="dropdown-item"
                    onClick={() =>
                      handleSort("services", services, "nombre", "<")
                    }
                  >
                    Nombre Z-A
                  </button>
                </li>
                <li>
                  <button
                    className="dropdown-item"
                    onClick={() =>
                      handleSort("services", services, "categoria", ">")
                    }
                  >
                    Categoría A-Z
                  </button>
                </li>
                <li>
                  <button
                    className="dropdown-item"
                    onClick={() =>
                      handleSort("services", services, "categoria", "<")
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

      {userServiceSearch !== undefined && services.length > 0 ? (
        <Tabla
          titulos={["Imagen", "Nombre", "Categoría", "Descripción"]}
          filas={userServiceSearch}
        />
      ) : (
        <div className="row mb-4">
          <div className="text-center mx-auto">
            <p
              className="text-muted"
              style={{ marginLeft: "15px", paddingTop: "50px" }}
            >
              Aún no has compartido tus servicios con la comunidad
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
              id_propietario: user.id,
              likes: 0,
            }}
            categorias={[
              "Autónomo",
              "Costura",
              "Guarañar",
              "Limpieza",
              "Pintar",
              "Manicura",
            ]}
            elemento={"servicio"}
          />
        </Modal>
      )}
    </div>
  );
}

export { MisServicios };
