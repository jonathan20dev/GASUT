import React from 'react';
import { UseAppContext } from '../../Business/Context/UseAppContext';
import { categories } from '../../data/categories';
import { CategoryProduct } from './CategoryProduct';
import { useAuth } from '../../Business/Context/AuthContext';

const icons = require.context('../../Assets/icons', true);

export const DropdownMenuProduct = () => {
    const { user } = useAuth()
    const { searchProduct, setSearchProducts } = React.useContext(UseAppContext);

    const onSearchValueChange = (event) => {
        setSearchProducts(event.target.value);
    };

    const items = categories.filter(item => item.page === 'products');

    return (
        <div className="dropdown mb-3">
            <div
                
                timeout={500}
                className="menu-primary col categories p-4 rounded-3"
                >
                <div className="menu-merge">
                    <form className='input-wrapper'>
                    <input 
                        type="text"
                        style={{padding: "5px 35px"}}
                        className="form-control"
                        id="search"
                        placeholder="Buscar"
                        value={searchProduct} 
                        onChange={onSearchValueChange}
                    />
                    <img className="input-icon icon" src={icons('./buscar.svg')} alt="Buscar" />
                    </form>
                    <h5 className='text-uppercase fw-bold mt-5'>Ubicación</h5>
                    <p>Productos cercanos a {user.distrito}</p>
                    <h5 className='text-uppercase fw-bold mt-5 mb-3'>Categorías</h5>
                    {
                        items.map( ({ id, name, image }) => <CategoryProduct key={ id } name={ name } image={ image } />)
                    }
                </div>
            </div>
        </div>
    );
}

