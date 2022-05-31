import React from 'react';
import { UseAppContext } from '../../Business/Context/UseAppContext';
import { Categories } from '../Shared/Categories';
import { Modal } from '../Shared/Modal';
import { ProductCard } from './ProductCard';
import { Header } from "../Shared/Header/Header"
import { Footer } from "../Shared/Footer"
import { NothingFound } from '../Shared/NothingFound';
import { useAuth } from "../../Business/Context/AuthContext"

const ProductScreen = () => {
  const { user } = useAuth()
  const { searchedProducts, openModal } = React.useContext(UseAppContext);

  return (
    <>
      <Header/>
      <div className='p-4 d-flex justify-content-center' >
        <div className='cards-center gap-4 flex-ps justify-content-center' >
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
                openModal.modalPS && <Modal page='products' />
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