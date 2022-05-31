import React from 'react'
import { Header } from "../Shared/Header/Header"
import { Footer } from "../Shared/Footer"

export const Contact = () => {
    const integrantes = [
        {nombre: "Kimberly Vargas", img: "https://media-exp1.licdn.com/dms/image/C5603AQFIcEFL-NSfqA/profile-displayphoto-shrink_400_400/0/1627255607401?e=1658361600&v=beta&t=vOE4drpZLUitwvz_h28OuLPwZftPH0QsL3BXLzBRXAk", puesto: "Frontend Developer",linkedin:"https://www.linkedin.com/in/kimberly-vargas-75a4471b9/"},
        {nombre: "Jonathan Mendoza", img: "https://media-exp1.licdn.com/dms/image/D5635AQEnAISyoNMu-A/profile-framedphoto-shrink_400_400/0/1621491422913?e=1654473600&v=beta&t=xsvmQpc_7uXz50N-wjf3_2BCbeCSszLRS2fgXb6aR0c", puesto: "Frontend Developer", linkedin:"https://www.linkedin.com/in/jonathan20-dev/"},
        {nombre: "Cristopher Gonzalez ", img: "https://media-exp1.licdn.com/dms/image/C4D03AQFFQMJRbXXcHw/profile-displayphoto-shrink_800_800/0/1651250599997?e=1659571200&v=beta&t=NflXHCMOZYGOSDvmFsoqQm8bdtJZDcP1S_p2dv5-We8", puesto: "Frontend Developer",linkedin:"https://www.linkedin.com/in/cristopher-gonzalez-solis-6832a0239/"},
        {nombre: "Derian Rodriguez ", img: "https://th.bing.com/th/id/OIP.DBnnvGei5EXQs_-fuVU7UgAAAA?pid=ImgDet&w=229&h=240&rs=1", puesto: "Frontend Developer",linkedin:"https://www.linkedin.com"}]
    return (
    <>
    <Header/>
    <div className="mt-5 text-center cards-center">
        <h2 className='fw-bold'>Contáctanos</h2>
        <div style={{marginTop: '45px', marginBottom: '70px'}}>
            <div className="row">
                <div className="row mb-4">
                </div>
            </div>
            <div className="row">
                <div className="row row-cols-2 row-cols-md-3 d-md-flex mx-auto justify-content-md-center" style={{maxWidth: '700px'}}>
                    {integrantes.map((inte, index) => {
                    return <a key={index} className="col mb-0" href={inte.linkedin}>
                    <div className="text-center"><img className="rounded mb-2 fit-cover" width={150} height={150} src={inte.img} alt="integrante"/>
                    <h5 className="fw-bold mb-0"><strong>{inte.nombre}</strong></h5>
                    <p className="text-muted mb-3">{inte.puesto}</p>
                    </div>
                    </a>})}
                </div>
            </div>  
        </div>
        
        <div className='row justify-content-evenly row-cols-sm-1 row-cols-md-3 row-cols-lg-3 g-4 m-5'>
            <div className='px-5'>
                <h5>VISITANOS</h5>
                <p className='mb-0'>San Carlos, de la inglesia</p>
                <p className='mb-0'>100 metros norte</p>
            </div>
            <div className='px-5'>
                <h5>HORARIO</h5>
                <p className='mb-1'>Lun - Vier: 7:00 - 3:00</p>
                <p className='mb-1'>Sábados: 9:00 - 3:00</p>
            </div>
            <div>
                <h5>SERVICIO AL CLIENTE</h5>
                <p className='mb-1'>2465-1212</p>
                <p className='mb-1'>2465-1313</p>
                <p className='mb-1'>gasut@web.com</p>  
            </div> 
        </div>    
    </div>

    <Footer/>
    </>
  )
}


