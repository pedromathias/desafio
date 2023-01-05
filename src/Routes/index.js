import React, { useContext, useEffect } from "react";
import { AuthContext } from "../context/auth";

import { AppRoutes } from "./app.routes";
import { AuthRoutes } from "./auth.routes";

export const Router = () => {
  const { auth } = useContext(AuthContext);
  const { setAuth } = useContext(AuthContext);

  useEffect(() => {
    verificarLogin();
  });

  const verificarLogin = async () => {
    const a = await localStorage.getItem("id");
    if (a != null || a != undefined) {
      setAuth(true);
    }
  };

  return auth ? <AppRoutes /> : <AuthRoutes />;
};
