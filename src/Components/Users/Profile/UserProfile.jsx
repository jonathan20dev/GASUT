import React from 'react'
import { Header } from "../../Shared/Header/Header.jsx"
import {Footer} from "../../Shared/Footer"
import './UserProfile.css'
import { NavLink, Outlet } from 'react-router-dom';
import {Button} from '../../Shared/Button';
import { useAuth } from '../../../Business/Context/AuthContext.jsx';

const UserProfile = () => {
  const { user } = useAuth()

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
            <div className="col-lg-4 offset-lg-0 text-center">
              <div className="p-3 p-xl-4"><img className="rounded-circle border border-0 border-primary shadow" alt="profile" src={user.img} width={216} height="auto" />
                <p style={{ marginTop:"15px", color: "rgb(0,0,0)" }}>
                  Email de inicio de sesión:
                  <br />
                  {user.correo}
                  <br />
                  <em>Tu email de inicio de sesión no se puede cambiar</em>
                  <br/>
                </p>
                <Button clase={"btn btn-primary"} texto={"Cambiar contraseña"} color={'#395B45'}/>
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