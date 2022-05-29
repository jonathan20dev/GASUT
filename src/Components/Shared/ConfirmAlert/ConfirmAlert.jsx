import React, { useContext } from "react";
import { UseAppContext } from "../../../Business/Context/UseAppContext";
import { Button } from "../Button";
import "./ConfirmAlert.css";

const ConfirmAlert = ({ mensaje, op1, op2, accion, objeto }) => {
  const { openModal, setOpenModal } = useContext(UseAppContext);
  const Accept = () => {
    accion(objeto.categoria, objeto.objeto);
  };

  const Cancel = () => {
    setOpenModal({ ...openModal, modal3: false });
  };

  return (
    <div className="confirmAlert">
      <div style={{ textAlign: "center" }}>{mensaje}</div>
      <div className="row mt-4 ms-3 me-3">
        <div className="col d-flex justify-content-center">
          <Button
            clase={"btn btn-primary"}
            texto={op1}
            accion={Cancel}
            color={"#395B45"}
          />
        </div>
        <div className="col d-flex justify-content-center">
          <Button
            clase={"btn btn-primary"}
            texto={op2}
            accion={Accept}
            color={"#9E1616"}
          />
        </div>
      </div>
    </div>
  );
};

export { ConfirmAlert };
