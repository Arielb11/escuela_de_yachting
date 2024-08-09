import Header from "../components/Header/header";
import Footer from "../components/footer";
import { Link } from "react-router-dom";


const Viajes = () => {
    return (
        <>
            <Header />
            
            <div className="relative mt-24">
                <img 
                    src="../assets/img/barco.png" 
                    alt="Imagen de un barco" 
                    className="w-full h-auto object-cover h-60 sm:h-64 md:h-96 lg:h-auto " 
                />
                <div className="absolute top-0 left-0 w-full h-full bg-zinc-950 bg-opacity-35 filter blur-sm"></div>
                <div className="absolute top-0 left-0 w-full h-full flex items-center justify-start"></div>
                <div className="absolute top-0 left-0 w-full h-full flex items-center justify-start">
                    <h1 className="font-Dafoe text-white text-2xl sm:text-2xl md:text-4xl lg:text-5xl xl:text-6xl m-4">
                        Viajes de Recreacion y Ocio
                    </h1>
                </div>
            </div>

            <div className="text-center mx-4 sm:mx-8 md:mx-16 lg:mx-32 xl:mx-64 mt-8 ">
                <h2 className="text-center text-3xl font-bold text-gray-600 body-font mt-15 sm:text-4xl md:text-3xl lg:text-5xl xl:text-6xl m-4">
                    Descubri nuestros Destinos!
                </h2>
            </div>


            <section className="bg-white py-5">
                <div className="container px-6 py-10 mx-auto">
                    <div className="lg:-mx-6 lg:flex lg:items-center">
                        <img className="object-cover object-center lg:w-1/2 lg:mx-6 w-full h-96 rounded-lg lg:h-[36rem]" src="../assets/img/viajes-brasil2.jpg" alt=""/>

                        <div className="mt-8 lg:w-1/2 lg:px-6 lg:mt-0">
                            <img className="h-14 w-14" src="../assets/videos/balneario.gif" alt="" />

                            <h1 className="text-4xl font-semibold text-gray-800  lg:text-5xl lg:w-96">
                                BRASIL
                            </h1>

                            <p className="max-w-lg mt-6 text-gray-500  ">
                                ¡Descubre Brasil desde el mar! En nuestra empresa, especialistas en turismo náutico, te ofrecemos una experiencia única para explorar la vibrante costa brasileña. Seleccionamos el barco perfecto que se adapte a tus necesidades y diseñamos un itinerario personalizado para que puedas disfrutar de las playas más exóticas, la rica cultura y los paisajes impresionantes de Brasil, todo esto al mismo precio que si alquilaras directamente con los proveedores. Navega con nosotros y convierte tus vacaciones en una aventura inolvidable. ¡El Brasil náutico te espera!
                            </p>
                            <p className="max-w-lg mt-6 text-gray-500  ">
                                Ubicadas en Ilha Grande, Angra do Rei  y Paraty, son unos de los lugares naturales e históricos más exuberantes de América del Sur. Entre el verde de sus montañas, cientos de islas idílicas y playas de aguas cristalinas se esconden del mundo.
                            </p>

                            

                            <div className="flex items-center justify-between mt-12 lg:justify-start">
                                <Link to="https://wa.me/+543445405385?text=Hola! Estoy visitando su página web y me gustaría obtener más información sobre el viaje a Brasil. Gracias.">
                                    <button className="flex items-center px-4 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-green-600 rounded-lg hover:bg-green-500 focus:outline-none focus:ring focus:ring-green-300 focus:ring-opacity-80">
                                    <svg className="w-4 h-4 " fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12 0C5.372 0 0 5.373 0 12c0 2.125.552 4.206 1.602 6.052L.048 23.953l5.972-1.554A11.971 11.971 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm.026 21.899a9.817 9.817 0 01-5.081-1.419l-.364-.22-3.542.922.955-3.456-.236-.37A9.814 9.814 0 1121.845 12c0 5.436-4.419 9.849-9.819 9.899zm5.566-7.341c-.303-.152-1.797-.887-2.078-.988-.28-.102-.484-.152-.688.152-.204.303-.79.987-.969 1.19-.18.204-.357.23-.66.077-.303-.154-1.278-.472-2.433-1.504-.9-.803-1.504-1.795-1.683-2.098-.179-.303-.02-.467.134-.619.138-.137.304-.356.456-.537.154-.18.204-.303.305-.506.102-.204.051-.38-.026-.532-.077-.152-.688-1.652-.941-2.262-.247-.59-.498-.51-.688-.52-.179-.007-.38-.01-.581-.01-.202 0-.532.076-.81.38-.278.303-1.066 1.04-1.066 2.534s1.092 2.944 1.243 3.149c.152.204 2.148 3.277 5.199 4.593.728.314 1.297.501 1.74.64.732.233 1.397.2 1.922.122.587-.087 1.797-.732 2.053-1.437.255-.704.255-1.309.179-1.437-.076-.127-.276-.204-.58-.356z"/>
                                    </svg>
                                    <span className="mx-2">Contactanos</span>
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <hr className="border-t-2 border-black w-3/4 mx-auto my-4"/>
            <section className="bg-white py-5">
                <div className="container px-6 py-10 mx-auto">
                    <div className="lg:-mx-6 lg:flex lg:items-center">
                        <img className="object-cover object-center lg:w-1/2 lg:mx-6 w-full h-96 rounded-lg lg:h-[36rem]" src="../assets/img/uruguay.jpg" alt=""/>

                        <div className="mt-8 lg:w-1/2 lg:px-6 lg:mt-0">
                            <img className="h-12 w-12" src="../assets/img/te-de-mate.png" alt="" />

                            <h1 className="text-4xl font-semibold text-gray-800  lg:text-5xl lg:w-96">
                                URUGUAY
                            </h1>

                            <p className="max-w-lg mt-6 text-gray-500  ">
                            ¡Explora las maravillas de Uruguay desde sus aguas! Con nuestra experticia en turismo náutico, te garantizamos una aventura marítima sin igual. Escoge el barco ideal con nuestra ayuda, ajustado completamente a tus expectativas, y déjanos organizar un itinerario personalizado para navegar por las costas uruguayas. Descubre desde tranquilas playas hasta encantadores pueblos costeros, todo al mismo costo que si alquilaras directamente con proveedores locales. 
                            </p>
                            <p className="max-w-lg mt-6 text-gray-500  ">
                                Contamos con Viajes de Recreación e Instrucción a Colonia de Sacramento – Montevideo y Punta del Este. Zarpando de Puerto Madero, Buenos Aires a distintos destinos Uruguayos con las siguientes embarcaciones, Fran 37 y Bora Bora 42 con capacidad para 8 y 11 personas 
                            </p>

                            

                            <div className="flex items-center justify-between mt-12 lg:justify-start">
                                <Link to="https://wa.me/+543445405385?text=Hola! Estoy visitando su página web y me gustaría obtener más información sobre el viaje a Uruguay. Gracias.">
                                    <button className="flex items-center px-4 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-green-600 rounded-lg hover:bg-green-500 focus:outline-none focus:ring focus:ring-green-300 focus:ring-opacity-80">
                                    <svg className="w-4 h-4 " fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12 0C5.372 0 0 5.373 0 12c0 2.125.552 4.206 1.602 6.052L.048 23.953l5.972-1.554A11.971 11.971 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm.026 21.899a9.817 9.817 0 01-5.081-1.419l-.364-.22-3.542.922.955-3.456-.236-.37A9.814 9.814 0 1121.845 12c0 5.436-4.419 9.849-9.819 9.899zm5.566-7.341c-.303-.152-1.797-.887-2.078-.988-.28-.102-.484-.152-.688.152-.204.303-.79.987-.969 1.19-.18.204-.357.23-.66.077-.303-.154-1.278-.472-2.433-1.504-.9-.803-1.504-1.795-1.683-2.098-.179-.303-.02-.467.134-.619.138-.137.304-.356.456-.537.154-.18.204-.303.305-.506.102-.204.051-.38-.026-.532-.077-.152-.688-1.652-.941-2.262-.247-.59-.498-.51-.688-.52-.179-.007-.38-.01-.581-.01-.202 0-.532.076-.81.38-.278.303-1.066 1.04-1.066 2.534s1.092 2.944 1.243 3.149c.152.204 2.148 3.277 5.199 4.593.728.314 1.297.501 1.74.64.732.233 1.397.2 1.922.122.587-.087 1.797-.732 2.053-1.437.255-.704.255-1.309.179-1.437-.076-.127-.276-.204-.58-.356z"/>
                                    </svg>
                                    <span className="mx-2">Contactanos</span>
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <Footer/>
        </>
            
    );
};

export default Viajes;