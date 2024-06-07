import { BrowserRouter, Router, Link, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Viajes from "./pages/viajes";
import Nosotros from "./pages/nosotros";
import ScrollToTop from './ScrollToTop';
import Conductornautico from "./pages/conductornautico";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/conductornautico" element={<Conductornautico />} />
        <Route path="/viajes" element={<Viajes />} />
        <Route path="/nosotros" element={<Nosotros />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;

