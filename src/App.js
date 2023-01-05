import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AuthProvider, { AuthContext } from "./context/auth";
import { Cadastro } from "./pages/Cadastro";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { PrivateRoutes } from "./Routes/private.routes";
import { PublicRoutes } from "./Routes/public.routes";
import { GlobalStyle } from "./style/global";

export function App() {
  const { auth } = useContext(AuthContext);
  const { setAuth } = useContext(AuthContext);
  const navigate = useNavigate()

  // useEffect(() => {
  //   verificarLogin();
  // });

  const verificarLogin = async () => {
    const a = await localStorage.getItem("id");
    if (a != null || a != undefined) {
      setAuth(true);
      navigate("/home")
    }else{
      navigate("/")
    }
  };

  return auth ? <PrivateRoutes /> : <PublicRoutes />;
}
