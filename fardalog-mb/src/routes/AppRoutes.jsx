import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "../components/Header/Header.jsx";
import Footer from "../components/Footer/Footer.jsx";

import Dashboard from "../pages/Dashboard.jsx";
import Catalogo from "../pages/Catalogo.jsx";
import Detalhes from "../pages/Detalhes.jsx";
import NotFound from "../pages/NotFound.jsx";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/catalogo" element={<Catalogo />} />
        <Route path="/detalhes/:id" element={<Detalhes />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default AppRoutes;