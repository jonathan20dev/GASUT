import React from 'react';
import { UseAppContext } from '../../Business/Context/UseAppContext';
import { ButtonPS } from '../Shared/ButtonPS';

export const ProductCard = ({ id, name, img }) => {

  const { openModal, setOpenModal, searchedProducts, setActive } = React.useContext(UseAppContext);

  const handleModal = () => {
    const active = searchedProducts.find( product => product.id === id );
    setActive(active);
    setOpenModal({...openModal, modalPS: !openModal.modalPS});
  }
 
  return (
    <>
      <div className="col">
        <div className="card" >
          <img src={ img } className="card-img-top" alt={ name } />
          <div className="card-body">
            <h5 className="card-title text-center">{ name }</h5>
            <div onClick={handleModal}>
              <ButtonPS name="Ver detalles"  />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
