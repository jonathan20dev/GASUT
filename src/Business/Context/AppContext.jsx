import React, {useReducer, useState} from 'react'
import {UseAppContext} from "./UseAppContext"
import collectionReducer from "./collectionReducer"
import { getUserCollection } from "../../Firebase/getUserDocs"
import { useAuth } from "./AuthContext"

const AppContext = ({children}) => {
    const { user } = useAuth();
    const initialState  = {
        products:[],
        services : [],
    }
    const [state, dispatch] = useReducer(collectionReducer, initialState)
    const [openModal, setOpenModal] = useState(false);

    const getUserProducts = async () => {
        const productos = await getUserCollection(user.reloadUserInfo.localId, "Productos")
        dispatch({
            type:'GET_PRODUCTS',
            payload: productos
        })
    }

    const getUserServices = async () => {
        const servicios = await getUserCollection(user.reloadUserInfo.localId, "Servicios")
        dispatch({
            type:'GET_SERVICES',
            payload: servicios
        })
    }

    const handleSort = () => {
        const productSorted = state.products.sort((a, b) => a.cantidad - b.cantidad)
        dispatch({
            type: 'GET_PRODUCTS',
            payload: productSorted
        })
    };

    const handleNameSort = (arreglo) => {
        switch (arreglo) {
            case "products":
                const sortByNameP = state.products.sort((a, b) => a.nombre > b.nombre ? 1 : b.nombre > a.nombre ? -1 : 0)
                dispatch({
                    type: 'GET_PRODUCTS',
                    payload: sortByNameP
                })
                break;
            case "services":
                const sortByNameS = state.services.sort((a, b) => a.nombre > b.nombre ? 1 : b.nombre > a.nombre ? -1 : 0)
                dispatch({
                    type:'GET_SERVICES',
                    payload: sortByNameS
                })
                break;
            }
        }

    return (
        <UseAppContext.Provider value={{
            products: state.products,
            services: state.services,
            openModal,
            setOpenModal,
            getUserProducts,
            getUserServices,
            handleSort,
            handleNameSort
        }}>
            {children}
        </UseAppContext.Provider>
    );
}

export {AppContext}