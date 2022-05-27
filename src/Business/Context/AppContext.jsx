import React, {useReducer, useState} from 'react'
import {UseAppContext} from "./UseAppContext"
import collectionReducer from "./collectionReducer"
import { getUserCollection } from "../../Firebase/getUserDocs"
import { useAuth } from "./AuthContext"
import { insertDocument } from '../../Firebase/insertDoc'

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

    const insertDoc = async (coleccion, objeto, tipo) => {
        const array = (coleccion === "Productos")? state.products : state.services
        await insertDocument(coleccion, objeto)
        const arregloFull = [...array, objeto]
        dispatch({
            type:tipo,
            payload: arregloFull
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
            handleSort,
            insertDoc
        }}>
            {children}
        </UseAppContext.Provider>
    );
}

export {AppContext}