import React from "react";
import "./NewProductForm.css";
import { Button } from "../../Shared/Button.jsx";
import { UseAppContext } from "../../../Business/Context/AppContext";

function NewProductForm() {
  const { setOpenModal } = UseAppContext();

  const onCancel = () => {
    setOpenModal(false);
    console.log();
  };

  const onSubmit = (event) => {
    event.preventDefault();
    setOpenModal(false);
  };

  return (
    <form onSubmit={onSubmit}>
      <table>
        <tbody>
          <tr>
            <td className="celda" >
              <div
                style={{
                    backgroundColor: "#F1F2F1",
                    border: "2px dashed #696C63",
                    borderRadius: "5px",
                    width: "100%",
                    height: '100%'
                  }}
              >
                <p style={{ cursor: "pointer" }}>Añadir imagen</p>
              </div>
            </td>
            <td className="celda">
              <p>Producto</p>
              <p>Tipo</p>
              <select
                class="form-select form-select-sm"
                aria-label=".form-select-sm example"
              >
                <option selected>Open this select menu</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </td>
          </tr>
          <tr>
            <td className="celda">Celda 4</td>
            <td className="celda">Celda 5</td>
          </tr>
        </tbody>
      </table>
      <div className="TodoForm-buttonContainer">
        <Button
          type="button"
          className="TodoForm-button TodoForm-button--cancel"
          accion={onCancel}
        />
        <Button
          type="submit"
          className="TodoForm-button TodoForm-button--add"
          accion={onSubmit}
        />
      </div>
    </form>
  );
}

export { NewProductForm };
