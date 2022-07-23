import { createContext, useEffect } from "react";
import { getAuth } from "firebase/auth";
const authContext = createContext();

export const AuthProvider = ({ children }) => {
  useEffect(() => {
    cosnt auth = getAuth();
    return auth.onIdTokenChanged(async (user) => {
        if (user) {
            const token = await user.getIdToken();
            localStorage.setItem("token", token);
        }
    });
  })
};
