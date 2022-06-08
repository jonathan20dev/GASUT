import React from 'react'
import { Header } from "../Shared/Header/Header"
import { Footer } from "../Shared/Footer"

export const Policies = () => {
  return (
    <>
    <Header/>
    <div className='container-lg mb-5 d-flex'>
        <div className='cards-center gap-4 d-flex'>
          <div>
            <h2 className='text-center m-5 fw-bold'>Políticas de GASUT</h2>
            <div className="m-5">
                <h4 className='fw-bold'>Soporte</h4>
                <p className='my-3 mx-5 text-justify'>La aplicación busca estar en constante actualización para mejorar la funcionalidad de esta misma, de esta manera estar pendiente a las sugerencias de los usuarios. Por medio de la información de contacto puede mantener comunicación con nuestro equipo, este según el horario establecido. También cuenta con nuestras redes sociales para mantenerse más informado sobre las novedades y decisiones de nuestra empresa, para nosotros es un gusto atenderle.</p>
                
                <h4 className='fw-bold'>Datos Personales</h4>
                <p className='my-3 mx-5 text-justify'>GASUT tiene la intención de retener los datos personales que recopila a través del Servicio, siempre y cuando sigan siendo útiles para los fines de seguridad que se describen a continuación.  Se realizarán pruebas y análisis periódicos para determinar y confirmar este período de retención. Los datos guardados en las copias de seguridad pueden conservarse más tiempo que los datos originales.</p>
                
                <h4 className='fw-bold'>Propiedad y responsabilidad</h4>
                <p className='my-3 mx-5 text-justify'>Debe tener en cuenta que GASUT no se hace responsable de situaciones externas a la oferta de los productos y servicios. Queda bajo responsabilidad de los usuarios el fin con el que oferta por medio de la aplicación, sin embargo, como parte del trabajo de GASUT se debe de estar realizando un análisis riguroso de los productos o servicios publicados, velando porque estos tengan un carácter legal.</p>
            </div>
          </div>
        </div>
      </div>
    
    <Footer/>
    </>
  )
}
