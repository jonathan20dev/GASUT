import React from 'react'
const images = require.context('../assets/images', true);
const icons = require.context('../assets/icons', true);

export const Modal = () => {    
    return (
        <body>
            <main className="main">
                <div className='container'>
                    <div className='row g-2'>
                        <div className='col-6 text-center'>
                            <img src={images('./planta.png')} className="" alt="Planta" />
                        </div>

                        <div className='col-6'>
                            <h3 className='text-center'>Detalles</h3>
                            <p className='mb-1'><span>Nombre: </span>Cactus A</p>
                            <p className='mb-1'><span>Cantidad: </span>2</p>
                            <p className='mb-1'><span>Propietario: </span>Fabricio Ulate</p>
                            <p className='mb-1'><span>Ubicación: </span>Calle las rosas en Agua Zarcas, 100 metros norte de la iglesia</p>
                        </div>

                        <div className='col-6'>
                            <h5>Descripción</h5>
                            <p className='mb-1'>Es un cactus muy bonito, lo regalo porque ya tengo muchos en mi casa, espero que el siguiente dueño lo cuide tanto como yo.</p> 
                        </div>

                        <div className='col-6'>
                            <h5 className='text-center'>Contacto</h5>
                            <div className='d-flex'>
                                <img src={icons('./telefono.svg')} className="" alt="Teléfono" />
                                <p className='ms-3'>5013-5656</p>
                            </div>
                            <div className='d-flex'>
                                <img src={icons('./correo.svg')} className="" alt="Teléfono" />
                                <p className='ms-3'>Calichin19@gmail.com</p>
                            </div>
                        </div>
                    </div>
                </div>    
            </main>
        </body>
    )
}
