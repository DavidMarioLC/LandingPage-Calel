import React from "react";

export default function Menu({ showMenu }) {
  return (
    <div onClick={showMenu} className="menu-icon ">
      <span className="menu-icon__stick"></span>
    </div>
  );
}
