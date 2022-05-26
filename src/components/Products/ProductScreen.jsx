import React from 'react';
import { appContext } from '../../Business/AppContext';
import { Categories } from '../Shared/Categories';
import { Modal } from '../Shared/Modal';
import { ProductCard } from './ProductCard';

export const ProductScreen = () => {

  const { searchedProducts, openModal } = React.useContext(appContext);

  return (
    <>
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
          openModal && <Modal page='products' />
        }
      </div>
    </>
  )
}
