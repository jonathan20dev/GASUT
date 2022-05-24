import React from 'react';
import { categories } from '../../data/categories';
import { Category } from './Category';
import { serviceContext } from '../../Business/ServiceContext';
import { productContext } from '../../Business/ProductContext';
const icons = require.context('../../assets/icons', true);

export const DropdownMenu=({ page }) => {
    let context;
    if(page === 'services') {
        context = serviceContext;
    } else {
        context = productContext;
    }

    const { searchValue, setSearchValue } = React.useContext(context);

    const onSearchValueChange = (event) => {
        console.log(event.target.value);
        setSearchValue(event.target.value);
    };

    const items = categories.filter(item => item.page === page);

    return (
        <div className="dropdown">
            <div
                
                timeout={500}
                className="menu-primary col categories p-4 rounded-3"
                >
                <div className="menu">
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
                    items.map( ({ id, name, image, page }) => <Category key={ id } name={ name } image={ image } page={ page } />)
                    }
                </div>
            </div>
        </div>
    );
}

