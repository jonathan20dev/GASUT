import React from 'react'

function Button({clase, texto, accion, color, ancho}) {
  if (ancho === undefined) {
    ancho = ''
  }
  console.log(ancho)
  return (
    <button className={clase} type="button" onClick={accion} style={{background: color, borderStyle: 'none', width: ancho}}>
        {texto}
    </button>
  )
}

export {Button}