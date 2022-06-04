import React, { useState } from 'react';
import { UseAppContext } from '../../Business/Context/UseAppContext';
import { Categories } from '../Shared/Categories'
import { Modal } from '../Shared/Modal';
import { ServiceCard } from './ServiceCard'
import { Header } from "../Shared/Header/Header"
import { Footer } from "../Shared/Footer"
import { NothingFound } from '../Shared/NothingFound';

 const ServiceScreen = () => {
  const { openModal, aServices, user } = React.useContext(UseAppContext);

  return (
    <>
      <Header/>
      <div className='p-4 d-flex justify-content-center'>
        <div className='cards-center gap-4 flex-ps'>
          <Categories page='services' />
          {
            (aServices.length !== 0) 
              ? <div className="grid-service g-4">
              {
                  aServices.filter(p => p.distrito === user.distrito).map( (service, index) => <ServiceCard
                  key={index}
                  id={service.id}
                  name={service.nombre}
                  img={service.img}
                  nameOwner = {service.nombre_propietario}
                  imgOwner = {service.img_propietario}
                  likes = {service.likes}
                  service = {service}
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