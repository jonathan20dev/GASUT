import React, { useState, useEffect, useContext } from "react";
import { insertUser } from "../../../Firebase/insertUser";
import { useNavigate } from "react-router-dom";
import { locations } from "../../../Assets/UbicacionesCR/ubicacionesCR";
import { UseAppContext } from "../../../Business/Context/UseAppContext";

function MisDatos() {
  const { user, extractProfile } = useContext(UseAppContext);
  const [userP, setUser] = useState({
    img: "",
    nombre: "",
    telefono: "",
    codigo_postal: "",
    provincia: "",
    canton: "",
    distrito: "",
  });
  const [ubicacionU, setUbicacionU] = useState({
    provinciaU: userP.provincia,
    cantonU: userP.canton,
    distritoU: userP.distrito,
  });
  const navigate = useNavigate();
  const prov =
    ubicacionU.provinciaU !== "" &&
    locations.find((p) => Object.keys(p)[0] === ubicacionU.provinciaU);

  useEffect(() => {
    const obtenerUsuario = async () => {
      const u = await extractProfile();
      setUser(u);
      setUbicacionU({
        ...ubicacionU,
        provinciaU: u.provincia,
      });
    };
    obtenerUsuario();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    insertUser(user.reloadUserInfo.localId, userP);
    navigate("/profile/misDatos");
    //Alert cambio exitoso
  };

  return (
    <form className="container" onSubmit={handleSubmit}>
      <div className="row">
        <div className="col">
          <div className="p-3" method="post">
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
      <div className="row">
        <div className="col-md-6 col-lg-6 col-xl-6">
          <div className="p-3">
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
        <div className="col-md-6 col-lg-6 col-xl-6">
          <div className="p-3">
            <p style={{ color: "rgb(0,0,0)" }}>Código postal</p>
            <input
              className="form-control"
              type="number"
              min="4"
              placeholder={userP.codigo_postal}
              onChange={(e) =>
                setUser({ ...userP, codigo_postal: e.target.value })
              }
              style={{ borderRadius: "5px" }}
            />
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-6">
          <div className="col">
            <div className="p-3">
              <p style={{ color: "rgb(0,0,0)" }}>Provincia</p>
              <select
                className="form-control"
                name="provincia"
                style={{ borderRadius: "5px" }}
                value={userP.provincia}
                onChange={(e) => {
                  setUser({ ...userP, provincia: e.target.value });
                  setUbicacionU({ ...ubicacionU, provinciaU: e.target.value });
                  console.log(userP, ubicacionU);
                }}
              >
                {
                  ubicacionU.provinciaU === '' && <option>
                  Provincia
                </option>
                }
                {locations.map((p) => (
                  <option key={Object.keys(p)[0]} value={Object.keys(p)[0]}>
                    {Object.keys(p)[0]}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="col">
            <div className="p-3">
              <p style={{ color: "rgb(0,0,0)" }}>Cantón</p>
              <select
                className="form-control"
                name="canton"
                style={{ borderRadius: "5px"}}
                value={userP.canton}
                onChange={(e) => {
                  setUser({ ...userP, canton: e.target.value });
                  setUbicacionU({ ...ubicacionU, cantonU: e.target.value });
                  console.log(userP, ubicacionU);
                }}
              >
                {
                  ubicacionU.cantonU === '' && <option>
                  Cantón
                </option>
                }
                {ubicacionU.provinciaU !== "" &&
                  Object.values(prov)[0].map((c) => (
                    <option key={Object.keys(c)[0]} value={Object.keys(c)[0]}>
                      {Object.keys(c)[0]}
                    </option>
                  ))}
              </select>
            </div>
          </div>
          <div className="col">
            <div className="p-3">
              <p style={{ color: "rgb(0,0,0)" }}>Distrito</p>
              <select
                className="form-control"
                name="distrito"
                style={{ borderRadius: "5px" }}
                value={userP.distrito}
                onChange={(e) => {
                  setUser({ ...userP, distrito: e.target.value });
                  setUbicacionU({ ...ubicacionU, distritoU: e.target.value });
                  console.log(userP, ubicacionU);
                }}
              >
                {
                  ubicacionU.distritoU === '' && <option>
                  Distrito
                </option>
                }
                {ubicacionU.provinciaU !== "" &&
                  Object.values(prov)[0].map(
                    (c) =>
                      Object.keys(c)[0] === userP.canton &&
                      Object.values(c)[0].map((d) => (
                        <option key={d} value={d}>
                          {d}
                        </option>
                      ))
                  )}
              </select>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="p-3" style={{height: '100%' }}>
            <p style={{ color: "rgb(0,0,0)" }}>Dirección</p>
            <textarea
              className="form-control"
              value={userP.direccion}
              style={{ borderRadius: "5px", height: "88.4%", resize: 'none' }}
              onChange={(e) => setUser({ ...userP, direccion: e.target.value })}
            ></textarea>
          </div>
        </div>
      </div>
      <div className="row">
          <div className="col-lg-6">
            <div className="p-3">
            <button
              className="btn btn-primary"
              type="submit"
              style={{ marginTop: "30px", width: '100%' }}
            >
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
