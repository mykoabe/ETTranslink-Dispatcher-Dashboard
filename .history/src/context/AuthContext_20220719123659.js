import { createContext, useEffect, useContext } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
const authContext = createContext();

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);
  onAuthStateChanged(user => {
  return <authContext.Provider value={getAuth()}>{children}</authContext.Provider>;
};

export const useAuth = () => useContext(authContext);
