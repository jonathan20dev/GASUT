import React from 'react';
import { appContext } from '../../Business/AppContext';
import { categories } from '../../data/categories';
import { CategoryProduct } from './CategoryProduct';

const icons = require.context('../../assets/icons', true);

export const DropdownMenuProduct = () => {

    const { searchProduct, setSearchProducts } = React.useContext(appContext);

    const onSearchValueChange = (event) => {
        setSearchProducts(event.target.value);
    };

    const items = categories.filter(item => item.page === 'products');

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
                        value={searchProduct} 
                        onChange={onSearchValueChange}
                    />
                    <img className="input-icon icon" src={icons('./buscar.svg')} alt="Buscar" />
                    </form>
                    <h5 className='text-uppercase fw-bold mt-5'>Ubicación</h5>
                    <p>Productos cercanos a Aguas Zarcas</p>
                    <h5 className='text-uppercase fw-bold mt-5 mb-3'>Categorías</h5>
                    {
                        items.map( ({ id, name, image }) => <CategoryProduct key={ id } name={ name } image={ image } />)
                    }
                </div>
            </div>
        </div>
    );
}

