import React, {useReducer, useState, useEffect} from 'react'
import {UseAppContext} from "./UseAppContext"
import collectionReducer from "./collectionReducer"
import { getUserCollection } from "../../Firebase/getUserDocs"
import { useAuth } from "./AuthContext"
import { insertDocument } from '../../Firebase/insertDoc'
import { deleteDocument } from "../../Firebase/deleteDoc"
import { getUser } from '../../Firebase/getUser'
import { updatePoS } from '../../Firebase/updatePoS'

const AppContext = ({children}) => {
    const { user } = useAuth();
    const initialState  = {
        products:[],
        services : [],
    }
    const [state, dispatch] = useReducer(collectionReducer, initialState)
    const [openModal, setOpenModal] = useState({modal1:false, modal2:false, modal3: false});

    const extractProfile = async () => {
        const usuario = await getUser(user.reloadUserInfo.localId);
        return usuario
    };

    const getUserDocument = async (coleccion) => {
        const docu = await getUserCollection(user.reloadUserInfo.localId, coleccion)
        dispatch({
            type: (coleccion === "Productos")?'GET_PRODUCTS':'GET_SERVICES',
            payload: docu
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

    const updateDoc = async (coleccion, objeto) => {
        const array = (coleccion === "Productos")? state.products : state.services
        console.log(objeto)
        await updatePoS(objeto.id, objeto, coleccion)
        const arregloFull = [...array.filter(x => x.id !==objeto.id), objeto]
        dispatch({
            type:(coleccion === "Productos")? 'GET_PRODUCTS' : 'GET_SERVICES',
            payload: arregloFull
        })
    }

    const deleteDoc = async (coleccion, objeto) => {
        const array = (coleccion === "Productos")? state.products : state.services
        await deleteDocument(coleccion, objeto.id) //Comenten esta linea si no quieren eliminar de la bd, pero si del array
        const arregloAux = array.filter(el => el.id !== objeto.id)
        dispatch({
            type:(coleccion === "Productos")? 'GET_PRODUCTS' : 'GET_SERVICES',
            payload: arregloAux
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
            getUserDocument,
            handleSort,
            insertDoc,
            deleteDoc,
            user,
            extractProfile,
            updateDoc,
        }}>
            {children}
        </UseAppContext.Provider>
    );
}

export {AppContext}