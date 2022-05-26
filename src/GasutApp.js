import React from 'react';
import { AppContext } from './Business/AppContext';
import { ProductScreen } from './components/Products/ProductScreen';

export const GasutApp = () => {
  return (
    <AppContext>
      <div className='container-lg d-flex'>
        <div className='cards-center gap-4 d-flex'>
          <ProductScreen />
        </div>
      </div>
    </AppContext>
  )
}
