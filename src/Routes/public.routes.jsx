import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Cadastro } from "../pages/Cadastro";
import { Login } from "../pages/Login";


export function PublicRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Login />} path="/" />
        <Route element={<Cadastro />} path="/Cadastro" />
      </Routes>
      </BrowserRouter>
  );
}
