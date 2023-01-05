import React, { createContext, useState } from "react";
import { Route } from "react-router-dom";

export const AuthContext = createContext();

function AuthProvider({ children }) {
  const [auth, setAuth] = useState(false);
console.log(auth);
  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
