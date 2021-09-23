import React from "react";

export default function Menu() {
  function handleMenu(e) {
    console.log(e);
  }
  return (
    <div onClick={handleMenu} className="menu-icon header__menu">
      <span className="menu-icon__stick"></span>
    </div>
  );
}
