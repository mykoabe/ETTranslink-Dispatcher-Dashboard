import { createContext, useEffect, useContext } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
const AuthContext = createContext();
import { auth } from '../firebase-config'

export const useAuth = () => useContext(AuthContext);

export const AuthContextProvider = ({ children }) => {
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, );
  }, []);
};
