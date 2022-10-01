import React, { useState,useEffect } from "react";
import { UseAppContext } from "../../Business/Context/UseAppContext";
import { ButtonPS } from "../Shared/ButtonPS";
import { updatePoS } from '../../Firebase/updatePoS'

export const ServiceCard = ({ id, name, img, nameOwner, imgOwner, likes, service }) => {
  const { openModal, setOpenModal, setActive, user, aServices, setAServices } = React.useContext(UseAppContext);
  const [cantStars, setCantStars] = useState(likes);
  const [StarsAux, setStarsAux] = useState(service.likers.some(item => item === user.id)?true:false)

  useEffect(() => {
    setStarsAux(service.likers.some(item => item === user.id)?true:false)
    setCantStars(likes)
  }, [aServices])

  const handleModal = () => {
    const active = aServices.find((service) => service.id === id);
    setActive(active);
    setOpenModal({ ...openModal, modalPS: !openModal.modalPS });
  };

  const handleStars = () => {
    const servicioReal = {
      categoria: service.categoria,
      descripcion: service.descripcion,
      id_propietario: service.id_propietario,
      img:service.img,
      likes: service.likes,
      likers: service.likers,
      nombre: service.nombre,
    }
    if (StarsAux === false) {
      setCantStars(cantStars + 1)
      service.likers = [...service.likers, user.id]
      service.likes = cantStars + 1
      updatePoS(id, {...servicioReal, likes: cantStars + 1, likers: [...service.likers, user.id]}, 'Servicios')
    } else {
      setCantStars(cantStars - 1)
      service.likers = [...service.likers.filter(likes => likes !== user.id)]
      service.likes = cantStars - 1
      updatePoS(id, {...servicioReal, likes: cantStars - 1, likers: service.likers.filter(likes => likes !== user.id)}, 'Servicios')
    }
    setAServices([...aServices.map(x => {
      if(x.id === service.id){
        x = service
      }
      return x
    })])
    setStarsAux(!StarsAux)
  };

  return (
    <div>
      <div className="card">
        <img src={img} className="card-img-top p-3" alt="Foto" />
        <div className="card-body">
          <div className="d-flex gap-2">
            <div className="body-container">
              <img src={imgOwner} className="perfil-image" alt="Perfil" />
              <div className="infoService">
                <p className="m-0">{nameOwner}</p>
                <p className="fw-bold">{name}</p>
              </div>
              <div className="rectangle" onClick={handleStars}>
                {StarsAux === false ? 
                <i className="bi bi-star estrella"></i>
                : <i className="bi bi-star-fill estrella" ></i>}
                <div style={{textAlign: 'center', position: 'absolute', top: 27, width: '100%', fontSize: '13px'}}>
                <p  value={cantStars}>{cantStars}</p>
                </div>
                
                
              </div>
            </div>
          </div>
          <div onClick={handleModal}>
            <ButtonPS name="Ver detalles" />
          </div>
        </div>
      </div>
    </div>
  );
};
