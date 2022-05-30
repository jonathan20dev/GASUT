import React from 'react';
import { appContext } from '../../Business/AppContext';
import { Button } from '../Shared/Button';

export const ServiceCard = ({ id, name, img, nameOwner, imgOwner }) => {

  const { openModal, setOpenModal, searchedServices, setActive } = React.useContext(appContext);

  const handleModal = () => {
    const active = searchedServices.find( product => product.id === id );
    setActive(active);
    setOpenModal(!openModal);
  }

  return (
    <div>
      <div className="card">
        <img src={ img } className="card-img-top p-3" alt="Foto" />
        <div className="card-body">
          <div className='d-flex gap-2'>
            <img src={ imgOwner } className="perfil-image" alt="Perfil" />
            <div>
              <p className='m-0'>{ nameOwner }</p>
              <p className='fw-bold'>{ name }</p>
            </div>
          </div>
          <div onClick={handleModal}>
            <Button name="Ver detalles"  />
          </div>
        </div>
      </div>
    </div>
  )
}
