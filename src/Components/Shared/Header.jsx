import React from "react";
import { NavLink } from "react-router-dom";
import { useAuth } from "../../Business/Context/AuthContext";

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
      Header
      <p href="/profile/:misDatos" style={{ marginLeft: "10px" }}>
        <NavLink
          className={({ isActive }) =>
            `nav-link ${isActive ? "active fw-bold" : ""}`
          }
          style={{ color: "black" }}
          aria-current="page"
          to="/profile/misDatos"
        >
          Perfil
        </NavLink>
      </p>
      <button onClick={handleLogout} style={{ marginLeft: "30px" }}>
        Cerrar sesion
      </button>
      <hr />
    </div>
  );
};

export { Header };
