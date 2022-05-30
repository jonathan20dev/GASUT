import React from 'react';
import { UseAppContext } from '../../Business/Context/UseAppContext';
import { Categories } from '../Shared/Categories'
import { Modal } from '../Shared/Modal';
import { ServiceCard } from './ServiceCard'
import { Header } from "../Shared/Header/Header"
import { Footer } from "../Shared/Footer"

 const ServiceScreen = () => {

  const { searchedServices, openModal } = React.useContext(UseAppContext);

  return (
    <>
    <Header/>
      <Categories page='services' />
      <div className="grid-service g-4 mt-5">
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
      <Footer/>
    </>
  )
}

export { ServiceScreen }