import { createContext, useEffect, useContext } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
const AuthContext = createContext();
import { auth } from '../'

export const useAuth = () => useContext(AuthContext);

export const AuthContextProvider = ({ children }) => {
  useEffect(() => {
    const unSubscribe = onAuthStateChanged((auth) => {
      setAuth(auth);
    });
  }, []);
};
