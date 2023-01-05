import React, {createContext, useContext, useEffect, useState} from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
  const [auth, setAuth] = useState();

  useEffect(() => {
    // loadStorageData();
  }, []);

  

  return (
    <AuthContext.Provider value={{auth, setAuth}}>
      {children}
    </AuthContext.Provider>
  );
};

