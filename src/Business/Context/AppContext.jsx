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
    const { user, setUser,inicio } = useAuth();
    const initialState  = {
        products:[],
        services : [],
    }
    const [userProductSearch, setUserProductSearch ] = useState([])
    const [userServiceSearch, setUserServiceSearch ] = useState([])

    const [state, dispatch] = useReducer(collectionReducer, initialState)
    const [openModal, setOpenModal] = useState({modal1:false, modal2:false, modal3: false, modalPS: false});

    const [arrayProducts, setArrayProducts] = useState([]);
    const [aProducts, setAProducts] = useState([]);
    const [filterProducts, setFilterProducts] = React.useState('todo');
    
    const [arrayServices, setArrayServices] = useState([]);
    const [aServices, setAServices] = useState([]);
    const [filterServices, setFilterServices] = React.useState('todo');

    const [active, setActive] = React.useState(null);

    useEffect(() => {
        if(user!==null){
            async function fetchGeneral() {
                const getProducts = await readProducts();
                const getServices = await readServices();

                setArrayProducts(getProducts);
                setAProducts(getProducts)

                setArrayServices(getServices);
                setAServices(getServices)}
            fetchGeneral();
        }
        
    }, [inicio]);

    useEffect(() => {
        if(user !== null){
            async function fetchInternal() {
                const ds = await getUserCollection(user.id, "Servicios")
                const dp = await getUserCollection(user.id, "Productos")
                
                setUserProductSearch(dp)
                setUserServiceSearch(ds)

                dispatch({
                        type: 'GET_PRODUCTS',
                        payload: dp
                    })

                dispatch({
                            type: 'GET_SERVICES',
                            payload: ds 
                        })}
            fetchInternal();
        }
    }, [inicio]);

    
   
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
        await updatePoS(objeto.id, objeto, coleccion)
        const arregloFull = [...array, objeto]
        coleccion === "Productos"? setUserProductSearch(arregloFull) : setUserServiceSearch(arregloFull)
        dispatch({
            type:(coleccion === "Productos")? 'INSERT_PRODUCTS' : 'INSERT_SERVICES',
            payload: arregloFull
        })
        if(coleccion === "Servicios"){
            const objS = {...objeto, correo: user.correo, id_propietario: user.id, img_propietario: user.img, nombre_propietario: user.nombre, telefono: user.telefono, ubicacion: `${user.provincia} ${user.canton} ${user.distrito}`}
            setArrayServices([...arrayServices, objS])
            setAServices([...aServices, objS])
        }else{
            const objS = {...objeto, correo: user.correo, id_propietario: user.id,nombre_propietario: user.nombre, telefono: user.telefono, ubicacion: `${user.provincia} ${user.canton} ${user.distrito}`}
            setArrayProducts([...arrayProducts, objS]);
            setAProducts([...aProducts, objS])
        }
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
        if(coleccion === "Servicios"){
            const objS = {...objeto, correo: user.correo, id_propietario: user.id, img_propietario: user.img, nombre_propietario: user.nombre, telefono: user.telefono, ubicacion: `${user.provincia} ${user.canton} ${user.distrito}`}
            setArrayServices([...arrayServices.map(x => {
                if(x.id === objS.id){
                    x = objS
                }
                return x
            })])
            setAServices([...aServices.map(x => {
                if(x.id === objS.id){
                    x = objS
                }
                return x
            })])
        }else{
            const objS = {...objeto, correo: user.correo, id_propietario: user.id,nombre_propietario: user.nombre, telefono: user.telefono, ubicacion: `${user.provincia} ${user.canton} ${user.distrito}`}
            setArrayProducts([...arrayProducts.map(x => {
                if(x.id === objS.id){
                    x = objS
                }
                return x
            })]);
            setAProducts([...aProducts.map(x => {
                if(x.id === objS.id){
                    x = objS
                }
                return x
            })])
        }
    }

    const updateUser = async () => {
        const usuario = await getUser(user.id);
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
        if(coleccion === "Servicios"){
            setArrayServices([...arrayServices.filter(el => el.id !== objeto.id)])
            setAServices([...aServices.filter(el => el.id !== objeto.id)])
        }else{
            setArrayProducts([...arrayProducts.filter(el => el.id !== objeto.id)]);
            setAProducts([...aProducts.filter(el => el.id !== objeto.id)])
        }
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
            arrayServices,
            setArrayServices,
            filterProducts, 
            setFilterProducts,
            filterServices, 
            setFilterServices,
            active, 
            setActive,
            tam, setTam,

            aServices,
            setAServices,
            setAProducts,
            aProducts,

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
            updateUser,
            inicio
        }}>
            {children}
        </UseAppContext.Provider>
    );
}

export {AppContext}