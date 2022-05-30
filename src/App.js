import { React } from "react";
import { Route, Routes } from "react-router-dom";
import { Login } from "./Components/Auth/Login/Login";
import { Register } from "./Components/Auth/Register/Register";
import  {ProductScreen}  from "./Components/Products/ProductScreen";
import  {ServiceScreen}  from "./Components/Services/ServiceScreen";
import { ProtectedRoute } from "./Components/Security/ProtectedRoute";
import { AuthProvider } from "./Business/Context/AuthContext";
import { UserProfile } from "./Components/Users/Profile/UserProfile";
import { MisDatos } from "./Components/Users/MisDatos/MisDatos.jsx";
import { MisServicios } from "./Components/Users/MisServicios/MisServicios.jsx";
import { MisProductos } from "./Components/Users/MisProductos/MisProductos.jsx";
import { AppContext } from "./Business/Context/AppContext";
import { Contact } from "./Components/Others/Contact"
import { About } from "./Components/Others/About.jsx"

import { Policies } from "./Components/Others/Policies"

function App() {
  return (
    <AuthProvider>
      <AppContext>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <ProductScreen />
              </ProtectedRoute>
            }
          />
          <Route
            path="/contact"
            element={
              <ProtectedRoute>
                <Contact />
              </ProtectedRoute>
            }
          />
          <Route
            path="/about"
            element={
              <ProtectedRoute>
                <About />
              </ProtectedRoute>
            }
          />
          <Route
            path="/Policies"
            element={
              <ProtectedRoute>
                <Policies />
              </ProtectedRoute>
            }
          />
          <Route
            path="/services"
            element={
              <ProtectedRoute>
                    <ServiceScreen />
              </ProtectedRoute>
            }
          />
          <Route
            path="/profile/"
            element={
              <ProtectedRoute>
                <UserProfile />
              </ProtectedRoute>
            }
          >
            <Route path="misDatos" element={<ProtectedRoute><MisDatos /></ProtectedRoute>} />
            <Route path="misServicios" element={<MisServicios />} />
            <Route path="misProductos" element={<MisProductos />} />
          </Route>
        </Routes>
      </AppContext>
    </AuthProvider>
  );
}

export default App;
