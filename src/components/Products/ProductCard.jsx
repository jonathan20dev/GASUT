import React from 'react';
import { appContext } from '../../Business/AppContext';
import { Button } from '../Shared/Button';

export const ProductCard = ({ id, name, img }) => {

  const { openModal, setOpenModal, searchedProducts, setActive } = React.useContext(appContext);

  const handleModal = () => {
    const active = searchedProducts.find( product => product.id === id );
    setActive(active);
    setOpenModal(!openModal);
  }
 
  return (
    <>
      <div className="col">
        <div className="card" >
          <img src={ img } className="card-img-top" alt={ name } />
          <div className="card-body">
            <h5 className="card-title text-center">{ name }</h5>
            <div onClick={handleModal}>
              <Button name="Ver detalles"  />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
