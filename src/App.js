import "./sass/main.scss";
import logo from "./images/logo.svg";
// import Header from "./components/Header";

function App() {
  return (
    <>
      <button className="btn btn--primary">Regístrese</button>
      <button className="btn btn--secondary">Iniciar sesión</button>
      <button className="btn btn--dark">Iniciar sesión</button>

      <div className="input">
        <input className="input__form" type="text" placeholder="Regístrese" />
        <button className="btn btn--dark">Iniciar sesión</button>
      </div>

      <div className="description">
        <div className="description__number">1.</div>
        <h5 className="description__title">Cree sencillas reglas</h5>
        <p className="description__paragraph">
          Dígale a Calendly cuáles son sus preferencias en cuanto a la
          disponibilidad y este hará el trabajao por usted.
        </p>
      </div>
      <header className="header">
        <img
          className="header__logo"
          src={logo}
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
          <button className="btn btn--secondary">Iniciar sesión</button>
          <button className="btn btn--primary">Regístrese</button>
        </div>
      </header>
    </>
  );
}

export default App;
