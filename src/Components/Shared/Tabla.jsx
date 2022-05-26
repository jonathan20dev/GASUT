import React from "react";
import "./tabla.css"

const styles = {
  img: {
    width: "40px",
    height: "40px",
    borderRadius: "50%",
    objectFit: "cover"
  }
}

function Tabla({ titulos, filas }) {
  return (
    <>
    <div className="table-responsive">
      <table className="table mt-4" >
        <thead>
          <tr >
            {titulos.map((t, ind) => (
              <th key={ind} scope="col">{t}</th>
            ))}
            <th scope="col" style={{textAlign: 'center'}}>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {filas.map((f, inde) => (
            <tr key={inde}>
              {Object.values(f).map((v, index) => {
                if(index < titulos.length){
                  return <td key={index}>{(index === 0)? <img style={styles.img} alt="colection_article" src={v}/>: 
                  (index === 3)? v.slice(0, 8)+"...": v }</td>
                }}
              )}
              <td >
                <div style={{display:"flex", flexDirection: "row"}}>
                <i className="bi bi-trash3" style={{color: 'red', marginLeft: '10px'}}></i>
                <i className="bi bi-pencil" style={{color: 'blue', marginLeft: '20px'}}></i>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    
       {/* Paginación */}
       <nav style={{display: 'flex', justifyContent: 'center', marginTop: '15px'}}>
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
    
    </>
  );
}

export { Tabla };
