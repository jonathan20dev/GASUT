import {React} from "react";
import { Route, Routes } from "react-router-dom";
import { Login } from "./Components/Auth/Login/Login";
import { Register } from "./Components/Auth/Register/Register";
import { Products } from "./Components/Products/Products";
import { Services } from "./Components/Services/Services"
import { ProtectedRoute } from "./Components/Security/ProtectedRoute";
import { AuthProvider } from "./Business/Context/AuthContext";
import { UserProfile } from "./Components/Users/Profile/UserProfile"
import { Prueba } from "./Components/Users/Profile/Prueba"


function App() {
  return (
    <AuthProvider>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/prueba" element={<Prueba />} />
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
            path="/profile"
            element={
              <ProtectedRoute> 
                <UserProfile/>
              </ProtectedRoute>
            }
          />
        </Routes>
      </AuthProvider>
  );
}

export default App;
