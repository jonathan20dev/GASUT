import React from 'react';
import { Categories } from './Categories';
import { ProductCard } from './ProductCard';

export const ProductScreen = () => {
  return (
    <>
      <Categories page='products' />
      <div className="row row-cols-sm-2 row-cols-lg-3 g-4 mt-5 cards-center">
        {
          new Array(9).fill(1).map( (a, i) => <ProductCard key={i} />)
        }
      </div>
    </>
  )
}
