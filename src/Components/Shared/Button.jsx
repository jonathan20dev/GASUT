import React from 'react'

function Button({clase, texto, accion, color}) {
  return (
    <button className={clase} type="button" onClick={accion} style={{background: color, borderStyle: 'none'}}>
        {texto}
    </button>
  )
}

export {Button}