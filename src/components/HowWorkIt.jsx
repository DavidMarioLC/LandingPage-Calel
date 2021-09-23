import imageCalendly from "../images/image-calendly.png";

export default function HowWorkIt() {
  return (
    <section id="Funcionamiento" className="howWorkIt" aria-label="howWorkIt">
      <div className="wrapper">
        <div className="howWorkIt__content">
          <p className="howWorkIt__prevtitle">CÓMO FUNCIONA</p>
          <h3 className="howWorkIt__title">Ver Calel en acción</h3>
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
              <h3 className="description__title">Cree sencillas reglas</h3>
              <p className="description__paragraph">
                Dígale a Calendly cuáles son sus preferencias en cuanto a la
                disponibilidad y este hará el trabajao por usted.
              </p>
            </div>
            <div className="description">
              <div className="description__number">2.</div>
              <h3 className="description__title">Comparta su enlace</h3>
              <p className="description__paragraph">
                Redirija a los invitados al elace de Calendly o intégrelo en
                sitios web.
              </p>
            </div>
            <div className="description">
              <div className="description__number">3.</div>
              <h3 className="description__title">Reciba reservas</h3>
              <p className="description__paragraph">
                Cuando se elige una hora, el evento se añade en su calendario.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
