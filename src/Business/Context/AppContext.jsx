import React from 'react'

const Context = React.createContext();

const UseAppContext = () => {
    const appContext = React.useContext(Context)
    return appContext
}

const AppContext = ({children}) => {
    const [openModal, setOpenModal] = React.useState(false);
    return (
        <Context.Provider value={{
            openModal,
            setOpenModal
        }}>
            {children}
        </Context.Provider>
    );
}

export {AppContext, UseAppContext}