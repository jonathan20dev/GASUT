import React from 'react';
import { ProductContext } from './Business/ProductContext';
import { ProductScreen } from './components/Products/ProductScreen';

export const GasutApp = () => {
  return (
    <ProductContext>
      <div className='container-lg d-flex'>
        <div className='cards-center gap-4 d-flex'>
          <ProductScreen />
        </div>
      </div>
    </ProductContext>
  )
}
