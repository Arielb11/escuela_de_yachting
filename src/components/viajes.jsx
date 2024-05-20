
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

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

            <section class="text-gray-600 body-font">
                <div class="container  mx-auto flex flex-wrap">
                    <div class="lg:w-1/2 w-full mb-10 lg:mb-0 rounded-lg overflow-hidden">
                        <img alt="feature" class="object-cover object-center h-full w-full " src="/src/assets/img/foto-prueba3.jpg" />
                    </div>
                    <div class="flex flex-col flex-wrap lg:py-6 -mb-10 lg:w-1/2 lg:pl-12 lg:text-left text-center">
                        <h2 className="text-center text-6xl font-bold">Viajes de Recreación</h2>
                        <p className="text-center text-xl">Disfruta el placer de navegar!</p>
                        <div class="flex flex-col mb-10 mt-20 lg:items-start items-center">
                            <div class="w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5">
                                <img src="/src/assets/videos/contacto.gif" alt="" />
                            </div>
                            <div class="flex-grow">
                                <h2 class="text-gray-900 text-lg title-font font-medium mb-3">Contactanos</h2>
                                <p class="leading-relaxed text-base">Contáctate con nosotros para poder ayudarte a elegir las mejores opciones para tu viaje. Nos aseguramos de que cada detalle esté perfectamente organizado para que disfrutes de una experiencia inolvidable.</p>
                            </div>
                        </div>
                        <div class="flex flex-col mb-10 lg:items-start items-center">
                            <div class="w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5">
                                <img src="/src/assets/videos/faro (1).gif" alt="" />
                            </div>
                            <div class="flex-grow">
                                <h2 class="text-gray-900 text-lg title-font font-medium mb-3">Te Asesoramos</h2>
                                <p class="leading-relaxed text-base">Te ayudamos a encontrar el barco y la fecha ideales para tu viaje al mismo costo que alquilar directamente. Nos comprometemos a ofrecerte un servicio de asesoramiento personalizado para asegurarnos de que cada aspecto de tu experiencia marítima sea excepcional.</p>
                            </div>
                        </div>
                        <div class="flex flex-col mb-10 lg:items-start items-center">
                            <div class="w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5">
                                <img src="/src/assets/videos/fiesta.gif" alt="" />
                            </div>
                            <div class="flex-grow">
                                <h2 class="text-gray-900 text-lg title-font font-medium mb-3">Disfruta al Maximo</h2>
                                <p class="leading-relaxed text-base">Nos especializamos en garantizar que cada experiencia sea inolvidable y llena de momentos especiales. Con nuestro servicio, podrás disfrutar al máximo de cada destino, actividad y momento a bordo.</p>
                            </div>
                        </div>
                        <div className="flex justify-center">
                            <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Saber Mas</button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Viajes;