import React from 'react';
import { Button } from './Button';

const images = require.context('../assets/images', true);

export const ProductCard = () => {
  return (
    <>
      <div className="col">
        <div className="card">
          <img src={images('./planta.png')} className="card-img-top" alt="Planta" />
          <div className="card-body">
            <h5 className="card-title text-center">Cactus</h5>
            <Button name="Ver detalles" />
          </div>
        </div>
      </div>
    </>
  )
}
