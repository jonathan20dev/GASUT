import React from 'react'
const images = require.context('../assets/images', true);
const icons = require.context('../assets/icons', true);

export const Modal = () => {    
    return (
        <>
            <div className='container mt-5'>
                <div className='row g-2 row-cols-sm-1 row-cols-lg-2'>
                    <div className='col-5 cards-center'>
                        <div className='modal-cards m-3 p-4'>
                            <img src={images('./planta.png')} className="card-img-top" alt="Planta" /> 
                        </div>
                    </div>

                    <div className='col-5 cards-center'>
                        <div className='modal-cards m-3 p-4'>
                            <h3 className='text-center'>Detalles</h3>
                            <p className='mb-1 mt-3'><span className='fw-bold'>Nombre: </span>Cactus A</p>
                            <p className='mb-1'><span className='fw-bold'>Cantidad: </span>2</p>
                            <p className='mb-1'><span className='fw-bold'>Propietario: </span>Fabricio Ulate</p>
                            <p className='mb-1'><span className='fw-bold'>Ubicación: </span>Calle las rosas en Agua Zarcas, 100 metros norte de la iglesia</p>
                        </div>
                    </div>

                    <div className='col-5 cards-center'>
                        
                        <div className='modal-cards m-3'>
                            <h5 className='fw-bold'>Descripción</h5>
                            <div className='modal-cards--color p-4'>
                                <p className='cards-center'>Es un cactus muy bonito, lo regalo porque ya tengo muchos en mi casa, espero que el siguiente dueño lo cuide tanto como yo.</p> 
                            </div>
                            
                        </div>
                    </div>

                    <div className='col-5 cards-center'>
                        <div className=' modal-cards m-3'>
                            <h5 className='fw-bold'>Contacto</h5>
                            <div className='modal-cards--color p-4'>
                                <table className='contact-table'>
                                    <tbody>
                                        <tr>
                                            <td><img src={icons('./telefono.svg')} className="" alt="Teléfono" /></td>
                                            <td><p className='ms-3'>5013-5656</p></td>
                                        </tr>
                                        <tr>
                                            <td><img src={icons('./correo.svg')} className="" alt="Teléfono" /></td>
                                            <td><p className='ms-3'>Calichin19@gmail.com</p></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>    
        </>
    )
}
