import React from 'react'
import { UseAppContext } from '../../Business/Context/UseAppContext';
import { DetailsModalProduct } from '../Products/DetailsModalProduct';
import { DetailsModalService } from '../Services/DetailsModalService';
import { Modal as Modicon } from "./Modal/Modal"
import "./modal.css"



const icons = require.context('../../Assets/icons', true);
export const Modal = ({ page }) => {

    const { openModal, setOpenModal, active } = React.useContext(UseAppContext);

    const { descripcion, img, telefono, correo, ubicacion } = active;

    const handleModal = () => {
    setOpenModal({...openModal, modalPS: !openModal.modalPS});
    }

    return (
        <>
        <Modicon>
            <div className='main-modal'>
                <div className='icon-exit'>
                    <img src={icons('./x.svg')} className="icon" alt="Cerrar Modal" onClick={handleModal}/>
                </div>
                <div className='content-modal'>
                    <div className='d-flex justify-content-center' >
                        <div className='modal-cards m-3 p-1 d-flex justify-content-center'>
                            <img src={ img } style={{width: 'auto', maxWidth: '100%', height: '100%'}} className="card-img-top" alt="Planta" /> 
                        </div>
                    </div>

                    <div className=''>
                        <div className='modal-cards mt-0  m-3 p-4'>
                            <h3 className='text-center'>Detalles</h3>
                            {
                                page === 'services'
                                    ? <DetailsModalService />
                                    : <DetailsModalProduct />
                            }
                            <p className='mb-1'><span className='fw-bold'>Ubicación: </span>{ ubicacion }</p>
                        </div>
                    </div>

                    <div className='' >
                        
                        <div className='modal-cards m-3' >
                            <h5 className='fw-bold'>Descripción</h5>
                            <div className='modal-cards--color p-4'>
                                <p className='cards-center'>{ descripcion }</p> 
                            </div>
                            
                        </div>
                    </div>

                    <div className='' >
                        <div className=' modal-cards m-3' >
                            <h5 className='fw-bold'>Contacto</h5>
                            <div className='modal-cards--color p-4'>
                                <table className='contact-table'>
                                    <tbody>
                                        <tr>
                                            <td><img src={icons('./telefono.svg')} className="" alt="Teléfono" /></td>
                                            <td><p className='ms-3'>{telefono}</p></td>
                                        </tr>
                                        <tr>
                                            <td><img src={icons('./correo.svg')} className="" alt="Teléfono" /></td>
                                            <td><p className='ms-3'>{correo}</p></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </Modicon>    
        </>
    )
}
