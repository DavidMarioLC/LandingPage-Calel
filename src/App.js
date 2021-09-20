import "./sass/main.scss";
import logo from "./images/logo.svg";
import heroImage from "./images/hero-image.svg";
import compasImageLogo from "./images/logo-cliente-compass.png";
import dropboxImageLogo from "./images/logo-cliente-drop.png";
import ebayImageLogo from "./images/logo-cliente-ebay.png";
import lazboyImageLogo from "./images/logo-cliente-lazboy.png";
import gartnerImageLogo from "./images/logo-cliente-gartner.png";
import twilioImageLogo from "./images/logo-cliente-twilio.png";
import imageCalendly from "./images/image-calendly.png";
import imageMeeting from "./images/image-meeting.png";
import imageCordination from "./images/image-cordination.png";
import imageAutomatic from "./images/image-automatice.png";
import imageProgramming from "./images/image-programacion.png";
import imageFocus from "./images/image-phone.png";
import imageBitly from "./images/image-girl.png";
import bitlyDecorator from "./images/decorator-yellow.png";
import trialDecoratorRegister from "./images/image-register.png";
// import Header from "./components/Header";

function App() {
  return (
    <>
      {/* <button className="btn btn--primary">Regístrese</button>
      <button className="btn btn--secondary">Iniciar sesión</button>
      <button className="btn btn--dark">Iniciar sesión</button> */}

      <header className="header">
        <div className="wrapper">
          <div className="header__content">
            <img
              className="header__logo"
              src={logo}
              height="36"
              width="110"
              alt="Logo de calel"
              title="Logo de calel"
            />
            <nav className="header__nav">
              <ul className="menu header__menu">
                <li className="menu__item">
                  <a className="menu__link" href="#Particulares">
                    Particulares
                  </a>
                </li>
                <li className="menu__item">
                  <a className="menu__link" href="#Equipos">
                    Equipos
                  </a>
                </li>
                <li className="menu__item">
                  <a className="menu__link" href="#Producto">
                    Producto
                  </a>
                </li>
                <li className="menu__item">
                  <a className="menu__link" href="#Precios">
                    Precios
                  </a>
                </li>
                <li className="menu__item">
                  <a className="menu__link" href="#Recursos">
                    Recursos
                  </a>
                </li>
              </ul>
            </nav>
            <div className="header__actions">
              <button className="btn ">Iniciar sesión</button>
              <button className="btn btn--primary">Regístrese</button>
            </div>
            <div className="menu-icon header__menu">
              <span className="menu-icon__stick"></span>
            </div>
          </div>
        </div>
      </header>

      <section className="hero" role="banner" aria-label="Hero">
        <div className="wrapper">
          <div className="hero__content">
            <figure className="hero__image">
              <img
                src={heroImage}
                height="400"
                width="486"
                alt="Hero "
                title="Hero "
              />
            </figure>
            <div className="hero__description">
              <h1 className="hero__title">
                Programación fácil con <span>anticipación</span>
              </h1>
              <p className="hero__paragraph">
                Calel es su centro de programación de reuniones de manera
                profesional y eficiente y elimina el problema del intercambio de
                correos electrónicos para que pueda dedicar más tiempo a su
                trabajo.
              </p>
              <div className="input">
                <input
                  className="input__form"
                  type="text"
                  placeholder="Regístrese"
                />
                <button className="btn btn--dark input__button">
                  Regístrese
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="clients" aria-label="Clients">
        <div className="wrapper">
          <div className="clients__content">
            <h5 className="clients__title">
              Programación simplificada para más de <span>200 000 000</span>{" "}
              reuniones
            </h5>
            <div className="clients__logos">
              <img
                className="clients__img"
                src={compasImageLogo}
                width="174"
                height="24"
                alt="Logo compas"
                title="Logo compas"
              />
              <img
                className="clients__img"
                src={dropboxImageLogo}
                width="38"
                height="32"
                alt="Logo dropbox"
                title="Logo dropbox"
              />
              <img
                className="clients__img"
                src={ebayImageLogo}
                width="77"
                height="32"
                alt="Logo ebay"
                title="Logo ebay"
              />
              <img
                className="clients__img"
                src={lazboyImageLogo}
                width="156"
                height="24"
                alt="Logo lazboy"
                title="Logo lazboy"
              />
              <img
                className="clients__img"
                src={gartnerImageLogo}
                width="140"
                height="32"
                alt="Logo gartner"
                title="Logo gartner"
              />
              <img
                className="clients__img"
                src={twilioImageLogo}
                width="106"
                height="32"
                alt="Logo twilio"
                title="Logo twilio"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="howWorkIt" aria-label="howWorkIt">
        <div className="wrapper">
          <div className="howWorkIt__content">
            <p className="howWorkIt__prevtitle">CÓMO FUNCIONA</p>
            <h2 className="howWorkIt__title">Ver Calel en acción</h2>
            <img
              className="howWorkIt__image"
              height="331"
              width="588"
              src={imageCalendly}
              alt=" calendly"
              title=" calendly"
            />
            <div className="howWorkIt__descriptions">
              <div className="description">
                <div className="description__number">1.</div>
                <h5 className="description__title">Cree sencillas reglas</h5>
                <p className="description__paragraph">
                  Dígale a Calendly cuáles son sus preferencias en cuanto a la
                  disponibilidad y este hará el trabajao por usted.
                </p>
              </div>
              <div className="description">
                <div className="description__number">2.</div>
                <h5 className="description__title">Comparta su enlace</h5>
                <p className="description__paragraph">
                  Redirija a los invitados al elace de Calendly o intégrelo en
                  sitios web.
                </p>
              </div>
              <div className="description">
                <div className="description__number">3.</div>
                <h5 className="description__title">Reciba reservas</h5>
                <p className="description__paragraph">
                  Cuando se elige una hora, el evento se añade en su calendario.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="meet" aria-label="meet">
        <div className="wrapper">
          <div className="meet__content">
            <h3 className="meet__title">
              Programe reuniones sin tanto intercambio de correos electrónicos
            </h3>
            <p className="meet__paragraph">
              Calel simplifica la programación ofreciendo únicamente horarios
              que se adapten a su disponibilidad en todos sus calendarios.
            </p>
            <div className="meet__cards">
              <div className="meet__card">
                <figure className="meet_card__img">
                  <img
                    src={imageMeeting}
                    width="386"
                    height="346"
                    alt="aplicaciones"
                    title="aplicaciones"
                  />
                </figure>
                <h5 className="meet__card__title">
                  Reúnase de la forma que desee
                </h5>
                <p className="meet__card__paragraph">
                  Muestre disponibilidad en su horario solo los días y las horas
                  que se adapten a usted. Cuando su invitado elija la hora de la
                  reunión, se confirmará al instante.
                </p>
              </div>
              <div className="meet__card">
                <figure className="meet_card__img">
                  <img
                    src={imageCordination}
                    width="450"
                    height="346"
                    alt="aplicaciones"
                    title="aplicaciones"
                  />
                </figure>
                <h5 className="meet__card__title">
                  Reúnase de la forma que desee
                </h5>
                <p className="meet__card__paragraph">
                  Muestre disponibilidad en su horario solo los días y las horas
                  que se adapten a usted. Cuando su invitado elija la hora de la
                  reunión, se confirmará al instante.
                </p>
              </div>
            </div>
            <div className="meet__actions">
              <button className="btn btn--secondary">Utilizar Calendly</button>
            </div>
          </div>
        </div>
      </section>
      <section className="moreTime" aria-label="moreTime">
        <div className="wrapper">
          <div className="moreTime__content">
            <h2 className="moreTime__title">
              Dedique más tiempo a lo que hace mejor
            </h2>
            <p className="moreTime__paragraph">
              Al eliminar los inconvenientes e interrupciones relacionados con
              la programación de reuniones, su día estará libre para lograr sus
              objetivos.
            </p>
          </div>
        </div>
      </section>
      <section className="management">
        <div className="wrapper">
          <div className="management__content">
            <figure className="management__img">
              <img src={imageAutomatic} alt="" />
            </figure>
            <div className="management__description">
              <span className="management__prevTitle">
                GESTIÓN DE FLUJOS DE TRABAJO
              </span>
              <h3 className="management__title">
                Automatice recordatorios y seguimientos
              </h3>
              <p className="management__paragraph">
                Calel automatiza sus reuniones con flujos de trabajo y envía
                desde correos electrónicos de recordatorio hasta notas de
                agradecimiento, para que pueda centrarse en el trabajo que solo
                usted puede realizar. Es como tener un asistente, incluso si
                tiene un negocio unipersonal.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="programming">
        <div className="wrapper">
          <div className="programming__content">
            <figure className="programming__img">
              <img
                src={imageProgramming}
                alt="Imagen de la interfaz"
                title="Imagen de la interfaz"
                width="484"
                height="339"
              />
            </figure>
            <div className="programming__description">
              <span className="programming__prevTitle">
                PROGRAMACIÓN BAJO DEMANDA
              </span>
              <h3 className="programming__title">
                Haga más contactos y reduzca las cancelaciones
              </h3>
              <p className="programming__paragraph">
                Los clientes potenciales pueden programar reuniones con tan solo
                unos clics, siempre en el momento oportuno. Y se reducen las
                cancelaciones porque la reprogramación es fácil, rápida y según
                sus propias condiciones.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="focus">
        <div className="wrapper">
          <div className="focus__content">
            <figure className="focus__img">
              <img src={imageFocus} alt="" />
            </figure>
            <div className="focus__description">
              <span className="focus__prevTitle">EL ENFOQUE CORTÉS</span>
              <h3 className="focus__title">
                Deleite a los invitados con una programación moderna
              </h3>
              <p className="focus__paragraph">
                El tiempo es un bien preciado. Calel es una manera cortés de
                reservar reuniones y otras citas, porque programar con unos
                pocos clics ahorra el máximo de tiempo para todos.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="bitly">
        <div className="wrapper">
          <div className="bitly__content">
            <figure className="bitly__img">
              <img src={imageBitly} alt="" />
            </figure>
            <div className="bitly__description">
              <span className="bitly__prevTitle">BITLY</span>
              <h3 className="bitly__title">
                Los representantes de desarrollo de ventas no solo acaban con
                todo un calendario lleno de clientes potenciales con los que
                hablar, sino que estos clientes potenciales asisten más a las
                reuniones.
              </h3>
              <h5 className="bitly__team">Dave Rotholz</h5>
              <div className="bitly__decorator">
                <img
                  className="bitly__decorator__img"
                  src={bitlyDecorator}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="trial">
        <div className="wrapper">
          <div className="trial__content">
            <figure className="trial__img">
              <img src={trialDecoratorRegister} alt="" />
            </figure>
            <div className="trial__description">
              <h2 className="trial__title">Pruebe Calel gratis</h2>
              <p className="trial__subtitle">
                Tras su prueba de 14 días de nuestro plan Profesional, disfrute
                de la versión gratuita de Calendly para siempre.
              </p>
              <p className="trial__paragraph">
                Para consultar sobre nuestros planes Enterprise, haga clic aquí.
              </p>
            </div>
          </div>
        </div>
      </section>
      <footer className="footer">
        <div className="wrapper">
          <div className="footer__content">
            <img
              className="footer__logo"
              src={logo}
              height="36"
              width="110"
              alt="Logo de calel"
              title="Logo de calel"
            />
            <div className="footer__about">
              <h5>Acerca de</h5>
              <ul>
                <li>
                  <a href="#">Acerca de Calendry</a>
                </li>
                <li>
                  <a href="#">Póngase en contacto con el equipo de ventas</a>
                </li>
                <li>
                  <a href="#">Vacantes</a>
                </li>
                <li>
                  <a href="#">Seguridad</a>
                </li>
                <li>
                  <a href="#">Privacidad</a>
                </li>
                <li>
                  <a href="#">Términos</a>
                </li>
              </ul>
            </div>
            <div className="footer__assistance">
              <h5>Asistencia</h5>
              <ul>
                <li>
                  <a href="#">Centro de ayuda</a>
                </li>
                <li>
                  <a href="#">Tutoriales en vídeo</a>
                </li>
              </ul>
            </div>
            <div className="footer__development">
              <h5>Desarrolladores</h5>
              <ul>
                <li>
                  <a href="">Herramientas de desarrollo</a>
                </li>
              </ul>
            </div>
            <div className="footer__solutions">
              <h5>Soluciones</h5>
              <ul>
                <li>
                  <a href="">Éxito de clientes</a>
                </li>
                <li>
                  <a href="">Ventas</a>
                </li>
                <li>
                  <a href="">Contratación</a>
                </li>
                <li>
                  <a href="">Educación</a>
                </li>
                <li>
                  <a href="">Particulares</a>
                </li>
              </ul>
            </div>
            <div className="footer__funcionesPopulares">
              <h5>Funciones populares</h5>
              <ul>
                <li>
                  <a href="">Éxito de clientes</a>
                </li>
                <li>
                  <a href="">Ventas</a>
                </li>
                <li>
                  <a href="">Contratación</a>
                </li>
                <li>
                  <a href="">Educación</a>
                </li>
                <li>
                  <a href="">Particulares</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
