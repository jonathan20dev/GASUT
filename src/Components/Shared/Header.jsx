import React from 'react'
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
      <button onClick={handleLogout} style={{ marginLeft: '30px'}}>Cerrar sesion</button>
      <hr/>
    </div>
  )
}

export {Header}