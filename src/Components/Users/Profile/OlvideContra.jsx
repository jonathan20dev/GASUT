import React, {useRef, useState} from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from "../../../Business/Context/AuthContext"

const OlvideContra = ({correo}) => {
  const emailRef = useRef()
  const { resetPassword } = useAuth()
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const [ messages, setMessages] = useState("")

  const handleSubmit = async (e) => {
    e.preventDefault()

    try{
      setMessages("")
      setError("")
      setLoading(true)
      await resetPassword(emailRef.current.value)
      setMessages("Revisa tu bandeja de entrada")
    }catch{
      setError("Error al recuperar tu contraseña")
    }
  
  
  setLoading(false)
  }

  return (
    <div className="d-flex flex-column justify-content-center" id="login-box">
        <div className="login-box-header">
          <h4 style={{color: 'rgb(139,139,139)', marginBottom: '0px', fontWeight: 400, fontSize: '27px'}}>Restaurar contraseña</h4>
        </div>
        <div className="d-flex flex-row align-items-center login-box-seperator-container">
          <div className="login-box-seperator" />
          <div className="login-box-seperator-text">
            <p style={{marginBottom: '0px', paddingLeft: '10px', paddingRight: '10px', fontWeight: 400, color: 'rgb(201,201,201)'}}>o</p>
          </div>
          <div className="login-box-seperator" />
        </div>
        <form onSubmit={handleSubmit}>
            <div className="email-login" style={{backgroundColor: '#ffffff'}}>
            <input type="email" name="email" id="email" className="email-imput form-control" 
                style={{marginTop: '10px'}}
                placeholder="Correo"
                ref={emailRef}
                autoComplete="off"/>
            </div>
            <div className="submit-row" style={{marginBottom: '8px', paddingTop: '20px'}}>
                <button type='submit' className="btn btn-primary d-block box-shadow w-100" disabled={loading}>Restaurar contraseña</button>
            </div>
        </form>
        <div id="login-box-footer" style={{padding: '10px 20px', paddingBottom: '23px', paddingTop: '18px'}}>
          <p style={{marginBottom: '0px'}}><Link to="/login" id="register-link" href="#">Regresar!</Link></p>
        </div>
      </div>
  )
}

export {OlvideContra}