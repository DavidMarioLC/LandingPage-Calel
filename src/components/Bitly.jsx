import imageBitly from "../images/image-girl.png";
import bitlyDecorator from "../images/decorator-yellow.png";

export default function Bitly() {
  return (
    <section className="bitly">
      <div className="wrapper">
        <div className="bitly__content">
          <figure className="bitly__img">
            <img src={imageBitly} alt="" />
          </figure>
          <div className="bitly__description">
            <span className="bitly__prevTitle">BITLY</span>
            <h3 className="bitly__title">
              Los representantes de desarrollo de ventas no solo acaban con todo
              un calendario lleno de clientes potenciales con los que hablar,
              sino que estos clientes potenciales asisten más a las reuniones.
            </h3>
            <h4 className="bitly__team">Dave Rotholz</h4>
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
  );
}
