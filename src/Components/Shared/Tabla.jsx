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
                <i class="bi bi-trash3" style={{color: 'red'}}></i>
                <i class="bi bi-pencil" style={{color: 'blue'}}></i>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <nav style={{display: 'flex', justifyContent: 'center'}}>
        <ul class="pagination">
          <li class="page-item">
            <a class="page-link" href="#" aria-label="Previous">
              <span aria-hidden="true">&laquo;</span>
            </a>
          </li>
          <li class="page-item">
            <a class="page-link" href="#">
              1
            </a>
          </li>
          <li class="page-item">
            <a class="page-link" href="#">
              2
            </a>
          </li>
          <li class="page-item">
            <a class="page-link" href="#">
              3
            </a>
          </li>
          <li class="page-item">
            <a class="page-link" href="#" aria-label="Next">
              <span aria-hidden="true">&raquo;</span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export { Tabla };
