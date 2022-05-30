import React from 'react'
import { Header } from "../Shared/Header/Header"
import { Footer } from "../Shared/Footer"

export const Contact = () => {
  return (
      <>
      <Header/>
    <div className="mt-5 text-center cards-center">
        <h2 className='fw-bold'>Contáctanos</h2>
        <div className='row justify-content-evenly row-cols-sm-1 row-cols-md-3 row-cols-lg-3 g-4 m-5'>
            <div className='px-5'>
                <h5>VISITANOS</h5>
                <p className='mb-0'>San Carlos, de la inglesia</p>
                <p className='mb-0'>100 metros norte</p>

            </div>
            <div className='px-5'>
                <h5>HORARIO</h5>
                <p className='mb-1'>Lun - Vier: 7:00 - 3:00</p>
                <p className='mb-1'>Sábados: 9:00 - 3:00</p>

            </div>
            <div>
                <h5>SERVICIO AL CLIENTE</h5>
                <p className='mb-1'>2465-1212</p>
                <p className='mb-1'>2465-1313</p>
                <p className='mb-1'>gasut@web.com</p>
                
            </div> 
        </div>    
    </div>
    <Footer/>
    </>
  )
}


