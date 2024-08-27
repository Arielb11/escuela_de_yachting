import Carrusel from "../components/Carrusel/carrusel";
import Viajes from "../components/viajes";
import Mapa from "../components/mapa";
import Opiniones from "../components/opiniones";
import Footer from "../components/footer";

const Home = () => {
    
    return (
        <>
            
            <Carrusel />
            <Viajes />
            <Opiniones />
            <Mapa/>
            <Footer/>
            
        </>
      
    );
};

export default Home;