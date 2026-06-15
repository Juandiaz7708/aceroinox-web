import { useState } from "react";
import "./Header.css";
import "./Responsive.css";

function Header() {
  const [menuAbierto, setMenuAbierto] = useState(false);

  return (
    <header className="header">
      <div className="header-contenido">

        {/* Título */}
        <div className="hero-contenido">
          <h1>Aceroinox.rd</h1>
        </div>

        {/* Botón hamburguesa */}
        <div
          className="menu-toggle"
          onClick={() => setMenuAbierto(!menuAbierto)}
        >
          <i className="fas fa-bars"></i>
        </div>

        {/* Botones de navegación */}
        <div className={`acciones-header ${menuAbierto ? "active" : ""}`}>
          <a href="#servicios" className="btn-header">Quiénes somos</a>
          <a href="#categorias" className="btn-header">Proyectos</a>
          <a href="#servicios" className="btn-header">Servicios</a>
          <a href="#contacto" className="btn-header">Cotiza con nosotros</a>
        </div>

        {/* Redes sociales */}
        <div className="redes-sociales">
          <a href="https://wa.me/18293905647" target="_blank" rel="noreferrer" title="WhatsApp">
            <i className="fab fa-whatsapp"></i>
          </a>
          <a href="https://www.instagram.com/acero.inox.rd" target="_blank" rel="noreferrer" title="Instagram">
            <i className="fab fa-instagram"></i>
          </a>
        </div>

      </div>
    </header>
  );
}

export default Header;