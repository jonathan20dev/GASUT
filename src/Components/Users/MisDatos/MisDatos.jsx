import React from "react";
import { useAuth } from "../../../Business/Context/AuthContext";

function MisDatos() {
  const { user } = useAuth();
  const nombre = (
    user.displayName === null ? "Nombre Apellido" : user.displayName
  ).split(" ");
  return (
    <div>
      <div className="row">
        <div className="col-md-6 col-lg-6 col-xl-6">
          <div>
            <form className="p-3 p-xl-4" method="post">
              <p style={{ color: "rgb(0,0,0)" }}>Nombre</p>
              <div className="mb-3">
                <input
                  className="form-control"
                  type="text"
                  id="name-1"
                  name="name"
                  placeholder={nombre[0]}
                  style={{ borderRadius: "5px" }}
                />
              </div>
              <p />
              <p style={{ color: "rgb(0,0,0)" }}>Celular</p>
              <div className="mb-3">
                <input
                  className="form-control"
                  type="tel"
                  placeholder="0000-0000"
                  style={{ borderRadius: "5px" }}
                />
              </div>
              <div className="mb-3" />
              <div />
            </form>
          </div>
        </div>
        <div className="col-lg-6">
          <form className="p-3 p-xl-4" method="post">
            <p style={{ color: "rgb(0,0,0)" }}>Apellidos</p>
            <div className="mb-3">
              <input
                className="form-control"
                type="text"
                id="name-2"
                name="name"
                placeholder={nombre[1]}
                style={{ borderRadius: "5px" }}
              />
            </div>
            <p style={{ color: "rgb(0,0,0)" }}>Email</p>
            <div className="mb-3">
              <input
                className="form-control"
                type="email"
                id="email-2"
                name="email"
                placeholder={user.email}
                disabled
                style={{ borderRadius: "5px", backgroundColor: "#FFF" }}
              />
            </div>
            <div className="mb-3" />
            <div />
          </form>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <form className="p-3 p-xl-4" method="post">
            <div className="mb-3" />
            <p style={{ color: "rgb(0,0,0)" }}>Ubicación</p>
            <div className="mb-3">
              <textarea
                className="form-control"
                style={{ borderRadius: "5px" }}
                defaultValue={""}
              />
            </div>
            <button
              className="btn btn-primary"
              type="button"
              style={{ borderRadius: "20px" }}
            >
              Guardar cambios
            </button>
            <div className="mb-3" />
            <div />
          </form>
        </div>
      </div>
    </div>
  );
}

export { MisDatos };
