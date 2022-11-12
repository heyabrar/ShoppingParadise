import { createContext, useState } from "react";
import { getCurrentUser } from "../utils/utils";

export const AuthContext = createContext();

export const AuthContextComponent = ({ children }) => {
  const users = JSON.parse(localStorage.getItem("users"));

  const [isAuth, setAuth] = useState(
    getCurrentUser().length === 0 ? false : true
  );
  const [isAdmin, setAdmin] = useState(getCurrentUser()?.isAdmin);
  const [user, setUser] = useState(getCurrentUser()[0]);

  const setCurrentUser = (user) => {
    localStorage.setItem("currentUser", JSON.stringify(user));
    setAuth(true);
    setAdmin(getCurrentUser()?.isAdmin);
    setUser(getCurrentUser()[0]);
    return 1;
  };

  return (
    <AuthContext.Provider value={{ isAuth, isAdmin, user, setCurrentUser }}>
      {children}
    </AuthContext.Provider>
  );
};
