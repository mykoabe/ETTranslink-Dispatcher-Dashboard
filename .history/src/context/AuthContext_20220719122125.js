import { createContext, useEffect } from "react";
import { getAuth } from "firebase/auth";
const authContext = createContext();

export const AuthProvider = ({ children }) => {
  useEffect(() => {
    const auth = getAuth();
    return auth.onIdTokenChanged(async (user) => {
      if (!user) {
        console.log("No user signed in");
        return;
      }
      const token = await user.getIdToken();
      console.log("Token: ", token);
    });
  });
};
