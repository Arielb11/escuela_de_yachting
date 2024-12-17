import "./carrusel.css";
import '@fortawesome/fontawesome-free/css/all.min.css';
import React, { useEffect } from 'react';





const Carrusel = () => {
  
    useEffect(() => {
        // Selecciona el elemento con la clase 'menu-btn'
        const menuBtn = document.querySelector(".menu-btn");
        const navigation = document.querySelector(".navigation");
    
        // Asegúrate de que el elemento existe antes de añadir el event listener
        if (menuBtn, navigation) {
          const handleClick = () => {
            menuBtn.classList.toggle("active");
            navigation.classList.toggle("active");
          };
    
          menuBtn.addEventListener("click", handleClick);
          navigation.addEventListener("click", handleClick);
          
          // Limpia el event listener cuando el componente se desmonte
          return () => {
            menuBtn.removeEventListener("click", handleClick);
            navigation.removeEventListener("click", handleClick);
          };
        }
      }, []);

      useEffect(() => {
        const btns = document.querySelectorAll('.nav-btn');
        const videos = document.querySelectorAll('.video-slide');
        const contenidos = document.querySelectorAll('.content');
      
        const sliderNav = (index) => {
          // Ocultar todos los videos
          videos.forEach((video) => {
            video.style.display = 'none';
          });
          contenidos.forEach((contenido) => {
            contenido.style.display = 'none';
          });
      
          // Mostrar el video correspondiente al botón clicado
          videos[index].style.display = 'block';
          contenidos[index].style.display = 'block';
      
          // Remover y agregar clase 'active' a los botones de navegación
          btns.forEach((btn, i) => {
            if (i === index) {
              btn.classList.add('active');
            } else {
              btn.classList.remove('active');
            }
          });

          contenidos.forEach((contenido, i) => {
            if (i === index) {
              contenido.classList.add('active');
            } else {
              contenido.classList.remove('active');
            }
          });
        };
      
        btns.forEach((btn, i) => {
          btn.addEventListener('click', () => {
            sliderNav(i);
          });
        });
      
        // Limpiar event listeners cuando el componente se desmonte
        return () => {
          btns.forEach((btn, i) => {
            btn.removeEventListener('click', () => {
              sliderNav(i);
            });
          });
        };
      }, []); // El array vacío hace que esto se ejecute solo una vez cuando el componente se monta

    return (
        <>
            <header>
                <a href="/" className="brand"><img src="../assets/img/file.png" alt="Logo" /></a>
                <div className="menu-btn"></div>

                <div className="navigation">
                    <div className="navigation-items">
                        <a href="/" className="mbi">Inicio</a>

                        <div className="dropdown">
                            <a href="" className="mbi">Cursos</a>
                            <div className="dropdown-content">
                                <a href="/Conductornautico">Conductor Nautico</a>
                                <a href="/Timonelvelamotor">Timonel Vela y Motor</a>
                                <a href="/Timonelyatemotor">Timonel Yate Motor</a>
                                <a href="/Patrondeyate">Patron de Yate</a>
                                <a href="/Perfeccionamiento">Perfeccionamiento</a>
                            </div>
                        </div>

                        <div className="dropdown">
                            <a className="mbi" href="" >Cursos Online</a>
                            <div className="dropdown-content">
                                <a href="/navegacionastronomica">Navegacion Astronomica</a>
                                <a href="/meteorologiapractica">Meteorologia Practica</a>
                                <a href="/navegacionelectronica">Navegacion Electronica</a>
                                <a href="/meteorologiaaeronautica">Meteorologia Aeronautica</a>
                            </div>
                        </div>
                        <a href="/Viajes" className="mbi">Viajes</a>
                        <a href="/Nosotros" className="mbi">Nosotros</a>
                        <a href="/Formulario" className="mbi">Inscribirse</a>
                    </div>
                </div>
            </header>

            <section className="home">
                <div className="carousel-container">  
                  <video className = "video-slide active"  src="../assets/videos/video3.mp4" autoPlay muted loop playsInline></video>
                  <video className = "video-slide"  src="../assets/videos/video1.mp4" autoPlay muted loop playsInline></video>
                  <video className = "video-slide"  src="../assets/videos/video2.mp4" autoPlay muted loop playsInline></video>
                  <video className = "video-slide"  src="../assets/videos/video4.mp4" autoPlay muted loop playsInline></video>
                  <video className = "video-slide"  src="../assets/videos/video5.mp4" autoPlay muted loop playsInline></video>
                  <video className = "video-slide"  src="../assets/videos/video6.mp4" autoPlay muted loop playsInline></video>
                </div>
                

                <div className="content active">
                    <h2>Escuela de Yachting</h2>
                    <p>La Escuela de Náutica Deportiva del Club Náutico Córdoba se fundó en 1997 en Villa Carlos Paz, Argentina. Desde los comienzos, nuestra filosofía siempre ha sido la de ofrecer una formación de máxima calidad, con los medios apropiados y adaptándonos a la disponibilidad de tiempo de nuestros alumnos, por eso tenemos la más amplia disponibilidad de horarios y días para tomar los cursos.</p>
                    <a href="/nosotros">Saber mas</a>
                </div>
                <div className="content">
                    <h2>Curso de Conductor Nautico</h2>
                    <p>En este curso aprenderás a ser capitán o tripulante de una embarcación. Desarrollarás habilidades prácticas en el barco escuela en circunstancias reales de navegación. Además incorporarás conocimientos de meteorología, seguridad, reglamentación y navegación, conforme al programa oficial de la Prefectura Naval Argentina.</p>
                    <a href="/conductornautico">Saber mas</a>
                </div>
                <div className="content">
                    <h2>Curso de Timonel Vela y Motor</h2>
                    <p>El Curso de Timonel de yates a vela y motor es el ideal para quien desea adquirir o complementar conocimientos náuticos que le permitan obtener una habilitación de gran amplitud, con la posibilidad de despachar embarcaciones deportivas en aguas nacionales e internacionales (Costas y archipiélagos de América, Europa y Polinesia).</p>
                    <a href="/timonelvelamotor">Saber mas</a>
                </div>
                <div className="content">
                    <h2>Patron de Yate</h2>
                    <p>Si ya sos timonel y querés avanzar, este es tu próximo paso. Los objetivos de este curso son profundizar en las artes marineras y cubrir Meteorología, Seguridad, Reglamentación y Navegación, con énfasis en Navegación por Estima y Costera. Se adquieren conocimientos teóricos y prácticos para una navegación segura como patrón de yate. También se incluye la práctica del uso del sextante.</p>
                    <a href="/patrondeyate">Saber mas</a>
                </div>
                <div className="content">
                    <h2>Curso de Timonel Yate y Motor</h2>
                    <p>El Curso de Timonel de yates a motor es el ideal para quien desea adquirir o complementar conocimientos náuticos que le permitan obtener una habilitación de gran amplitud, con la posibilidad de despachar embarcaciones deportivas en aguas nacionales e internacionales (Costas y archipiélagos de América, Europa y Polinesia).</p>
                    <a href="/timonelyatemotor">Saber mas</a>
                </div>
                <div className="content">
                    <h2 className="bug">Perfeccionamiento </h2>
                    <p>El Curso es ideal para quienes desean mejorar habilidades en regatas, puesta a punto, maniobras específicas, trimado de velas, ingreso y salida de puertos a vela o motor, fondeo con ancla, amarre en muelle o marina. Incluye cuidados del barco, navegación con mal tiempo, capear temporales, meteorología práctica e incorporar conocimientos avanzados en todas las áreas de la navegación.</p>
                    <a href="/perfeccionamiento">Saber mas</a>
                </div>
                

                <div className="media-icons">
                    <a href="https://www.facebook.com/escuelanauticacba"><i className="fab fa-facebook-f"></i></a>
                    <a href="https://www.instagram.com/escueladeyachting"><i className="fab fa-instagram"></i></a>
                </div>



                <div className="slider-navigation">
                    <div className="nav-btn active"></div>
                    <div className="nav-btn"></div>
                    <div className="nav-btn"></div>
                    <div className="nav-btn"></div>
                    <div className="nav-btn"></div>
                    <div className="nav-btn"></div>
                </div>

            </section>


        </>
    )
}

export default Carrusel;