import "./login.css"
import { useState } from "react";
import { Alert } from "../Alert";
import { useAuth } from "../../../Business/Context/AuthContext";
import { Link, useNavigate } from "react-router-dom";


const Login = () => {
    const [newUser, setUser] = useState({email: "",password: "",});
    const { login, loginWithGoogle, resetPassword, insertUserFB } = useAuth();
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
        await login(newUser.email, newUser.password);
        navigate("/");
    } catch (error) {   
        setError(error.message);
    }
    };


    const handleChange = ({ target: { value, name } }) =>
    setUser({ ...newUser, [name]: value });

    const handleGoogleSignin = async () => {
    try {
        await loginWithGoogle();
        console.log('SIGUE INSERTAR EN FB')
        insertUserFB()
        navigate("/");
        
    } catch (error) {
        setError(error.message);
    }
    };

    

    const handleResetPassword = async (e) => {
    e.preventDefault();
    if (!newUser.email) return setError("Write an email to reset password");
    try {
        await resetPassword(newUser.email);
        setError('We sent you an email. Check your inbox')
    } catch (error) {
        setError(error.message);
    }
    };
    


  return (
    <div className="d-flex flex-column justify-content-center" id="login-box">
        {error && <Alert message={error} />}
        <div className="login-box-header">
          <h4 style={{color: 'rgb(139,139,139)', marginBottom: '0px', fontWeight: 400, fontSize: '27px'}}>Login</h4>
        </div>
        <div className="login-box-content">
          <div className="fb-login box-shadow" />
          <div className="gp-login box-shadow">
            <a onClick={handleGoogleSignin} className="d-flex flex-row align-items-center social-login-link" style={{marginBottom: '10px'}} href="#!"><i className="bi bi-google" style={{color: 'rgb(255,255,255)', width: '56px'}} />Login con Google+</a></div>
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
                onChange={handleChange}
                autoComplete="off"/>
            <input type="password" name="password" id="password" className="password-input form-control"
                style={{marginTop: '10px'}}
                placeholder="*****************"
                onChange={handleChange}
                />
            </div>
            <div className="submit-row" style={{marginBottom: '8px', paddingTop: '0px'}}>
                <button className="btn btn-primary d-block box-shadow w-100" 
                    id="submit-id-submit" 
                    type="submit">
                Login</button>
            <div className="d-flex justify-content-between">
                <div className="form-check form-check-inline" id="form-check-rememberMe">
                    <input className="form-check-input" type="checkbox" id="formCheck-1" htmlFor="remember" style={{cursor: 'pointer'}} name="check" />
                    <label className="form-check-label" htmlFor="formCheck-1"><span className="label-text">Recuerdame</span></label></div>
                    <a id="forgot-password-link" href="#!" onClick={handleResetPassword}>¿Olvido su contraseña?</a>
            </div>
            </div>
        </form>
        <div id="login-box-footer" style={{padding: '10px 20px', paddingBottom: '23px', paddingTop: '18px'}}>
          <p style={{marginBottom: '0px'}}>¿No tienes una cuenta?<Link to="/register" id="register-link" href="#">Registrate!</Link></p>
        </div>
      </div>
  )
}

export {Login}