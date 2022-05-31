import React, {useContext} from "react";
import { NavLink } from "react-router-dom";
import { useAuth } from "../../../Business/Context/AuthContext";
import './Header.css'
import logo from '../../../Assets/logo.png'
import { useNavigate } from "react-router-dom";
import {UseAppContext } from "../../../Business/Context/UseAppContext"

const Header = () => {
  const navigate = useNavigate();
  const { logout } = useAuth();
  const { tam, setTam, user } = useContext(UseAppContext);

  const sumTam = () => {
    if(tam < 20){
      setTam(tam+1)
    }
  }

  const resTam = () => {
    if(tam > 12){
      setTam(tam-1)
    }
  }

  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.error(error.message);
    }
  };

  const handleHome = () => {
    navigate("/");
  }

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
              <img className='logo' src={logo} onClick={handleHome} alt="logo" />
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
                <li className="nav-item" style={{ fontSize: "1.2rem" }}>
                  <div className="nav-link"
                    style={{ color: 'white', display: "flex", flexDirection: "row"}}>
                    <div onClick={sumTam} style={{cursor: 'pointer'}}>A+</div>
                    <div onClick={()=>setTam(16)} style={{ marginLeft: "16px", cursor: 'pointer'}}>A</div>
                    <div onClick={resTam} style={{ marginLeft: "16px", cursor: 'pointer'}}>A-</div>
                  </div>
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
              <img className="rounded-circle border border-0 border-primary shadow" alt="profile" src={user.img} width={40} height="auto"
              />
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
