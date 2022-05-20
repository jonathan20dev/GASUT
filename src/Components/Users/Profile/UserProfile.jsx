import React, { useState } from 'react'
import { useAuth } from "../../../Business/Context/AuthContext";
import { Header } from "../../Shared/Header"
import {Footer} from "../../Shared/Footer"
import { MisDatos } from '../MisDatos/MisDatos';
import { MisServicios } from '../MisServicios/MisServicios';
import { MisProductos } from '../MisProductos/MisProductos';
import './UserProfile.css'

const UserProfile = () => {
  const { user } = useAuth(); 
  const [opcion, setOpcion] = useState(<MisDatos/>)

  const styles = {
    navItem: {
      cursor: 'pointer', 
      color: 'rgb(0,0,0)',
      textDecoration: 'none'
    }
  }

  const handleOpcion = (componente) => {
    setOpcion(componente)
  }
  
  return (
    <>
    <Header/>
    <div style={{backgroundColor: '#F7F7F6'}}>
        <div className="container">
          <div className="row">
            <div className="col-lg-4 offset-lg-0 text-center">
              <form className="p-3 p-xl-4" method="post"><img className="rounded-circle border border-0 border-primary shadow" alt="profile" src={("https://tecdigital.tec.ac.cr/dotlrn/file-storage/view/dotlrn_fs_1066758_root_folder%2Fdesign%2FprofileAux.png")} width={216} height="auto" />
                <p className="lead" style={{marginTop: '10px'}}>{(user.displayName || "Usuario")}</p><button className="btn btn-primary" type="button" style={{borderRadius: '20px'}}>Cambiar contraseña</button>
              </form>
            </div>
            <div className="col">
              <section className="position-relative py-4 py-xl-5">
                <div className="container position-relative">
                  <div className="row d-flex justify-content-center">
                    <div className="col">
                      <nav className="navbar navbar-light navbar-expand-md sticky-top textprimary fs-6 fw-normal text-primary py-3">
                        <div className="container">
                          <p className="link-dark" onClick={() => handleOpcion(<MisDatos/>)} style={styles.navItem}>Mis Datos</p>
                          <p className="link-dark" onClick={() => handleOpcion(<MisServicios/>)} style={styles.navItem}>Mis Servicios</p>
                          <p className="link-dark" onClick={() => handleOpcion(<MisProductos/>)} style={styles.navItem}>Mis Productos</p>
                        </div>
                      </nav>
                    </div>
                  </div>
                  {opcion}
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
      </>
  )
}

export {UserProfile}