import React from 'react';
import { NavItem } from "./NavItem";
import { Navbar } from "./NavBar";
import { ReactComponent as FilterIcon } from '../../assets/icons/filtro.svg'
import './dropdown.css';
import { DropdownMenuProduct } from '../Products/DropdownMenuProduct';
import { DropdownMenuService } from '../Services/DropdownMenuService';

export const Categories = ({ page }) => {
  return (
    <>
      <Navbar>
        <NavItem icon={<FilterIcon/>}>
          {
            page === 'products'
              ? <DropdownMenuProduct />
              : <DropdownMenuService />
          }
        </NavItem>
      </Navbar>
      {/* <div className="col-4 mt-3 categories p-4 rounded">
        <form className='input-wrapper'>
          <input 
            type="text"
            className="form-control"
            id="search"
            placeholder="Buscar"
            value={searchValue} 
            onChange={onSearchValueChange}
          />
          <img className="input-icon icon" src={icons('./buscar.svg')} alt="Buscar" />
        </form>
        <h5 className='text-uppercase fw-bold mt-5'>Ubicación</h5>
        <p>{(page === 'products' ? 'Productos' : 'Servicios' )} cercanos a Aguas Zarcas</p>
        <h5 className='text-uppercase fw-bold mt-5 mb-3'>Categorías</h5>
        {
          items.map( ({ id, name, image }) => <Category key={ id } name={ name } image={ image } />)
        }
      </div> */}
    </>
  )
}
