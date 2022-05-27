import React from "react";
import { NavLink } from "react-router-dom";
import { useAuth } from "../../../Business/Context/AuthContext";
import './Header.css'
import logo from '../../../Assets/logo.png'

const Header = () => {
  const { logout } = useAuth();

  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <div>
      <div
        className="d-flex flex-row justify-content-between header"
      >
        <nav className="headernav navbar navbar-light navbar-expand-md">
          <div
            className="container"
            style={{ flexDirection: "row", marginBottom: "5px" }}
          >
            <button
              className="navbar-toggler text-primary border-0"
              data-bs-toggle="collapse"
              data-bs-target="#navcol-1"
              aria-expanded="false"
            >
              <span>
                <i
                  className="bi bi-list"
                  style={{
                    fontSize: "1.5rem",
                    color: "white",
                  }}
                ></i>
              </span>
            </button>
            <div
              className="navbar-brand d-flex align-items-center justify-content-center"
              style={{margin: '0px'}}
            >
              <img className='logo' src={logo} alt="logo" />
            </div>
            <div id="navcol-1" className="collapse navbar-collapse">
              <ul
                className="navbar-nav mx-auto"
                style={{ gap: "25px", margin: "8px" }}
              >
                <li className="nav-item" style={{ fontSize: "1.2rem" }}>
                  <NavLink
                    className={({ isActive }) =>
                      `nav-link ${isActive ? "active" : ""}`
                    }
                    style={{ color: 'white'}}
                    aria-current="page"
                    to="/"
                  >
                    Productos
                  </NavLink>
                </li>
                <li className="nav-item" style={{ fontSize: "1.2rem" }}>
                  <NavLink
                    className={({ isActive }) =>
                      `nav-link ${isActive ? "active" : ""}`
                    }
                    aria-current="page"
                    to="/services"
                    style={{ color: 'white'}}
                  >
                    Servicios
                  </NavLink>
                </li>
                <li className="nav-item" style={{ fontSize: "1.2rem" }}>
                  <NavLink
                    className={({ isActive }) =>
                      `nav-link ${isActive ? "active" : ""}`
                    }
                    aria-current="page"
                    to="/contact"
                    style={{ color: 'white'}}
                  >
                    Contacto
                  </NavLink>
                </li>
                <li className="nav-item" style={{ fontSize: "1.2rem" }}>
                  <NavLink
                    className={({ isActive }) =>
                      `nav-link ${isActive ? "active" : ""}`
                    }
                    aria-current="page"
                    to="/about"
                    style={{ color: 'white'}}
                  >
                    Acerca de
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <div
          className="d-flex flex-row justify-content-center align-items-center"
          style={{
            padding: "10px",
            position: "absolute",
            right: "10px",
            top: "18px",
          }}
        >
          <div className="dropdown">
            <button
              className="btn btn-primary dropdown-toggle"
              aria-expanded="false"
              data-bs-toggle="dropdown"
              type="button"
              style={{
                color: 'white',
                background: "rgba(255,255,255,0)",
                borderWidth: "0px",
                width: "auto",
                padding: "7px",
              }}
            >
              <i
                className="bi bi-person"
                style={{
                  fontSize: "1.5rem",
                  color: "white",
                }}
              ></i>
            </button>
            <div
              className="dropdown-menu"
              style={{
                margin: "5px",
              }}
            >
              <div className="dropdown-item">
                <NavLink
                  className={({ isActive }) =>
                    `nav-link ${isActive ? "active fw-bold" : ""}`
                  }
                  style={{ color: "black", paddingLeft: '0px'}}
                  aria-current="page"
                  to="/profile/misDatos"
                >
                  Perfil
                </NavLink>
              </div>
              <div className="dropdown-item" onClick={handleLogout}>
                Cerrar sesión
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr style={{ marginBottom: "0px", marginTop: "0px", height: '10px', color: '#3E6744'}} />
    </div>
  );
};

export { Header };
