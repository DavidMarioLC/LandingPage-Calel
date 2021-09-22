import heroImage from "../images/hero-image.svg";
export default function Hero() {
  return (
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
  );
}
