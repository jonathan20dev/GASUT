import React from 'react';

const icons = require.context('../assets/icons', true);

export const Category = ({ name, image}) => {
  return (
    <div className='d-flex'>
      <img className='icon me-1' src={icons(`./${image}.svg`)} alt={ name } />
      <p>{ name }</p>
    </div>
  )
}
