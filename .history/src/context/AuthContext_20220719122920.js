import { createContext, useEffect } from "react";
import { getAuth } from "firebase/auth";
import { useContext } from "react";
const authContext = createContext();

export const AuthProvider = ({ children }) => {
    const [currentUser]
  useEffect(() => {
    const auth = getAuth();
    return auth.onIdTokenChanged(async (user) => {
      if (!user) {
        console.log("No user signed in");
        return;
      }
      const token = await user.getIdToken();
      console.log("Token: ", token);
      console.log("User: ", user);
    });
  }, []);
  return <authContext.Provider value={getAuth()}>{children}</authContext.Provider>;
};

export const useAuth = () => useContext(authContext);
