
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

const Estilos = {
    fontFamily: 'poppins, sans-serif',

}
const Viajes = () => {
    const { ref, inView } = useInView({
        threshold: 0.5, // Define el porcentaje de visibilidad necesario para activar la animación
        triggerOnce: true, // Activa la animación solo una vez
    });

    const variants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 1 } },
    };


    return (
        <>
            <motion.div
            ref={ref}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            variants={variants}
            >
                
            </motion.div>

            <section className="text-gray-600 body-font">
                <div className="container  mx-auto flex flex-wrap">
                    <div className="lg:w-1/2 w-full mb-10 lg:mb-0 rounded-lg overflow-hidden">
                        <img alt="feature" className="object-cover object-center h-full w-full " src="/src/assets/img/foto-prueba3.jpg" />
                    </div>
                    <div className="flex flex-col flex-wrap lg:py-6 -mb-10 lg:w-1/2 lg:pl-12 lg:text-left text-center">
                        <h2 className="text-center text-6xl font-bold">Viajes de Recreación</h2>
                        <p className="text-center text-xl">Disfruta el placer de navegar!</p>
                        <div className="flex flex-col mb-10 mt-20 lg:items-start items-center">
                            <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5">
                                <img src="/src/assets/videos/contacto.gif" alt="" />
                            </div>
                            <div className="flex-grow">
                                <h2 className="text-gray-900 text-lg title-font font-medium mb-3">Contactanos</h2>
                                <p className="leading-relaxed text-base">Contáctate con nosotros para poder ayudarte a elegir las mejores opciones para tu viaje. Nos aseguramos de que cada detalle esté perfectamente organizado para que disfrutes de una experiencia inolvidable.</p>
                            </div>
                        </div>
                        <div className="flex flex-col mb-10 lg:items-start items-center">
                            <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5">
                                <img src="/src/assets/videos/faro (1).gif" alt="" />
                            </div>
                            <div className="flex-grow">
                                <h2 className="text-gray-900 text-lg title-font font-medium mb-3">Te Asesoramos</h2>
                                <p className="leading-relaxed text-base">Te ayudamos a encontrar el barco y la fecha ideales para tu viaje al mismo costo que alquilar directamente. Nos comprometemos a ofrecerte un servicio de asesoramiento personalizado para asegurarnos de que cada aspecto de tu experiencia marítima sea excepcional.</p>
                            </div>
                        </div>
                        <div className="flex flex-col mb-10 lg:items-start items-center">
                            <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5">
                                <img src="/src/assets/videos/fiesta.gif" alt="" />
                            </div>
                            <div className="flex-grow">
                                <h2 className="text-gray-900 text-lg title-font font-medium mb-3">Disfruta al Maximo</h2>
                                <p className="leading-relaxed text-base">Nos especializamos en garantizar que cada experiencia sea inolvidable y llena de momentos especiales. Con nuestro servicio, podrás disfrutar al máximo de cada destino, actividad y momento a bordo.</p>
                            </div>
                        </div>
                        <div className="flex justify-center">
                            <Link to="/Viajes">
                                <button type="button"  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Saber Mas</button>
                            </Link>
                            
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Viajes;