import Logo from "./Logo";
import logoImage from "../images/logo.svg";

export default function Footer() {
  const logoProps = {
    logo: logoImage,
    height: "36",
    width: "110",
    title: "Logo de calel",
    alt: "Logo de calel",
  };

  return (
    <footer className="footer">
      <div className="wrapper">
        <div className="footer__content">
          <Logo {...logoProps} />
          <div className="footer__about">
            <h5>Acerca de</h5>
            <ul>
              <li>
                <a href="#acerca-de-calendry">Acerca de Calendry</a>
              </li>
              <li>
                <a href="#ponganse-en-contacto">
                  Póngase en contacto con el equipo de ventas
                </a>
              </li>
              <li>
                <a href="#vacantes">Vacantes</a>
              </li>
              <li>
                <a href="#seguridad">Seguridad</a>
              </li>
              <li>
                <a href="#privacidad">Privacidad</a>
              </li>
              <li>
                <a href="#terminos">Términos</a>
              </li>
            </ul>
          </div>
          <div className="footer__assistance">
            <h5>Asistencia</h5>
            <ul>
              <li>
                <a href="#centro-de-ayuda">Centro de ayuda</a>
              </li>
              <li>
                <a href="#tutoriales-videos">Tutoriales en vídeo</a>
              </li>
            </ul>
          </div>
          <div className="footer__development">
            <h5>Desarrolladores</h5>
            <ul>
              <li>
                <a href="#herramientas-de-desarrollo">
                  Herramientas de desarrollo
                </a>
              </li>
            </ul>
          </div>
          <div className="footer__solutions">
            <h5>Soluciones</h5>
            <ul>
              <li>
                <a href="#exito-cliente">Éxito de clientes</a>
              </li>
              <li>
                <a href="#ventas">Ventas</a>
              </li>
              <li>
                <a href="#contratacion">Contratación</a>
              </li>
              <li>
                <a href="#educacion">Educación</a>
              </li>
              <li>
                <a href="#particulares">Particulares</a>
              </li>
            </ul>
          </div>
          <div className="footer__funcionesPopulares">
            <h5>Funciones populares</h5>
            <ul>
              <li>
                <a href="#exito-cliente">Éxito de clientes</a>
              </li>
              <li>
                <a href="ventas">Ventas</a>
              </li>
              <li>
                <a href="#contratacion">Contratación</a>
              </li>
              <li>
                <a href="#educacion">Educación</a>
              </li>
              <li>
                <a href="#particulares">Particulares</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
