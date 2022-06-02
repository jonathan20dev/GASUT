import React, { useState } from "react";
import { UseAppContext } from "../../Business/Context/UseAppContext";
import { ButtonPS } from "../Shared/ButtonPS";
import { updatePoS } from '../../Firebase/updatePoS'

export const ServiceCard = ({ id, name, img, nameOwner, imgOwner, likes, service }) => {
  const { openModal, setOpenModal, searchedServices, setActive } =
    React.useContext(UseAppContext);
  const [cantStars, setCantStars] = useState(likes);
  const [StarsAux, setStarsAux] = useState(false)

  const handleModal = () => {
    const active = searchedServices.find((product) => product.id === id);
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
      nombre: service.nombre,
    }
    if (StarsAux === false) {
      setCantStars(cantStars + 1)
      updatePoS(id, {...servicioReal, likes: cantStars + 1}, 'Servicios')
    } else {
      setCantStars(cantStars - 1)
      updatePoS(id, {...servicioReal, likes: cantStars - 1}, 'Servicios')
    }
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
