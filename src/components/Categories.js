import React from 'react';

const icons = require.context('../assets/icons', true);

export const Categories = () => {
  return (
    <>
      <div className="col-4 mt-3 categories p-4 rounded">
        <form className='input-wrapper'>
          <input 
            type="text"
            className="form-control"
            id="search"
            placeholder="Buscar"
          />
          <img className="input-icon icon" src={icons('./buscar.svg')} alt="Buscar" />
        </form>
        <h5 className='text-uppercase fw-bold mt-5'>Ubicación</h5>
        <p>Servicios cercanos a Aguas Zarcas</p>
        <h5 className='text-uppercase fw-bold mt-5 mb-3'>Categorías</h5>
        <div className='d-flex'>
          <img className='icon me-1' src={icons('./deportivos.svg')} alt="" />
          <p>Deportivos</p>
        </div>
        <div className='d-flex'>
          <img className='icon me-1' src={icons('./electronicos.svg')} alt="" />
          <p>Electrónicos</p>
        </div>
        <div className='d-flex'>
          <img className='icon me-1' src={icons('./hogar.svg')} alt="" />
          <p>Hogar</p>
        </div>
        <div className='d-flex'>
          <img className='icon me-1' src={icons('./jardineria.svg')} alt="" />
          <p>Jardinería</p>
        </div>
        <div className='d-flex'>
          <img className='icon me-1' src={icons('./prendaVestir.svg')} alt="" />
          <p>Prendas de vestir</p>
        </div>
        <div className='d-flex'>
          <img className='icon me-1' src={icons('./otros.svg')} alt="" />
          <p>Otros</p>
        </div>
      </div>
    </>
  )
}
