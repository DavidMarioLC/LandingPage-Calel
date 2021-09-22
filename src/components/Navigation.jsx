export default function Navigation({ items }) {
  return (
    <nav className="header__nav">
      <ul className="menu header__menu">
        {items.map((item, index) => (
          <li key={index} className="menu__item">
            <a className="menu__link" href={`#${item}`}>
              {item}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
