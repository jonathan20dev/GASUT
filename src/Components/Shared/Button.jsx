import React from 'react'

function Button({clase, texto, accion}) {
  return (
    <button className={clase} type="button" onClick={accion}>
        {texto}
    </button>
  )
}

export {Button}