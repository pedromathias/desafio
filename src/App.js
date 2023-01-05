
import { AuthProvider } from "./context/auth";

import { Cadastro } from "./pages/Cadastro";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { Router } from "./Routes/index";
import { GlobalStyle } from "./style/global";

export function App() {
  return (
    <>
    
      <GlobalStyle />
      <Router />
      
      </>
  );
}


