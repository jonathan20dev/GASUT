import React, { useContext, useState } from "react";
import "./EditForm.css";
import { UseAppContext } from "../../../Business/Context/UseAppContext";

const EditForm = ({ objeto, categorias, elemento }) => {
  const { updateDoc, openModal, setOpenModal } = useContext(UseAppContext);
  const [img, setImg] = useState(objeto.img);
  const [URL, setURL] = useState(false);
  const [nuevo, setNuevo] = useState(objeto);

  const handleImg = (e) => {
    setImg(e.target.value);
    handleChange(e);
  };

  const handleChange = ({ target }) => {
    setNuevo({
      ...nuevo,
      [target.name]: target.value,
    });
  };

  const onCancel = () => {
    setOpenModal({ ...openModal, modal1: false, modal2: false });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    setOpenModal({ ...openModal, modal1: false, modal2: false });
    if (elemento === "producto") {
      updateDoc("Productos", nuevo);
    } else {
      updateDoc("Servicios", nuevo);
    }
  };

  let className = "smallCombo";
  if (elemento === "servicio") {
    className = "largeCombo";
  }
  return (
    <form className="nuevoProductoForm" onSubmit={onSubmit}>
      <div className="cerrar" onClick={onCancel}>
        <i className="bi bi-x"></i>
      </div>
      <div className="row">
        <div
          className="col d-flex flex-column justify-content-center"
          style={{ paddingBottom: "10px" }}
        >
          <label
            style={{
              width: "100%",
              textAlign: "center",
              paddingBottom: 10,
              fontWeight: "bold",
              fontSize: 18,
              textTransform: "capitalize",
            }}
          >
            Modificar {elemento}
          </label>
          <div
            className="d-flex justify-content-center"
            style={{ paddingBottom: "15px" }}
          >
            <img
              className="imagen-responsive"
              src={img}
              alt="Producto o servicio"
              onClick={() => setURL(true)}
            />
          </div>
          {URL && (
            <div className="d-xl-flex" style={{ flexDirection: "column" }}>
              <label
                className="fw-bold"
                style={{
                  width: "auto",
                  textAlign: "left",
                  paddingBottom: "10px",
                }}
              >
                Imgen URL
              </label>
              <input
                name="img"
                type="url"
                style={{ width: "100%" }}
                onChange={handleImg}
                value={nuevo.img}
              />
            </div>
          )}
        </div>
      </div>
      <div className="row" style={{ paddingBottom: "10px" }}>
        <div className="col">
          <div className="text-center d-flex flex-column align-content-center ">
            <label
              className="fw-bold"
              style={{ width: "auto", textAlign: "left", paddingBottom: 10 }}
            >
              Nombre
            </label>
            <input
              style={{
                marginBottom: 10,
                borderStyle: "none",
                background: "#EEF6F0",
                height: "30px",
              }}
              name="nombre"
              onChange={handleChange}
              value={nuevo.nombre}
            />
            <div
              style={{ display: "flex", flexDirection: "row", width: "100%" }}
            >
              <div
                className={className}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  paddingRight: "5px",
                }}
              >
                <label
                  className="fw-bold"
                  style={{
                    width: "100%",
                    textAlign: "left",
                    paddingBottom: 10,
                  }}
                >
                  Categoría
                </label>
                <select
                  className="formCombo"
                  name="categoria"
                  onChange={handleChange}
                  value={nuevo.categoria}
                >
                  {categorias.map((c) => (
                    <option key={c} value={c}>
                      {c}
                    </option>
                  ))}
                </select>
              </div>
              {elemento === "producto" && (
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    width: "50%",
                    paddingLeft: "5px",
                  }}
                >
                  <label
                    className="fw-bold"
                    style={{
                      width: "auto",
                      textAlign: "left",
                      paddingBottom: 10,
                      paddingRight: 10,
                    }}
                  >
                    Cantidad
                  </label>
                  <input
                    name="cantidad"
                    type="number"
                    style={{
                      marginBottom: 10,
                      borderStyle: "none",
                      background: "#EEF6F0",
                      height: "30px",
                    }}
                    onChange={handleChange}
                    value={nuevo.cantidad}
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="row" style={{ paddingBottom: "10px" }}>
        <div className="col" style={{ paddingBottom: "15px" }}>
          <label className="form-label fw-bold">Descripción</label>
          <textarea
            className="form-control item"
            style={{
              background: "#EEF6F0",
              borderStyle: "none",
              paddingBottom: "10px",
            }}
            name="descripcion"
            onChange={handleChange}
            value={nuevo.descripcion}
          />
        </div>
      </div>
      <button
        className="btn btn-primary w-100"
        type="submit"
        style={{
          color: "white",
          background: "#395B45",
          height: 40,
          textTransform: "capitalize",
        }}
      >
        modificar {elemento}
      </button>
    </form>
  );
};

export { EditForm };
