import React from 'react';
import { UseAppContext } from '../../Business/Context/UseAppContext';
import { Categories } from '../Shared/Categories';
import { Modal } from '../Shared/Modal';
import { ProductCard } from './ProductCard';
import { Header } from "../Shared/Header/Header"
import { Footer } from "../Shared/Footer"

const ProductScreen = () => {

  const { searchedProducts, openModal } = React.useContext(UseAppContext);

  return (
    <>
    <Header/>
      <Categories page='products' />
      <div className="grid-product g-4 mt-5">
        {
          searchedProducts.map( product => <ProductCard
            key={product.id}
            id={product.id}
            name={product.nombre}
            img={product.img}
          />)
        }
        {
          openModal.modalPS && <Modal page='products' />
        }
      </div>
      <Footer/>
    </>
  )
}

export { ProductScreen }