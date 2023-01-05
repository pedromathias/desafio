import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "../pages/Home";

export function PrivateRoutes() {
  return (
    <BrowserRouter>
    <Routes>
      <Route element={<Home />} path="/Home" />
    </Routes>
    </BrowserRouter>
  );
}
