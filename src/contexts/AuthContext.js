import React from "react";

// import reducer from "../reducers/reducer";
import { useContext, useReducer } from "react";

const AuthContext = React.createContext();

const AuthProvider = ({ children }) => {
  return <AuthContext.Provider>{children}</AuthContext.Provider>;
};
export const useAuth = () => {
  return useContext(AuthContext);
};

export { AuthContext, AuthProvider };
