import { createContext, useContext, useMemo } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { useLocalStorage } from "./useLocalStorage";
import api from "./api";
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useLocalStorage("token", null);
  //   const navigate = useNavigate();

  // call this function when you want to authenticate the user
  const login = async (email, pw) => {
    await api.login(email, pw);

    return <Navigate to="/user/dash/" replace />;
  };

  // call this function to sign out logged in user
  //   const logout = () => {
  //     setUser(null);
  //     navigate("/", { replace: true });
  //   };

  const value = useMemo(
    () => ({
      user,
      login,
    }),
    [user]
  );
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  return useContext(AuthContext);
};
