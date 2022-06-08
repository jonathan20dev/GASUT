import React from 'react'
import { Header } from "../Shared/Header/Header"
import { Footer } from "../Shared/Footer"

export const About = () => {
  return (
    <>    
    <Header/>  
    <div className='container-lg mb-5 d-flex'>
        <div className='cards-center gap-4 d-flex'>
          <div className="mt-5">
            <h2 className='text-center fw-bold'>Nuestra historia</h2>
            <p className='my-3 mx-5 text-justify'>Somos un grupo de 4 estudiantes del Instituto Tecnológico de Costa Rica que busca aportar con los objetivos de desarrollo sostenible de las Naciones Unidas para lograr un futuro mejor y más sostenible para todos. Por eso nos basamos en  la meta 3 del ODS 11 de las Naciones Unidas, el cual busca que “De aquí a 2030, aumentar la urbanización inclusiva y sostenible y la capacidad para la planificación y la gestión participativas, integradas y sostenibles de los asentamientos humanos en todos los países”.</p>
            <p className='my-3 mx-5 text-justify'>Decidimos aportar con esta meta porque vimos que en nuestras comunidades existía un problema de la falta de medios accesibles que permitan a los ciudadanos de una misma comunidad establecer un entorno de colaboración que les ofrezca facilidades para reutilizar y apoyarse mutuamente. Por eso creamos esta aplicación web, el cual busca facilitar que los habitantes de una región puedan dar o recibir productos y ayudar a todas aquellas personas a darse a conocer que están realizando un emprendimiento en su comunidad.</p>
          </div>
        </div>
      </div>    
    
    <Footer/>
    </>
  )
}


