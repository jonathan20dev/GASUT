import React from 'react';
import { appContext } from '../../Business/AppContext';
import { Categories } from '../Shared/Categories'
import { Modal } from '../Shared/Modal';
import { ServiceCard } from './ServiceCard'

export const ServiceScreen = () => {

  const { searchedServices, openModal } = React.useContext(appContext);

  return (
    <>
      <Categories page='services' />
      <div className="grid-service g-4 mt-5">
        {
          searchedServices.map( service => <ServiceCard
            key={service.id}
            id={service.id}
            name={service.nombre}
            img={service.img}
            nameOwner = {service.nombre_propietario}
          />)
        }
        {
          openModal && <Modal page='services' />
        }
      </div>
    </>
  )
}
