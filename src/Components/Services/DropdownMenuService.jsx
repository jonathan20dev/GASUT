import React from 'react';
import { categories } from '../../data/categories';
import { CategoryService } from './CategoryService';
import { UseAppContext } from '../../Business/Context/UseAppContext';

const icons = require.context('../../Assets/icons', true);

export const DropdownMenuService = () => {

    const { searchServices, setSearchServices, active, user } = React.useContext(UseAppContext);
    
    const onSearchValueChange = (event) => {
        setSearchServices(event.target.value);
    };

    const items = categories.filter(item => item.page === 'services');

    return (
        <div className="dropdown mb-3">
            <div
                
                timeout={500}
                className="menu-primary col categories p-4 rounded-3"
                >
                <div className="menu">
                    <form className='input-wrapper'>
                    <input 
                        type="text"
                        style={{padding: "5px 35px"}}
                        className="form-control"
                        id="search"
                        placeholder="Buscar"
                        value={searchServices} 
                        onChange={onSearchValueChange}
                    />
                    <img className="input-icon icon" src={icons('./buscar.svg')} alt="Buscar" />
                    </form>
                    <h5 className='text-uppercase fw-bold mt-5'>Ubicación</h5>
                    <p>Servicios cercanos a {(user.distrito !== "")? user.distrito: user.provincia}</p>
                    <h5 className='text-uppercase fw-bold mt-5 mb-3'>Categorías</h5>
                    {
                        items.map( ({ id, name, image }) => <CategoryService key={ id } name={ name } image={ image } />)
                    }
                </div>
            </div>
        </div>
    );
}

