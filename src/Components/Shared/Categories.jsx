import React from 'react';
import { NavItem } from "./NavItem";
import { Navbar } from "./NavBar";
import { ReactComponent as FilterIcon } from '../../Assets/icons/filtro.svg'
import './dropdown.css';
import { DropdownMenuProduct } from '../Products/DropdownMenuProduct';
import { DropdownMenuService } from '../Services/DropdownMenuService';

export const Categories = ({ page }) => {
  return (
    <>
      <Navbar>
          {
            page === 'products'
              ? <DropdownMenuProduct />
              : <DropdownMenuService />
          }
      </Navbar>
    </>
  )
}
