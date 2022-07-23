import { createContext, useEffect } from "react";
import { getAuth } from "firebase/auth";
const authContext = createContext();
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);
  return <authContext.Provider value={{ user, loading }}>{children}</authContext.Provider>;
};
