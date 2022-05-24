import React, { useEffect, useState } from "react";
import { readServices } from "../Firebase/readDoc";

export const serviceContext = React.createContext();

export function ServiceContext({ children }) {

  const [arrayServices, setArrayServices] = useState([]);
  const [searchValue, setSearchValue] = React.useState('');
  const [filter, setFilter] = React.useState('todo');
  const [openModal, setOpenModal] = React.useState(false);
  const [active, setActive] = React.useState(null);

  useEffect(() => {
    
    async function fetchServices() {
      const getServices = await readServices();
      setArrayServices(getServices);
    }
    fetchServices();
  }, []);

  let searchedServices = [];

  if (!searchValue.length >= 1) {
    searchedServices = arrayServices;
  } else {
    searchedServices = arrayServices.filter(service => {
      const serviceName = service.nombre.toLowerCase();
      const searchName = searchValue.toLowerCase();
      return serviceName.includes(searchName);
    });
  }

  if (filter !== 'todo') {
    searchedServices = searchedServices.filter(service => filter === service.categoria);
  }

  return (
    <serviceContext.Provider
      value={{
        arrayServices, 
        setArrayServices,
        searchedServices,
        searchValue, 
        setSearchValue,
        filter, 
        setFilter,
        openModal,
        setOpenModal,
        active, 
        setActive
      }}
      >
      {children}
    </serviceContext.Provider>
  )
}