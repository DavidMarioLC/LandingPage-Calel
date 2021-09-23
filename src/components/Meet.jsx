import imageMeeting from "../images/image-meeting.png";
import imageCordination from "../images/image-cordination.png";

export default function Meet() {
  return (
    <section id="Reuniones" className="meet" aria-label="meet">
      <div className="wrapper">
        <div className="meet__content">
          <h3 className="meet__title">
            Programe reuniones sin tanto intercambio de correos electrónicos
          </h3>
          <p className="meet__paragraph">
            Calel simplifica la programación ofreciendo únicamente horarios que
            se adapten a su disponibilidad en todos sus calendarios.
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
              <h4 className="meet__card__title">
                Reúnase de la forma que desee
              </h4>
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
              <h4 className="meet__card__title">
                Reúnase de la forma que desee
              </h4>
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
  );
}
