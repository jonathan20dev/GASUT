import React, {useReducer, useState, useEffect} from 'react'
import {UseAppContext} from "./UseAppContext"
import collectionReducer from "./collectionReducer"
import { getUserCollection } from "../../Firebase/getUserDocs"
import { useAuth } from "./AuthContext"
import { insertDocument } from '../../Firebase/insertDoc'
import { deleteDocument } from "../../Firebase/deleteDoc"
import { updatePoS } from '../../Firebase/updatePoS'
import { readProducts, readServices} from "../../Firebase/readDoc";
import { getUser } from "../../Firebase/getUser"

const AppContext = ({tam, setTam, children}) => {
    const { user } = useAuth();
    const initialState  = {
        products:[],
        services : [],
    }
    const [state, dispatch] = useReducer(collectionReducer, initialState)
    const [openModal, setOpenModal] = useState({modal1:false, modal2:false, modal3: false, modalPS: false});

    const [arrayProducts, setArrayProducts] = useState([]);
    const [searchProducts, setSearchProducts] = React.useState('');
    const [arrayServices, setArrayServices] = useState([]);
    const [searchServices, setSearchServices] = React.useState('');
    const [filterProducts, setFilterProducts] = React.useState('todo');
    const [filterServices, setFilterServices] = React.useState('todo');
    const [active, setActive] = React.useState(null);

    useEffect(() => {
        async function fetchProducts() {
        const getProducts = await readProducts();
        setArrayProducts(getProducts);
    }
    fetchProducts();

    async function fetchServices() {
        const getServices = await readServices();
        setArrayServices(getServices);
    }
    fetchServices();
    }, []);

    
    let searchedProducts = [];

    if (!searchProducts.length >= 1) {
      searchedProducts = arrayProducts;
    } else {
      searchedProducts = arrayProducts.filter(product => {
        const productName = product.nombre.toLowerCase();
        const searchName = searchProducts.toLowerCase();
        return productName.includes(searchName);
      });
    }
  
    let searchedServices = [];
  
    if (!searchServices.length >= 1) {
      searchedServices = arrayServices;
    } else {
      searchedServices = arrayServices.filter(service => {
        const serviceName = service.nombre.toLowerCase();
        const searchName = searchServices.toLowerCase();
        return serviceName.includes(searchName);
      });
    }
  
    if (filterProducts !== 'todo') {
      searchedProducts = searchedProducts.filter(product => filterProducts === product.categoria.toLowerCase());
    }
  
    if (filterServices !== 'todo') {
      searchedServices = searchedServices.filter(service => filterServices === service.categoria.toLowerCase());
    }

    const extractProfile = async () => {
        const usuario = await getUser(user.id || user.reloadUserInfo.localId);
        return usuario
    };

    const getUserDocument = async (coleccion) => {
        const docu = await getUserCollection(user.id || user.reloadUserInfo.localId, coleccion)
        dispatch({
            type: (coleccion === "Productos")?'GET_PRODUCTS':'GET_SERVICES',
            payload: docu
        })
    }

    const insertDoc = async (coleccion, objeto) => {
        const array = (coleccion === "Productos")? state.products : state.services
        await insertDocument(coleccion, objeto)
        const arregloFull = [...array, objeto]
        dispatch({
            type:(coleccion === "Productos")? 'INSERT_PRODUCTS' : 'INSERT_SERVICES',
            payload: arregloFull
        })
    }

    const updateDoc = async (coleccion, objeto) => {
        const array = (coleccion === "Productos")? state.products : state.services
        await updatePoS(objeto.id, objeto, coleccion)
        const arregloFull = [...array.filter(x => x.id !==objeto.id), objeto]
        dispatch({
            type:(coleccion === "Productos")? 'GET_PRODUCTS' : 'GET_SERVICES',
            payload: arregloFull
        })
    }

    const deleteDoc = async (coleccion, objeto) => {
        const array = (coleccion === "Productos")? state.products : state.services
        //deleteDocument(coleccion, objeto.id) //Comenten esta linea si no quieren eliminar de la bd, pero si del array
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
            arrayProducts,
            setArrayProducts,
            searchedProducts,
            searchProducts, 
            setSearchProducts,
            arrayServices,
            setArrayServices,
            searchedServices,
            searchServices, 
            setSearchServices,
            filterProducts, 
            setFilterProducts,
            filterServices, 
            setFilterServices,
            active, 
            setActive,
            tam, setTam,

            extractProfile,
            products: state.products,
            services: state.services,
            openModal,
            setOpenModal,
            getUserDocument,
            handleSort,
            insertDoc,
            deleteDoc,
            user,
            updateDoc,
        }}>
            {children}
        </UseAppContext.Provider>
    );
}

export {AppContext}