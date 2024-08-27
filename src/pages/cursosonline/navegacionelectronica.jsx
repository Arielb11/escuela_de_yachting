import Header from "../../components/Header/header";
import Footer from "../../components/footer";
import { Link } from "react-router-dom";

import React, { useState } from "react";

// Button Component
function Button({ children, size, className }) {
  return (
    <button className={`btn ${size} ${className}`}>
      {children}
    </button>
  );
}

// Accordion Components
function Accordion({ children }) {
  return <div>{children}</div>;
}

function AccordionItem({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <div onClick={() => setIsOpen(!isOpen)}>
        {children[0]}
      </div>
      {isOpen && <div>{children[1]}</div>}
    </div>
  );
}

function AccordionTrigger({ children }) {
  return <div>{children}</div>;
}

function AccordionContent({ children }) {
  return <div>{children}</div>;
}

// CheckIcon Component
function CheckIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}

// Main Component
export default function Navegacionelec() {
  return (
    <div >
        <Header />
            <div className="w-full max-w-6xl mx-auto py-12 md:py-20 mt-36">
                <div className="grid gap-8 md:gap-12">
                  <div className="grid gap-4">
                    <h1 className="text-3xl md:text-5xl font-bold text-gray-600 body-font">Curso de Navegacion Electronica (Online)</h1>
                    <p className="text-lg md:text-xl text-gray-500 ">
                    El Curso de Navegación Electrónica está orientado fundamentalmente a la utilización de de la computadora personal en navegación, a través del conocido programa Open CPN, como así también se abordará el sistema  Navionics. 
                    </p>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <img
                        src="../assets/img/curso1.jpg"
                        alt="Curso de Navegación"
                        width={600}
                        height={400}
                        className="rounded-lg object-cover w-full aspect-[3/2]"
                    />
                    <img
                        src="../assets/img/curso2.jpg"
                        alt="Curso de Navegación"
                        width={600}
                        height={400}
                        className="rounded-lg object-cover w-full aspect-[3/2]"
                    />
                    <img
                        src="../assets/img/curso3.jpg"
                        alt="Curso de Navegación"
                        width={600}
                        height={400}
                        className="rounded-lg object-cover w-full aspect-[3/2]"
                    />
                  </div>
                  <div className="grid gap-8 md:grid-cols-2 items-start">
                    <div className="grid gap-4">
                        <div className="grid gap-2">
                          <h2 className="text-2xl md:text-3xl font-bold">Detalles del Curso</h2>
                          <p className="text-gray-700 ">
                          Durante el mismo se tratarán en profundidad todas las posibilidades que brindan dichas aplicaciones en el trabajo con cartas náuticas, la creación de waypoints y rutas, establecer áreas de pesca, como así también en la planificación de una derrota cualquiera. La finalidad de esta clínica, una vez concluida, es que el alumno pueda conectar su PC a algún dispositivo GPS y utilizarla a modo de Chartplotter, tanto sea durante la navegación como en el trabajo previo del navegante, crear rutas de navegación y situar campos de pesca. A cada alumno se le proveerá: Open CPN, Cartografía completa y actualizada para notebook, apuntes completos, drivers y todos los elementos necesarios. Incluye cartografía electrónica, software, drivers, apuntes completos y soporte técnico permanente.
                          </p>
                        </div>
                        <hr />
                        <div className="grid gap-2">
                          <h2 className="text-2xl md:text-3xl font-bold">Objetivos del Curso</h2>
                          <ul className="space-y-2 text-gray-700 ">
                              <li>
                              <CheckIcon className="mr-2 inline-block h-4 w-4 text-primary" />
                              Dominar el uso de brújulas, GPS y otros instrumentos de navegación
                              </li>
                              <li>
                              <CheckIcon className="mr-2 inline-block h-4 w-4 text-primary" />
                              Dominar el establecimiento de áreas de pesca y la planificación de derrotas.
                              </li>
                              <li>
                              <CheckIcon className="mr-2 inline-block h-4 w-4 text-primary" />
                              Conectar la PC a un dispositivo GPS y utilizarla como Chartplotter.
                              </li>
                              <li>
                              <CheckIcon className="mr-2 inline-block h-4 w-4 text-primary" />
                              Crear y situar campos de pesca durante la navegación y el trabajo previo del navegante.
                              </li>
                          </ul>
                        </div>
                        <hr />
                        <div className="grid gap-2">
                          <h2 className=" text-red-700 text-2xl md:text-3xl font-bold">Importante</h2>
                          <ul className="space-y-2 text-gray-700 ">
                              <li>
                              <span className="mr-3">&#9875;</span>
                              Los Alumnos, docentes, personal administrativo y egresados de la UNIVERSIDAD CATÓLICA DE CÓRDOBA reciben un 15% de descuento sobre las cuotas de los No-Socios
                              </li>
                              <li>
                              <span className="mr-3">&#9875;</span>
                              Pago total de contado recibe un 10% de descuento
                              </li>
                              <li>
                              <span className="mr-3">&#9875;</span>
                              Los No-Socios abonaran al Club Náutico Córdoba cuotas como Socios Pasantes durante los meses de asistencia presencial por el uso de las instalaciones durante las clases prácticas.
                              </li>
                              <li>
                              <span className="mr-3">&#9875;</span>
                              La cuota cursante del Club está sujeta a modificación sin previo aviso
                              </li>
                          </ul>
                        </div>
                    </div>
                    <div className="grid gap-4">
                        <div className="grid gap-2">
                          <h2 className="text-2xl md:text-3xl font-bold text-center">Precios</h2>
                          <div >
                            <div className="container px-6  mx-auto">
                                <div className="grid grid-cols-1 gap-8 mt-7 xl:mt-12 xl:gap-12 md:grid-cols-2 ">
                                    <div className="w-full p-8 space-y-4 text-center bg-azul-edit rounded-lg">
                                        <p className="font-medium text-gray-200 uppercase">Socios</p>

                                        <h2 className="text-3xl font-bold text-white uppercase ">
                                            $135.000
                                        </h2>
                                        <p className="text-white">+</p>
                                        <p className="font-medium text-gray-200">Inscripcion: $85.000 </p>
                                        <Link to="/formulario">
                                          <button className="w-full px-4 py-2 mt-10 tracking-wide text-blue-500 capitalize transition-colors duration-300 transform bg-white rounded-md hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:ring focus:ring-gray-200 focus:ring-opacity-80">
                                              Inscribirse
                                          </button>
                                        </Link>
                                        

                                    </div>

                                    <div className="w-full p-8 space-y-4 text-center bg-azul-edit rounded-lg">
                                        <p className="font-medium text-gray-200 uppercase">NO Socios</p>

                                        <h2 className="text-3xl font-bold text-white uppercase ">
                                            $160.000
                                        </h2>
                                        <p className="text-white">+</p>
                                        <p className="font-medium text-gray-200">Inscripcion: $100.000 </p>

                                        <Link to="/formulario">
                                          <button className="w-full px-4 py-2 mt-10 tracking-wide text-blue-500 capitalize transition-colors duration-300 transform bg-white rounded-md hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:ring focus:ring-gray-200 focus:ring-opacity-80">
                                              Inscribirse
                                          </button>
                                        </Link>

                                    </div>
                                </div>
                            </div>
                        </div>
                        </div>
                        <div className="grid gap-2">
                          <h2 className="text-2xl md:text-3xl font-bold">Metodos de pago</h2>
                          <div className="flex items-center space-x-4">
                            <img src="../assets/img/billete-de-banco.png" alt="" className="h-5 w-5"/>
                            <p className="text-gray-500 text-base">
                              Efectivo
                            </p>
                          </div>
                          <div className="flex items-center space-x-4">
                            <img src="../assets/img/cajero-automatico.png" alt="" className="h-5 w-5"/>
                            <p className="text-gray-500 text-base">
                              Deposito
                            </p>
                          </div>
                          <div className="flex items-center space-x-4">
                            <img src="../assets/img/transferencia-movil.png" alt="" className="h-5 w-5"/>
                            <p className="text-gray-500 text-base">
                              Transferencia
                            </p>
                          </div>
                        </div>
                        <div className="grid gap-2">
                          <h2 className="text-2xl md:text-3xl font-bold">Duración</h2>
                          <p className="text-gray-500 ">
                          5 semanas
                          </p>
                        </div>
                        <div className="grid gap-2">
                          <h2 className="text-2xl md:text-3xl font-bold">Modalidad</h2>
                          
                          <p className="text-gray-500 ">
                            <span className="mr-3">&#9875;</span>
                            Clases en Vivo e Interactivas: Las clases se dictan en vivo por Zoom, permitiendo preguntas directas al profesor. Además, se mantendrá contacto continuo a través de grupos de WhatsApp y se ofrecerán horarios extra para consultas telefónicas
                          </p>
                          
                          <p className="text-gray-500 ">
                            <span className="mr-3">&#9875;</span>
                            Acceso y Material de Estudio: Los cursantes recibirán un usuario y contraseña para acceder al aula virtual, donde podrán descargar el material didáctico necesario.
                          </p>
                        </div>
                    </div>
                </div>
                <div className="grid gap-4">
                  <h2 className="text-2xl md:text-3xl font-bold">Nuestros Instructores</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div className="grid gap-4">
                        <img
                            src="../assets/img/nos1.jpg"
                            alt="Instructor 1"
                            width={100}
                            height={100}
                            className="rounded-full w-20 h-20 object-cover"
                        />
                      <div className="grid gap-1">
                          <h3 className="font-semibold">Porf.  Alejandro Kalfayan </h3>
                          <p className="text-gray-500 ">
                          Marino Mercante, Capt Fluvial, Piloto,Consultor/Asesor Naval.
                          </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="grid gap-10 max-w-2xl mx-auto p-6">
                  <h2 className="text-3xl md:text-4xl font-bold text-center mb-2 text-gray-800">Preguntas Frecuentes</h2>
                  <Accordion>
                    <AccordionItem>
                      <AccordionTrigger className="group cursor-pointer p-5 border border-gray-300 rounded-lg shadow-md hover:shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1 bg-white w-full">
                        <div className="mb-5 flex items-center justify-between w-full">
                          <span className="text-lg font-semibold text-gray-700 group-hover:text-blue-600 transition duration-300 ease-in-out">¿Qué se incluye en el curso de navegación avanzada?</span>
                          <svg className="w-6 h-6 text-gray-500 group-hover:text-blue-600 transition duration-300 ease-in-out ml-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                          </svg>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent className="p-6 bg-gray-50 border-t border-gray-300 rounded-b-lg shadow-inner">
                        <p className="text-gray-600 leading-relaxed">
                          El curso de navegación avanzada incluye:
                          <ul className="list-disc pl-6 space-y-2 mt-2">
                            <li>Uso de brújulas, GPS y otros instrumentos de navegación</li>
                            <li>Planificación de rutas seguras y eficientes</li>
                            <li>Técnicas de navegación en diferentes entornos (mar, montaña, selva)</li>
                            <li>Toma de decisiones en situaciones de emergencia</li>
                            <li>Prácticas de campo y simulaciones realistas</li>
                          </ul>
                        </p>
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem>
                      <AccordionTrigger className="group cursor-pointer p-5 border border-gray-300 rounded-lg shadow-md hover:shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1 bg-white w-full">
                        <div className="mb-5 flex items-center justify-between w-full">
                          <span className="text-lg font-semibold text-gray-700 group-hover:text-blue-600 transition duration-300 ease-in-out">¿Qué nivel de experiencia se requiere para el curso?</span>
                          <svg className="w-6 h-6 text-gray-500 group-hover:text-blue-600 transition duration-300 ease-in-out ml-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                          </svg>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent className="p-6 bg-gray-50 border-t border-gray-300 rounded-b-lg shadow-inner">
                        <p className="text-gray-600 leading-relaxed">
                          Este curso está diseñado para personas con un nivel intermedio de experiencia en navegación. Se recomienda tener conocimientos básicos previos, pero no es necesario ser un experto. Durante el curso, se cubrirán desde conceptos fundamentales hasta técnicas avanzadas, de manera que todos los participantes puedan mejorar sus habilidades.
                        </p>
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem>
                      <AccordionTrigger className="group cursor-pointer p-5 border border-gray-300 rounded-lg shadow-md hover:shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1 bg-white w-full">
                        <div className="mb-5 flex items-center justify-between w-full">
                          <span className="text-lg font-semibold text-gray-700 group-hover:text-blue-600 transition duration-300 ease-in-out">¿Hay algún requisito de equipo o material?</span>
                          <svg className="w-6 h-6 text-gray-500 group-hover:text-blue-600 transition duration-300 ease-in-out ml-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                          </svg>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent className="p-6 bg-gray-50 border-t border-gray-300 rounded-b-lg shadow-inner">
                        <p className="text-gray-600 leading-relaxed">
                          No se requiere equipo o material específico para participar en el curso. Proporcionaremos todos los instrumentos de navegación necesarios durante las sesiones. Sin embargo, se recomienda que los estudiantes tengan acceso a una brújula y un GPS básico para practicar fuera de las clases.
                        </p>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </div>
            </div>
        </div>
        <Footer />
    </div>
  );
}