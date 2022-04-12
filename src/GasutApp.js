import React from 'react';
import { Modal } from './components/Modal';
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
