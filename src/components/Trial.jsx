import React from "react";
import trialDecoratorRegister from "../images/image-register.png";
export default function Trial() {
  return (
    <section className="trial">
      <div className="wrapper">
        <div className="trial__content">
          <figure className="trial__img">
            <img src={trialDecoratorRegister} alt="" />
          </figure>
          <div className="trial__description">
            <h2 className="trial__title">Pruebe Calel gratis</h2>
            <p className="trial__subtitle">
              Tras su prueba de 14 días de nuestro plan Profesional, disfrute de
              la versión gratuita de Calendly para siempre.
            </p>
            <p className="trial__paragraph">
              Para consultar sobre nuestros planes Enterprise, haga clic aquí.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
