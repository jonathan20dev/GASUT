import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../../Business/Context/AuthContext";
import { Alert } from "./../Alert";

const Register = () => {
    const { signup, insertUserFB } = useAuth();

    const [user, setUser] = useState({
    email: "",
    password: "",
    });

    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        try {
            await signup(user.email, user.password);
            navigate("/");
            insertUserFB()
        } catch (error) {
            setError(error.message);
        }
    };


    return (
    <div className="d-flex flex-column justify-content-center" id="login-box">
        {error && <Alert message={error} />}
        <div className="login-box-header">
        <h4 style={{color: 'rgb(139,139,139)', marginBottom: '0px', fontWeight: 400, fontSize: '27px'}}>Registro</h4>
        </div>
        <div className="d-flex flex-row align-items-center login-box-seperator-container">
        <div className="login-box-seperator" />
        <div className="login-box-seperator" />
        </div>
        <form onSubmit={handleSubmit}>
            <div className="email-login" style={{backgroundColor: '#ffffff'}}>
            <input type="email" name="email" id="email" className="email-imput form-control" 
                style={{marginTop: '10px'}}
                placeholder="Correo"
                onChange={(e) => setUser({ ...user, email: e.target.value })}
                autoComplete="off"/>
            <input type="password" name="password" id="password" className="password-input form-control"
                style={{marginTop: '10px'}}
                placeholder="*****************"
                onChange={(e) => setUser({ ...user, password: e.target.value })}
                />
            </div>
            <div className="submit-row" style={{marginBottom: '8px', paddingTop: '0px'}}>
                <button className="btn btn-primary d-block box-shadow w-100" 
                    id="submit-id-submit" 
                    type="submit">
                    Registrarme
                </button>
            </div>
        </form>
        <div id="login-box-footer" style={{padding: '10px 20px', paddingBottom: '23px', paddingTop: '18px'}}>
        <p style={{marginBottom: '0px'}}>¿Ya tienes una cuenta?<Link to="/login" id="register-link" href="#">Logueate!</Link></p>
        </div>
    </div>
)
}

export {Register}