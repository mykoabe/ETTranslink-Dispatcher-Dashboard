import { createContext, useEffect, useContext } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
const AuthContext = createContext();

export const useAuth = () => useContext(authContext);

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);
 
  return <authContext.Provider value={getAuth()}>{children}</authContext.Provider>;
};


