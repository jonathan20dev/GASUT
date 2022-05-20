import React from 'react'
import { useAuth } from "../../../Business/Context/AuthContext";
import { Header } from "../../Shared/Header"
import {Footer} from "../../Shared/Footer"

const UserProfile = () => {
  const { user } = useAuth();  
  const nombre = ((user.displayName === null) ? "Nombre Apellido" : user.displayName).split(" ")
  
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
                        <div className="container"><a className="text-capitalize link-dark" href="#!" style={{color: 'rgb(0,0,0)', fontWeight: 'bold', textDecoration: 'none'}}>Mis Datos</a><a className="link-dark" href="#!" style={{color: 'rgb(0,0,0)', textDecoration: 'none'}}>Mis Servicios</a><a className="link-dark" href="#!" style={{color: 'rgb(0,0,0)', textDecoration: 'none'}}>Mis Productos</a></div>
                      </nav>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6 col-lg-6 col-xl-6">
                      <div>
                        <form className="p-3 p-xl-4" method="post">
                          <p style={{color: 'rgb(0,0,0)'}}>Nombre</p>
                          <div className="mb-3"><input className="form-control" type="text" id="name-1" name="name" placeholder={nombre[0]} style={{borderRadius: '5px'}} /></div>
                          <p />
                          <p style={{color: 'rgb(0,0,0)'}}>Celular</p>
                          <div className="mb-3"><input className="form-control" type="tel" placeholder="0000-0000" style={{borderRadius: '5px'}} /></div>
                          <div className="mb-3" />
                          <div />
                        </form>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <form className="p-3 p-xl-4" method="post">
                        <p style={{color: 'rgb(0,0,0)'}}>Apellidos</p>
                        <div className="mb-3"><input className="form-control" type="text" id="name-2" name="name" placeholder={nombre[1]} style={{borderRadius: '5px'}} /></div>
                        <p style={{color: 'rgb(0,0,0)'}}>Email</p>
                        <div className="mb-3"><input className="form-control" type="email" id="email-2" name="email" placeholder={user.email} disabled style={{borderRadius: '5px', backgroundColor: '#FFF'}} /></div>
                        <div className="mb-3" />
                        <div />
                      </form>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col">
                      <form className="p-3 p-xl-4" method="post">
                        <div className="mb-3" />
                        <p style={{color: 'rgb(0,0,0)'}}>Ubicación</p>
                        <div className="mb-3"><textarea className="form-control" style={{borderRadius: '5px'}} defaultValue={""} /></div><button className="btn btn-primary" type="button" style={{borderRadius: '20px'}}>Guardar cambios</button>
                        <div className="mb-3" />
                        <div />
                      </form>
                    </div>
                  </div>
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