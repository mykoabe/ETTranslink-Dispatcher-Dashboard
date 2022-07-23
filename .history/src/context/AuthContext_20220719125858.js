import { createContext, useEffect, useContext, useState } from "react";
import { getAuth, onAuthStateChanged, createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase-config";

const AuthContext = createContext({});

export const useAuth = () => useContext(AuthContext);

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser({
          uid: user.uid,
          name: user.displayName,
          email: user.email,
        });
      } else {
        setUser(null);
      }
    });
    return () => unSubscribe();
  }, []);

  const signUp = async (name, email, password) => {

  return <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>;
};
