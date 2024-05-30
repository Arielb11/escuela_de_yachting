import Carrusel from "../components/carrusel";
import Header from "../components/header";
import Viajes from "../components/viajes";
import Mapa from "../components/mapa";
import Opiniones from "../components/opiniones";
import Footer from "../components/footer";

const Home = () => {
    const placeId = "ChIJOxqzrpxmLZQRAv0maQ7u4_E";
    return (
        <>
            
            <Carrusel />
            <Viajes />
            <Opiniones placeId={placeId} />
            <Mapa/>
            <Footer/>
            
        </>
      
    );
};

export default Home;