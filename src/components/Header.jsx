import Logo from "./Logo";
import Navigation from "./Navigation";
import Button from "./Button";
import Menu from "./Menu";
import logoImage from "../images/logo.svg";

export default function Header() {
  const logoProps = {
    logo: logoImage,
    height: "36",
    width: "110",
    title: "Logo de calel",
    alt: "Logo de calel",
  };

  const itemsProps = {
    items: ["Particulares", "Equipos", "Producto", "Precios", "Recursos"],
  };

  return (
    <header className="header">
      <div className="wrapper">
        <div className="header__content">
          <Logo {...logoProps} />
          <Navigation {...itemsProps} />
          <div className="header__actions">
            <Button value="Iniciar sesión" />
            <Button value="Registrese" className="primary" />
          </div>
          <Menu />
        </div>
      </div>
    </header>
  );
}
