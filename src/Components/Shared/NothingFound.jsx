import React from 'react'
const icons = require.context('../../Assets/icons', true);

export const NothingFound = () => {
  return (
    <div className="alert alert-warning d-flex align-items-center he" role="alert">
     <img className='icon me-1' src={icons("./alerta.svg")} alt="alerta"/>
      <div>
        La búsqueda no ha devuelto ningún resultado
      </div>
    </div>
  )
}
