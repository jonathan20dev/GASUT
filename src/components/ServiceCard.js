import React from 'react';
import { Button } from './Button';

export const ServiceCard = () => {

  const images = require.context('../assets/images', true);

  return (
    <div className="col">
        <div className="card">
          <img src={images('./foto.png')} className="card-img-top p-3" alt="Foto" />
          <div className="card-body">
            <div className='d-flex gap-2'>
              <img src={images('./perfil.png')} className="perfil-image" alt="Perfil" />
              <div>
                <p className='m-0'>Marco Serrano</p>
                <p className='fw-bold'>Mecánico</p>
              </div>
            </div>
            <Button name="Contactar" />
          </div>
        </div>
      </div>
  )
}
