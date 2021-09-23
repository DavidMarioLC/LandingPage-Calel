import React from "react";
import compasImageLogo from "../images/logo-cliente-compass.png";
import dropboxImageLogo from "../images/logo-cliente-drop.png";
import ebayImageLogo from "../images/logo-cliente-ebay.png";
import lazboyImageLogo from "../images/logo-cliente-lazboy.png";
import gartnerImageLogo from "../images/logo-cliente-gartner.png";
import twilioImageLogo from "../images/logo-cliente-twilio.png";
export default function Clients() {
  return (
    <section id="Empresas" className="clients" aria-label="Clients">
      <div className="wrapper">
        <div className="clients__content">
          <h2 className="clients__title">
            Programación simplificada para más de <span>200 000 000</span>{" "}
            reuniones
          </h2>
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
  );
}
