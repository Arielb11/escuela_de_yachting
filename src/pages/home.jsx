import Carrusel from "../components/Carrusel/carrusel";
import Viajes from "../components/viajes";
import Mapa from "../components/Mapa/mapa";
import Opiniones from "../components/opiniones";
import Footer from "../components/footer";
import Wpp from "../components/wpp/wpp";


const Home = () => {
    
    return (
        <>
            <Wpp/>
            <Carrusel />
            <Viajes />
            <Opiniones />
            <Mapa/>
            <Footer/>
            
        </>
      
    );
};

export default Home;