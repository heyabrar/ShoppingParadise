import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

export const PrivateRoute = ({ children }) => {
  const { isAuth } = useContext(AuthContext);
  console.log(isAuth);
  if (!isAuth) {
    return <Navigate to={"/login"} />;
  } else {
    return children;
  }
};
