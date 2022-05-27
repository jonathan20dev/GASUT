import React, { useState } from "react";
import { NavLink } from 'react-router-dom';
import "./tabla.css"

const styles = {
  img: {
    width: "40px",
    height: "40px",
    borderRadius: "50%",
    objectFit: "cover"
  }
}

const Paginacion = ({cant,setPaginado, arreglo}) => {
  const handlePaginado = (i,f) =>{
    setPaginado({inicio: i, fin:f})
  }
  return (
    <nav style={{display: 'flex', justifyContent: 'center', marginTop: '15px'}}>
        <ul className="pagination">
            {arreglo.map((el, index) => {
              return <li key={index} className="page-item">
                      <div onClick={()=>handlePaginado(((index+1)*cant)-cant,(index+1)*cant)} className="page-link">
                        {index+1}
                      </div>
                    </li>
            })}
        </ul>
      </nav>
  )
}

function Tabla({ titulos, filas }) {
  const cant = 6 //Cantidad de elementos que se muestran por página
  const [paginado, setPaginado] = useState({inicio:0, fin:cant})
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
          {filas.map((f, inde) => {
            if(inde >= paginado.inicio && inde < paginado.fin){
            return <tr key={inde}>
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
          }})}
        </tbody>
      </table>
    </div>
      {(filas !== undefined)? <i>Has publicado {filas.length} {(titulos.length > 4)? <i>productos</i>: <i>servicios</i> }</i>: <p>0</p>}
       {/* Paginación */}
        {(filas !== undefined)? <Paginacion cant = {cant} setPaginado={setPaginado} arreglo = {filas.filter((el,index) => {
              if(index < filas.length /cant){
                return el}})}
          /> : <i></i>}
    </>
  );
}

export { Tabla };
