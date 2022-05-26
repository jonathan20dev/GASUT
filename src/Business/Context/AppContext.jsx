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

    const handleSort = (nombre,arreglo, propiedad, s) => {
        const sortByNameP = arreglo.sort((a, b) => (s===">")? (a[propiedad] > b[propiedad] ? 1 : b[propiedad] > a[propiedad] ? -1 : 0) 
        :(a[propiedad] < b[propiedad] ? 1 : b[propiedad] < a[propiedad] ? -1 : 0))
        dispatch({
            type: (nombre === "products")? 'GET_PRODUCTS' : 'GET_SERVICES',
            payload: sortByNameP
        })
    }

    return (
        <UseAppContext.Provider value={{
            products: state.products,
            services: state.services,
            openModal,
            setOpenModal,
            getUserProducts,
            getUserServices,
            handleSort
        }}>
            {children}
        </UseAppContext.Provider>
    );
}

export {AppContext}