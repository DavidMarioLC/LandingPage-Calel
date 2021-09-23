import React from "react";
export default function Navigation({ items, menu }) {
  function handleMenu() {
    menu.current.classList.remove("header__nav--active");
  }

  return (
    <nav ref={menu} className="header__nav">
      <ul className="menu header__menu">
        {items.map((item, index) => (
          <li key={index} className="menu__item">
            <a onClick={handleMenu} className="menu__link" href={`#${item}`}>
              {item}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
