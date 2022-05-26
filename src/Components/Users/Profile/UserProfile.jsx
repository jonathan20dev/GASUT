import React, { useState, useEffect } from 'react'
import { useAuth } from "../../../Business/Context/AuthContext";
import { Header } from "../../Shared/Header/Header.jsx"
import {Footer} from "../../Shared/Footer"
import { getUser } from "../../../Firebase/getUser"
import './UserProfile.css'
import { NavLink, Outlet } from 'react-router-dom';
import {Button} from '../../Shared/Button';

const UserProfile = () => {
  const [userP, setUser] = useState({nombre:"", img:"", correo:""})
  const { user } = useAuth();
  const extractProfile = async() => {
    const usuario = await getUser(user.reloadUserInfo.localId)
    setUser(usuario)
  }

  useEffect(() => {
    extractProfile()
  }, [])

  const styles = {
    navItem: {
      cursor: 'pointer', 
      color: 'rgb(0,0,0)',
      textDecoration: 'none'
    }
  }

  return (
    <>
    <Header/>
    <div style={{backgroundColor: '#F7F7F6', paddingBottom: '40px', paddingTop: '40px'}}>
        <div className="container">
          <div className="row">
            <div className="col-lg-4 border border-1 offset-lg-0 text-center">
              <div className="p-3 p-xl-4"><img className="rounded-circle border border-0 border-primary shadow" alt="profile" src={userP.img} width={216} height="auto" />
                <p style={{ marginTop:"15px", color: "rgb(0,0,0)" }}>
                  Email de inicio de sesión:
                  <br />
                  {userP.correo}
                  <br />
                  <em>Tu email de inicio de sesión no se puede cambiar</em>
                  <br/>
                </p>
                <Button clase={"btn btn-primary"} texto={"Cambiar contraseña"}/>
              </div>
            </div>
            <div className="col">
              <section className="position-relative" style={{width: "100%" }}>
                <div className="container position-relative">
                  <div className="row d-flex justify-content-center">
                    <div className="col">
                      <nav className="navbar navbar-light navbar-expand-md sticky-top textprimary fs-6 fw-normal text-primary py-3" style={{zIndex: 1}}>
                        <div className='container justify-content-around'>
                          <p className="link-dark" style={styles.navItem}>
                            <NavLink
                              className={({ isActive }) =>
                                `nav-link ${isActive ? "active fw-bold" : ""}`
                              }
                              style={{color: 'black'}}
                              aria-current="page"
                              to="/profile/misDatos"
                            >
                                Mis Datos
                            </NavLink>
                          </p>
                          <p className="link-dark" style={styles.navItem}>
                            <NavLink
                              className={({ isActive }) =>
                                `nav-link ${isActive ? "active fw-bold" : ""}`
                              }
                              style={{color: 'black'}}
                              aria-current="page"
                              to="/profile/misServicios"
                            >
                                Mis Servicios
                            </NavLink>
                            
                          </p>
                          <p className="link-dark" style={styles.navItem}>
                            <NavLink
                              className={({ isActive }) =>
                                `nav-link ${isActive ? "active fw-bold" : ""}`
                              }
                              style={{color: 'black'}}
                              aria-current="page"
                              to="/profile/misProductos"
                            >
                                Mis Productos
                            </NavLink>
                          </p>
                        </div>
                      </nav>
                      <hr style={{marginTop: '0px', marginBottom: '25px'}}/>
                    </div>
                  </div>
                </div>
              </section>
              <Outlet/>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
      </>
  )
}

export {UserProfile}