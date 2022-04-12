import React from 'react'
import { Categories } from './Categories'
import { ServiceCard } from './ServiceCard'

export const ServiceScreen = () => {
  return (
    <>
      <Categories page='services' />
      <div className="row row-cols-md-2 g-4 mt-5 cards-center">
        {
          new Array(9).fill(1).map( (a, i) => <ServiceCard key={i} />)
        }
      </div>
    </>
  )
}
