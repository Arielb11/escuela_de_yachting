import { BrowserRouter, Router, Link, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Cursos from "./pages/cursos";
import Viajes from "./pages/viajes";



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cursos" element={<Cursos />} />
        <Route path="/viajes" element={<Viajes />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

