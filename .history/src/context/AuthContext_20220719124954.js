import { createContext, useEffect, useContext, useState } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";

import { auth } from "../firebase-config";

export const useAuth = () => useContext(AuthContext);

export const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setCurrentUser({
          uid: user.uid,
          name: user.displayName,
          email: user.email,
        });
      } else {
        setCurrentUser(null);
      }
    });
    return () => unSubscribe();
  }, []);
  return <AuthContext.Provider value={currentUser}>{children}</AuthContext.Provider>;
};
