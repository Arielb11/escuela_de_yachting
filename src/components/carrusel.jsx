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
                <a href="#" className="brand"><img src="/src/assets/img/file.png" alt="" /></a>
                <div className="menu-btn"></div>

                <div className="navigation">
                    <div className="navigation-items">
                        <a href="/">Inicio</a>
                        <a href="/cursos">Cursos</a>
                        <a href="">Viajes</a>
                        <a href="">Cursos Online</a>
                        <a href="">Nosotros</a>
                        <a href="">Contactanos</a>
                    </div>
                </div>
            </header>

            <section className="home">
                <video className = "video-slide"  src="/src/assets/videos/video1.mp4" autoPlay muted loop></video>
                <video className = "video-slide"  src="/src/assets/videos/video2.mp4" autoPlay muted loop></video>
                <video className = "video-slide"  src="/src/assets/videos/video3.mp4" autoPlay muted loop></video>
                
                

                <div className="content active">
                    <h1>Escuela de Yatching</h1>
                    <p>La Escuela de Náutica Deportiva del Club Náutico Córdoba se fundó en 1997 en Villa Carlos Paz, Argentina. Desde los comienzos, nuestra filosofía siempre ha sido la de ofrecer una formación de máxima calidad, con los medios apropiados y adaptándonos a la disponibilidad de tiempo de nuestros alumnos, por eso tenemos la más amplia disponibilidad de horarios y días para tomar los cursos.</p>
                    <a href="#">Saber mas</a>
                </div>
                <div className="content">
                    <h2>Curso de Timonel</h2>
                    <p>La Escuela de Náutica Deportiva del Club Náutico Córdoba se fundó en 1997 en Villa Carlos Paz, Argentina. Desde los comienzos, nuestra filosofía siempre ha sido la de ofrecer una formación de máxima calidad, con los medios apropiados y adaptándonos a la disponibilidad de tiempo de nuestros alumnos, por eso tenemos la más amplia disponibilidad de horarios y días para tomar los cursos.</p>
                    <a href="#">Saber mas</a>
                </div>
                <div className="content">
                    <h2>Curso de caca</h2>
                    <p>La Escuela de Náutica Deportiva del Club Náutico Córdoba se fundó en 1997 en Villa Carlos Paz, Argentina. Desde los comienzos, nuestra filosofía siempre ha sido la de ofrecer una formación de máxima calidad, con los medios apropiados y adaptándonos a la disponibilidad de tiempo de nuestros alumnos, por eso tenemos la más amplia disponibilidad de horarios y días para tomar los cursos.</p>
                    <a href="#">Saber mas</a>
                </div>

                <div className="media-icons">
                    <a href="#"><i class="fab fa-facebook-f"></i></a>
                    <a href="#"><i class="fab fa-instagram"></i></a>
                </div>

                <div className="slider-navigation">
                    <div className="nav-btn"></div>
                    <div className="nav-btn"></div>
                    <div className="nav-btn"></div>
                </div>

            </section>


        </>
    )
}

export default Carrusel;