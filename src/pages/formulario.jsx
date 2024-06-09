import Header from "../components/Header/header";
import Footer from "../components/footer";

const Formulario = () => {
    
    return (
        <>
            
            
            <Header/>
            <div className="mt-40 flex justify-center items-center">
                <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSelKY2CXnD7BDMvmNz7wof6W0ZEZsFn5U4vkj1NZ1oNnR28fQ/viewform?embedded=true" width="800" height="3300">Cargando…</iframe>
            </div>
            

            <Footer/>
            
        </>
      
    );
};

export default Formulario;