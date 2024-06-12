import "./header.css";
import '@fortawesome/fontawesome-free/css/all.min.css';
import React, { useEffect } from 'react';

const Header = () => {

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

    return (
        <>
            <header className="doble">
                <a href="/" className="brand"><img src="/src/assets/img/logo.png" alt="Logo" /></a>
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
        </>
    )
}

export default Header;