import React from "react";

function Tabla({ titulos, filas }) {
  return (
    <div>
      <table className="table mt-4" >
        <thead>
          <tr >
            {titulos.map((t) => (
              <th scope="col">{t}</th>
            ))}
            <th scope="col" style={{textAlign: 'center'}}>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {filas.map((f) => (
            <tr>
              {Object.values(f).map((v) => (
                <td>{v}</td>
              ))}
              <td style={{display: 'flex', justifyContent: 'space-evenly'}}>
                <i className="bi bi-trash3" style={{color: 'red'}}></i>
                <i className="bi bi-pencil" style={{color: 'blue'}}></i>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <nav style={{display: 'flex', justifyContent: 'center'}}>
        <ul className="pagination">
          <li className="page-item">
            <div className="page-link" aria-label="Previous">
              <span aria-hidden="true">&laquo;</span>
            </div>
          </li>
          <li className="page-item">
            <div className="page-link">
              1
            </div>
          </li>
          <li className="page-item">
            <div className="page-link" >
              2
            </div>
          </li>
          <li className="page-item">
            <div className="page-link" >
              3
            </div>
          </li>
          <li className="page-item">
            <div className="page-link" aria-label="Next">
              <span aria-hidden="true">&raquo;</span>
            </div>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export { Tabla };
