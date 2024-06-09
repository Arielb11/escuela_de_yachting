import { BrowserRouter, Router, Link, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Viajes from "./pages/viajes";
import Nosotros from "./pages/nosotros";
import ScrollToTop from './ScrollToTop';
import Conductornautico from "./pages/cursos/conductornautico";
import Patrondeyate from "./pages/cursos/patrondeyate";
import Perfeccionamiento from "./pages/cursos/perfeccionamiento";
import Timonelvelamotor from "./pages/cursos/timonelvelamotor";
import Timonelyatemotor from "./pages/cursos/timonelyatemotor";
import Formulario from "./pages/formulario";


function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/conductornautico" element={<Conductornautico />} />
        <Route path="/patrondeyate" element={<Patrondeyate />} />
        <Route path="/perfeccionamiento" element={<Perfeccionamiento />} />
        <Route path="/timonelvelamotor" element={<Timonelvelamotor />} />
        <Route path="/timonelyatemotor" element={<Timonelyatemotor />} />
        <Route path="/viajes" element={<Viajes />} />
        <Route path="/nosotros" element={<Nosotros />} />
        <Route path="/formulario" element={<Formulario />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;

