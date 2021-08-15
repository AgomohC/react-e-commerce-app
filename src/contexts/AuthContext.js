import React from "react";
import authReducer from "../reducers/authReducer";
import { useContext, useReducer } from "react";
import { auth } from "../firebase";

// console.log(auth);
const AuthContext = React.createContext();

const AuthProvider = ({ children }) => {
  const initialState = { currentUser: "" };
  const [state, dispatch] = useReducer(authReducer, initialState);

  return (
    <AuthContext.Provider value={{ ...state }}>{children}</AuthContext.Provider>
  );
};
export const useAuth = () => {
  return useContext(AuthContext);
};

export { AuthContext, AuthProvider };
