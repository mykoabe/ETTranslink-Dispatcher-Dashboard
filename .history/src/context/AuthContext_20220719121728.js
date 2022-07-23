import {createContext, useEffect} from "react";
const authContext = createContext();
export const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
        setUser(user);
        setLoading(false);
        });
        return () => unsubscribe();
    }, []);
    return <authContext.Provider value={{user, loading}}>{children}</authContext.Provider>;
}