import "./sass/main.scss";

import imageAutomatic from "./images/image-automatice.png";
import imageProgramming from "./images/image-programacion.png";
import imageFocus from "./images/image-phone.png";

import Header from "./components/Header";
import Hero from "./components/Hero";
import Clients from "./components/Clients";
import HowWorkIt from "./components/HowWorkIt";
import Meet from "./components/Meet";
import MoreTime from "./components/MoreTime";
import Footer from "./components/Footer";
import Trial from "./components/Trial";
import Bitly from "./components/Bitly";
import Section from "./components/Section";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Clients />
      <HowWorkIt />
      <Meet />
      <MoreTime />
      <Section
        className="management"
        prevTitle="  GESTIÓN DE FLUJOS DE TRABAJO"
        title=" Automatice recordatorios y seguimientos"
        paragraph=" Calel automatiza sus reuniones con flujos de trabajo y envía
        desde correos electrónicos de recordatorio hasta notas de
        agradecimiento, para que pueda centrarse en el trabajo que solo
        usted puede realizar. Es como tener un asistente, incluso si
        tiene un negocio unipersonal."
        image={imageAutomatic}
      />
      <Section
        className="programming"
        prevTitle=" PROGRAMACIÓN BAJO DEMANDA"
        title=" Haga más contactos y reduzca las cancelaciones"
        paragraph="   Los clientes potenciales pueden programar reuniones con tan solo
        unos clics, siempre en el momento oportuno. Y se reducen las
        cancelaciones porque la reprogramación es fácil, rápida y según
        sus propias condiciones."
        image={imageProgramming}
      />
      <Section
        className="focus"
        prevTitle="EL ENFOQUE CORTÉS"
        title=" Deleite a los invitados con una programación moderna"
        paragraph=" El tiempo es un bien preciado. Calel es una manera cortés de
                reservar reuniones y otras citas, porque programar con unos
                pocos clics ahorra el máximo de tiempo para todos."
        image={imageFocus}
      />

      <Bitly />
      <Trial />
      <Footer />
    </>
  );
}

export default App;
