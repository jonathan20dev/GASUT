import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <hr style={{ marginTop: "50px", backgroundColor: "#000" }} />
      <footer className="page-footer font-small blue pt-4" style={{backgroundColor: '#EEF6F0'}}>
        <div
          className="text-center py-3"
          style={{
            letterSpacing: "0.1em",
            fontSize: "28px",
            marginBottom: "20px",
          }}
        >
          GASUT
        </div>
        <div className="container-fluid text-center text-md-left">
          <div className="row" style={{ justifyContent: "space-between" }}>
            <hr className="clearfix w-100 d-md-none pb-0" />

            <div className="col-md-3 mb-md-0 mb-3">
              <ul className="list-unstyled">
                <li>
                <NavLink
                    className={({ isActive }) =>
                      `nav-link ${isActive ? "active" : ""}`
                    }
                    style={{ color: 'Black'}}
                    aria-current="page"
                    to="/"
                  >
                    Productos
                  </NavLink>
                </li>
                <li>
                <NavLink
                    className={({ isActive }) =>
                      `nav-link ${isActive ? "active" : ""}`
                    }
                    style={{ color: 'Black'}}
                    aria-current="page"
                    to="/"
                  >
                    Servicios
                  </NavLink>
                </li>
                <li>
                <NavLink
                    className={({ isActive }) =>
                      `nav-link ${isActive ? "active" : ""}`
                    }
                    style={{ color: 'Black'}}
                    aria-current="page"
                    to="/"
                  >
                    Contacto
                  </NavLink>
                </li>
                <li>
                <NavLink
                    className={({ isActive }) =>
                      `nav-link ${isActive ? "active" : ""}`
                    }
                    style={{ color: 'Black'}}
                    aria-current="page"
                    to="/"
                  >
                    Acerca de
                  </NavLink>
                </li>
              </ul>
            </div>

            <div className="col-md-3 mb-md-0 mb-3">
              <ul className="list-unstyled">
                <li className="d-flex justify-content-center">
                  <i>
                    <a style={{ margin: "10px" }} href="#!">
                      <i
                        style={{ margin: "10px", color: 'black', fontSize: '25px' }}
                        className="bi bi-facebook"
                      ></i>
                    </a>
                  </i>
                  <i>
                    <a style={{ margin: "10px" }} href="#!">
                      <i
                        style={{ margin: "10px", color: 'black', fontSize: '25px' }}
                        className="bi bi-twitter"
                      ></i>
                    </a>
                  </i>
                  <i>
                    <a style={{ margin: "10px" }} href="#!">
                      <i
                        style={{ margin: "10px", color: 'black', fontSize: '25px' }}
                        className="bi bi-instagram"
                      ></i>
                    </a>
                  </i>
                </li>
              </ul>
            </div>

            <div className="col-md-3 mb-md-0 mb-3">
              <ul className="list-unstyled">
                <li>
                <NavLink
                    className={({ isActive }) =>
                      `nav-link ${isActive ? "active" : ""}`
                    }
                    style={{ color: 'Black'}}
                    aria-current="page"
                    to="/"
                  >
                    Políticas de la tienda
                  </NavLink>
                </li>
                <li>
                <NavLink
                    className={({ isActive }) =>
                      `nav-link ${isActive ? "active" : ""}`
                    }
                    style={{ color: 'Black'}}
                    aria-current="page"
                    to="/"
                  >
                    Preguntas frecuentes
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer-copyright text-center py-3">
          © 2022 GASUT:
          <p> GASUT.com</p>
        </div>
      </footer>
    </div>
  );
};

export { Footer };
