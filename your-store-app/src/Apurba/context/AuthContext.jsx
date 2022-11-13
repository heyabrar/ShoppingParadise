import { createContext, useState } from "react";
import { getCurrentUser, updateUserLocalStorage } from "../utils/utils";

export const AuthContext = createContext();

export const AuthContextComponent = ({ children }) => {
  const [isAuth, setAuth] = useState(
    getCurrentUser().length === 0 ? false : true
  );
  const [isAdmin, setAdmin] = useState(getCurrentUser()[0]?.isAdmin);
  const [user, setUser] = useState(getCurrentUser()[0]);

  const setCurrentUser = (user) => {
    localStorage.setItem("currentUser", JSON.stringify(user));
    setAuth(true);
    setAdmin(getCurrentUser()?.isAdmin);
    setUser(getCurrentUser()[0]);
    return 1;
  };

  const updateUser = (user) => {
    setUser(user);
    updateUserLocalStorage(user);
  };

  const logout = () => {
    localStorage.removeItem("currentUser");
    setAuth(false);
  };
  console.log(isAdmin, user);
  return (
    <AuthContext.Provider
      value={{ isAuth, isAdmin, user, setCurrentUser, logout, updateUser }}
    >
      {children}
    </AuthContext.Provider>
  );
};
