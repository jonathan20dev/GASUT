import React, { useContext } from 'react'
import { UseAppContext } from '../../../Business/Context/UseAppContext';
import { Button } from '../Button';
import './AcceptAlert.css'

const AcceptAlert = ({mensaje}) => {
    const { openModal, setOpenModal } = useContext(UseAppContext);
    const Aceptar = () => {
        setOpenModal({ ...openModal, modal3: false });
        console.log(openModal)
      };
  return (
    <div className="acceptAlert">
      <div style={{ textAlign: "center" }}>{mensaje}</div>
      <div className="row mt-4 ms-3 me-3">
        <div className="col d-flex justify-content-center">
          <Button
            clase={"btn btn-primary"}
            texto={'Aceptar'}
            accion={Aceptar}
            color={"#395B45"}
          />
        </div>
      </div>
    </div>
  )
}

export {AcceptAlert}