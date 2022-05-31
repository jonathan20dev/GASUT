import React from 'react';
import { UseAppContext } from '../../Business/Context/UseAppContext';
import { Categories } from '../Shared/Categories'
import { Modal } from '../Shared/Modal';
import { ServiceCard } from './ServiceCard'
import { Header } from "../Shared/Header/Header"
import { Footer } from "../Shared/Footer"
import { NothingFound } from '../Shared/NothingFound';

 const ServiceScreen = () => {

  const { searchedServices, openModal } = React.useContext(UseAppContext);

  return (
    <>
      <Header/>
      <div className='container-lg mt-5 mb-5 d-flex'>
        <div className='cards-center gap-4 flex-ps'>
          <Categories page='services' />
          {
            (searchedServices.length !== 0) 
              ? <div className="grid-service g-4">
              {
                searchedServices.map( service => <ServiceCard
                  key={service.id}
                  id={service.id}
                  name={service.nombre}
                  img={service.img}
                  nameOwner = {service.nombre_propietario}
                  imgOwner = {service.img_propietario}
                />)
              }
              {
                openModal.modalPS && <Modal page='services' />
              }
            </div>
              : <NothingFound />
          }
        </div>
      </div>
      
      <Footer/>
    </>
  )
}

export { ServiceScreen }