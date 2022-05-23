import React, { useState, useEffect } from "react";
import { useAuth } from "../../../Business/Context/AuthContext";
import { getUser } from "../../../Firebase/getUser"
import { insertUser } from "../../../Firebase/insertUser"
import { useNavigate } from "react-router-dom";

function MisDatos() {
  const [userP, setUser] = useState({
    codigo_postal: "",
    correo: "",
    id: "",
    img: "",
    nombre: "",
    telefono: "",
    direccion: ""
  })
  const navigate = useNavigate();
  const { user } = useAuth();
  const extractProfile = async() => {
    const usuario = await getUser(user.reloadUserInfo.localId)
    setUser(usuario)
  }

  useEffect(() => {
    extractProfile()
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault();
    insertUser(user.reloadUserInfo.localId, userP)
    navigate("/profile");
  };

  return (
    <form className="container" onSubmit={handleSubmit}>
      <div className="row">
          <div className="col">
            <div className="p-3 p-xl-4" method="post">
              <p style={{ color: "rgb(0,0,0)" }}>Nombre completo</p>
              <input
                className="form-control"
                type="text"
                id="name"
                name="name"
                placeholder={userP.nombre}
                onChange={(e) => setUser({ ...userP, nombre: e.target.value })}
                style={{ borderRadius: "5px" }}
              />
            </div>
          </div>
        </div>
        <div className="row" style={{marginTop: "-20px"}}>
          <div className="col-md-6 col-lg-6 col-xl-6">
            <div className="p-3 p-xl-4">
              <p style={{ color: "rgb(0,0,0)" }}>Teléfono</p>
              <input
                className="form-control"
                type="tel"
                placeholder={userP.telefono}
                onChange={(e) => setUser({ ...userP, telefono: e.target.value })}
                style={{ borderRadius: "5px" }}
              />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="p-3 p-xl-4">
              <p style={{ color: "rgb(0,0,0)" }}>Código postal</p>
              <input
                className="form-control"
                type="number"
                min="4"
                placeholder={userP.codigo_postal}
                onChange={(e) => setUser({ ...userP, codigo_postal: e.target.value })}
                style={{ borderRadius: "5px" }}
              />
            </div>
          </div>
        </div>
        <div className="row" style={{marginTop: "-20px"}}>
          <div className="col">
            <div className="p-3 p-xl-4" method="post">
              <p style={{ color: "rgb(0,0,0)" }}>Dirección</p>
              <textarea
                className="form-control"
                placeholder={userP.direccion}
                style={{ borderRadius: "5px" }}
                onChange={(e) => setUser({ ...userP, direccion: e.target.value })}
              ></textarea>
              <button
                className="btn btn-primary"
                type="submit"
                style={{ marginTop: "20px" }}>
                Actualizar información
                <br />
              </button>
            </div>
          </div>
        </div>
    </form>
  );
}

export { MisDatos };
