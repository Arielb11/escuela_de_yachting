import Header from "../components/Header/header";
import Footer from "../components/footer";


const Nosotros = () => {
    return (
        <>
            
            <Header />

            <div className="relative mt-24">
                <img 
                    src="/src/assets/img/nosotros.jpg" 
                    alt="Imagen de un barco" 
                    className="w-full h-auto object-cover h-60 sm:h-64 md:h-96 xl:h-96 " 
                />
                <div className="absolute top-0 left-0 w-full h-full bg-zinc-950 bg-opacity-35 filter blur-sm"></div>
                <div className="absolute top-0 left-0 w-full h-full flex items-center justify-start"></div>
                <div className="absolute top-0 left-0 w-full h-full flex items-center justify-start">
                    <h1 className="font-Dafoe text-white text-3xl sm:text-4xl md:text-6xl lg:text-6xl xl:text-8xl m-4">
                        Sobre Nosotros
                    </h1>
                </div>
            </div>
            

            <section className="w-full min-h-screen flex items-center justify-center py-12 md:py-24 lg:py-32 px-1">
                <div className="container max-w-5xl px-2 md:px-4 lg:px-6 text-center">
                    <div className="space-y-6">
                        <p className="mx-auto  text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                            La Escuela de Náutica Deportiva del Club Náutico Córdoba se fundó en 1997 en Villa Carlos Paz, Argentina. Desde los comienzos, nuestra filosofía siempre ha sido la de ofrecer una formación de máxima calidad, con los medios apropiados y adaptándonos a la disponibilidad de tiempo de nuestros alumnos, por eso tenemos la más amplia disponibilidad de horarios y días para tomar los cursos.
                        </p>

                        <p className="mx-auto  text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                            Nuestro objetivo es la formación de navegantes con sólidos conocimientos en todas las áreas que la náutica comprende. En Nuestra escuela los alumnos pueden realizar los cursos correspondientes a todas las habilitaciones náuticas, comenzando por Conductor Náutico o directamente por Timonel, continuando con Patrón de Yate, para finalizar con la mayor habilitación náutica deportiva, la de Piloto de Yate.
                        </p>

                        <p className="mx-auto  text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                            Además de los cursos regulares, los alumnos pueden complementar sus estudios con una amplia variedad de clínicas de perfeccionamiento. Para ello contamos con los mejores instructores y profesores especializados en las distintas disciplinas que la actividad comprende. Contamos con la flota de embarcaciones más adecuada para la enseñanza, razones por las que nos hemos convertido en líderes de la enseñanza náutica de recreo.
                        </p>

                        <p className="mx-auto  text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                            Además, al formar parte de nuestra comunidad de antiguos alumnos, accederá a servicios exclusivos, como; asesoramiento en la compra de embarcación, planificación de derrota para la navegación a distintos puertos, dirección de obra en embarcaciones, dirección y asesoramiento en reparación de embarcaciones, traslados de embarcaciones, participar en travesías de fin de semana o en vacaciones, cursos especiales a bordo de nuestras embarcaciones, prácticas de perfeccionamiento y recibirá gratuitamente nuestro boletín donde le informaremos de la actualidad en la náutica de recreo, cursos y actividades de su interés.No olvide que, a la hora de salir a navegar, su seguridad y la de su tripulación dependerá de sus conocimientos por ello, infórmese de nuestras modalidades de cursos.
                        </p>

                        
                        <p className="mx-auto  text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                            No lo dude, la Escuela del Club Náutico Córdoba es su mejor opción. Venga a conocernos, lo llevaremos a buen puerto!
                        </p>

                       
                        <p className="mx-auto  text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                            Esperando verlo pronto a bordo, le deseamos, Mar Llana y Buenos Vientos
                        </p>

                        

                    </div>

                    <div className="mt-12 grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-5 justify-center">
                        <div className="flex flex-col items-center space-y-2">
                            <img
                            src="/src/assets/img/nos1.jpg"
                            width={200}
                            height={200}
                            alt="John Doe"
                            className="h-[200px] w-[200px] rounded-full object-cover"
                            />
                            <h3 className="text-lg font-semibold">Miguel Ángel Romero (Micky)</h3>
                            <p className="text-gray-500 dark:text-gray-400">CEO</p>
                        </div>
                        <div className="flex flex-col items-center space-y-2">
                            <img
                            src="/src/assets/img/nos1.jpg"
                            width={200}
                            height={200}
                            alt="Jane Smith"
                            className="h-[200px] w-[200px] rounded-full object-cover"
                            />
                            <h3 className="text-lg font-semibold">Bautista</h3>
                            <p className="text-gray-500 dark:text-gray-400">CTO</p>
                        </div>
                        <div className="flex flex-col items-center space-y-2">
                            <img
                            src="/src/assets/img/nos1.jpg"
                            width={200}
                            height={200}
                            alt="Michael Johnson"
                            className="h-[200px] w-[200px] rounded-full object-cover"
                            />
                            <h3 className="text-lg font-semibold">Michael Johnson</h3>
                            <p className="text-gray-500 dark:text-gray-400">COO</p>
                        </div>
                        <div className="flex flex-col items-center space-y-2">
                            <img
                            src="/src/assets/img/nos1.jpg"
                            width={200}
                            height={200}
                            alt="Emily Davis"
                            className="h-[200px] w-[200px] rounded-full object-cover"
                            />
                            <h3 className="text-lg font-semibold">Emily Davis</h3>
                            <p className="text-gray-500 dark:text-gray-400">CFO</p>
                        </div>
                        <div className="flex flex-col items-center space-y-2">
                            <img
                            src="/src/assets/img/nos1.jpg"
                            width={200}
                            height={200}
                            alt="Sarah Lee"
                            className="h-[200px] w-[200px] rounded-full object-cover"
                            />
                            <h3 className="text-lg font-semibold">Sarah Lee</h3>
                            <p className="text-gray-500 dark:text-gray-400">CIO</p>
                        </div>
                    </div>
                </div>
            </section>



            <Footer/>

        </>
            
    );
};

export default Nosotros;