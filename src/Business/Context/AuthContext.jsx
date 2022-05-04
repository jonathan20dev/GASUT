import { createContext, useContext, useEffect, useState } from "react";
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
    GoogleAuthProvider,
    signInWithPopup,
    sendPasswordResetEmail,
  } from "firebase/auth";
  import { auth } from "../../Firebase/firebase";
  import { insertUser } from "../../Firebase/insertUser"

  const authContext = createContext();

export const useAuth = () => {
const context = useContext(authContext);
if (!context) throw new Error("There is no Auth provider");
return context;
};

export function AuthProvider({ children }) {
const [user, setUser] = useState(null);
const [userFb, setUserFb] = useState({correo: '', ubicacion: '', img: '', nombre: '', celular: ''});
const [loading, setLoading] = useState(true);


useEffect(() => {
    const unsubuscribe = onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
    setLoading(false);
    });
    return () => unsubuscribe();
}, []);

//Inserta un usuario en la coleccion Usuarios
const insertUserFB = () => {
    const obtenerUsuario = onAuthStateChanged(auth, (currentUser) => {
    const photo = currentUser.photoURL || " "
    const disName = currentUser.displayName || "Usuario"
    insertUser(currentUser.reloadUserInfo.localId, {...userFb, correo: currentUser.email, img: photo, nombre: disName})
    setUserFb({...userFb, correo: currentUser.email, img: photo, nombre: disName})
    })
    obtenerUsuario()
}


//Registro normal firebase
const signup = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
    
};

//Login noraml firebase
const login = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
};

//Login en firebase utilizando google
const loginWithGoogle = () => {
    const googleProvider = new GoogleAuthProvider();
    return signInWithPopup(auth, googleProvider);
};

//Cerrar sesion
const logout = () => signOut(auth);

//Reestablecer contraseña
const resetPassword = async (email) => sendPasswordResetEmail(auth, email);

return (
    <authContext.Provider
    value={{
        signup,
        login,
        user,
        logout,
        loading,
        loginWithGoogle,
        resetPassword,
        insertUserFB
    }}
    >
    {children}
    </authContext.Provider>
);
}
  