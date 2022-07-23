import { createContext, useEffect } from "react";
import { getAuth } from "firebase/auth";
import { useContext } from "react";
const authContext = createContext();

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const auth = getAuth();
    return auth.onIdTokenChanged(async (user) => {
      if (!user) {
        setCurrentUser(null);
        setLoading(false);
        console.log("No user signed in");
        return;
      }
      const token = await user.getIdToken();
      set
      
      console.log("Token: ", token);
      console.log("User: ", user);
    });
  }, []);
  return <authContext.Provider value={getAuth()}>{children}</authContext.Provider>;
};

export const useAuth = () => useContext(authContext);
