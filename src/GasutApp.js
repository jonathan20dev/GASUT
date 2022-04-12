import React from 'react';
import { ProductScreen } from './components/ProductScreen';
import { ServiceScreen } from './components/ServiceScreen';

export const GasutApp = () => {
  return (
    <>
      <div className='container-lg gap-5 d-flex'>
      <ServiceScreen />
      </div>
    </>
  )
}
