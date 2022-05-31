import React from 'react';
import { UseAppContext } from '../../Business/Context/UseAppContext';
import { Categories } from '../Shared/Categories';
import { Modal } from '../Shared/Modal';
import { ProductCard } from './ProductCard';
import { Header } from "../Shared/Header/Header"
import { Footer } from "../Shared/Footer"
import { NothingFound } from '../Shared/NothingFound';

const ProductScreen = () => {

  const { searchedProducts, openModal } = React.useContext(UseAppContext);

  return (
    <>
      <Header/>
      <div className='container-lg mt-5 mb-5 d-flex'>
        <div className='cards-center gap-4 flex-ps'>
          <Categories page='products' />
          {
            (searchedProducts.length !== 0) 
              ? <div className="grid-service g-4">
              {
                searchedProducts.map( service => <ProductCard
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

export { ProductScreen }