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
    const { user, setUser } = useAuth();
    const initialState  = {
        products:[],
        services : [],
    }
    const [userProductSearch, setUserProductSearch ] = useState([])
    const [userServiceSearch, setUserServiceSearch ] = useState([])

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
    }, [state.products]);

    useEffect(() => {
        async function fetchServices() {
        const getServices = await readServices();
        setArrayServices(getServices);
    }
    fetchServices();
    }, [state.services]);

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
        coleccion === "Productos"? setUserProductSearch(docu) : setUserServiceSearch(docu)
        dispatch({
            type: (coleccion === "Productos")?'GET_PRODUCTS':'GET_SERVICES',
            payload: docu
        })
    }

    const insertDoc = async (coleccion, objeto) => {
        const array = (coleccion === "Productos")? state.products : state.services
        await insertDocument(coleccion, objeto)
        const arregloFull = [...array, objeto]
        coleccion === "Productos"? setUserProductSearch(arregloFull) : setUserServiceSearch(arregloFull)
        dispatch({
            type:(coleccion === "Productos")? 'INSERT_PRODUCTS' : 'INSERT_SERVICES',
            payload: arregloFull
        })
    }

    const updateDoc = async (coleccion, objeto) => {
        const array = (coleccion === "Productos")? state.products : state.services
        await updatePoS(objeto.id, objeto, coleccion)
        const arregloModificado = [...array.map(x => {
            if(x.id === objeto.id){
                x = objeto
            }
            return x
        })]
        coleccion === "Productos"? setUserProductSearch(arregloModificado) : setUserServiceSearch(arregloModificado)
        dispatch({
            type:(coleccion === "Productos")? 'GET_PRODUCTS' : 'GET_SERVICES',
            payload: arregloModificado
        })
    }

    const updateUser = async () => {
        const usuario = await getUser(user.id || user.reloadUserInfo.localId);
        const arregloModificadoP = arrayProducts.map(product => {
            if(usuario.id === product.id_propietario){
                product.nombre_propietario = usuario.nombre
                product.telefono = usuario.telefono
                product.correo = usuario.correo
                product.ubicacion = `${!!usuario.provincia ? usuario.provincia : "" } ${!!usuario.canton ? usuario.canton : ""} ${!!usuario.distrito ? usuario.distrito : ""}`
            }
            return product
        })
        setArrayProducts(arregloModificadoP);
        const arregloModificadoS = arrayServices.map(service => {
            if(user.id === service.id_propietario){
                service.nombre_propietario = usuario.nombre
                service.telefono = usuario.telefono
                service.correo = usuario.correo
                service.img_propietario = usuario.img
                service.ubicacion = `${!!usuario.provincia ? usuario.provincia : "" } ${!!usuario.canton ? usuario.canton : ""} ${!!usuario.distrito ? usuario.distrito : ""}`
            }
            return service
        })
        setArrayServices(arregloModificadoS);
    }

    const deleteDoc = async (coleccion, objeto) => {
        const array = (coleccion === "Productos")? state.products : state.services
        deleteDocument(coleccion, objeto.id) //Comenten esta linea si no quieren eliminar de la bd, pero si del array
        const arregloAux = array.filter(el => el.id !== objeto.id)
        coleccion === "Productos"? setUserProductSearch(arregloAux) : setUserServiceSearch(arregloAux)
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

            setUserServiceSearch,
            userServiceSearch,
            setUserProductSearch,
            userProductSearch,
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
            setUser,
            updateDoc,
            updateUser
        }}>
            {children}
        </UseAppContext.Provider>
    );
}

export {AppContext}