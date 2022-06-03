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
import { insertUser } from '../../Firebase/insertUser'
import { getUser } from "../../Firebase/getUser";

const authContext = createContext();

export const useAuth = () => {
  const context = useContext(authContext);
  if (!context) throw new Error("There is no Auth provider");
  return context;
};

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [inicio, setInicio] = useState(false);
  const [loading, setLoading] = useState(true);
  const [registrado, setRegistrado] = useState(null)

  async function fetchUser(user) {
    const us = await getUser(user.reloadUserInfo.localId)
    setUser(us)
    setInicio(true)
  }

  async function validacion(userid) {
    if (userid !== null){
      const us = await getUser(userid.reloadUserInfo.localId)
      setUser(us)
      setRegistrado(us)
      setInicio(true)
    }
  }
 
  useEffect(() => {
    const unsubuscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      (currentUser !== null) && fetchUser(currentUser);
      setLoading(false);
      validacion(currentUser)
    });
    return () => unsubuscribe();
  }, []);


  const insertUserFB = () => {
    const obtenerUsuario = onAuthStateChanged(auth, (currentUser) => {
      if (registrado !== null && user !== null) {
        insertUser(currentUser.reloadUserInfo.localId, {codigo_postal: user.codigo_postal, correo: user.email, img: user.img, nombre: user.nombre, telefono: user.telefono, direccion: user.direccion, provincia: user.provincia, canton: user.canton, distrito: user.distrito})
      }
    })  
    obtenerUsuario()
  }

  const insertUserRegister = (cp, mail, image, name, phone) => {
    const obtenerUsuario = onAuthStateChanged(auth, (currentUser) => {
      insertUser(currentUser.reloadUserInfo.localId, {codigo_postal: cp, correo: mail, img: image, nombre: name, telefono: phone, direccion: "", provincia: '', canton: '', distrito: ''})
    })
    obtenerUsuario()
  }

  const signup = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
    
  };

  const login = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const loginWithGoogle = () => {
    const googleProvider = new GoogleAuthProvider();
    return signInWithPopup(auth, googleProvider);
  };

  const logout = () => signOut(auth);

  const resetPassword = async (email) => sendPasswordResetEmail(auth, email);

  //Compartidos
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
        insertUserFB,
        insertUserRegister,
        setRegistrado,
        setUser,
        inicio
      }}
    >
      {children}
    </authContext.Provider>
  );
}
