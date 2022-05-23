import {React} from "react";
import { Route, Routes } from "react-router-dom";
import { Login } from "./Components/Auth/Login/Login";
import { Register } from "./Components/Auth/Register/Register";
import { Products } from "./Components/Products/Products";
import { Services } from "./Components/Services/Services"
import { ProtectedRoute } from "./Components/Security/ProtectedRoute";
import { AuthProvider } from "./Business/Context/AuthContext";
import { UserProfile } from "./Components/Users/Profile/UserProfile"
import { MisDatos } from './Components/Users/MisDatos/MisDatos.jsx'
import { MisServicios } from './Components/Users/MisServicios/MisServicios.jsx'
import { MisProductos } from './Components/Users/MisProductos/MisProductos.jsx'

function App() {
  return (
    <AuthProvider>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />}/>
          <Route
            path="/"
            element={
              <ProtectedRoute> 
                <Products />
              </ProtectedRoute>
            }
          />
          <Route
            path="/services"
            element={
              <ProtectedRoute> 
                <Services />
              </ProtectedRoute>
            }
          />
          <Route
            path="/profile/"
            element={
              <ProtectedRoute> 
                <UserProfile/>
              </ProtectedRoute>
            }
          >
            <Route path="misDatos" element={<MisDatos/>}/>
            <Route path="misServicios" element={<MisServicios/>}/>
            <Route path="misProductos" element={<MisProductos/>}/>
          </Route>
        </Routes>
      </AuthProvider>
  );
}

export default App;
