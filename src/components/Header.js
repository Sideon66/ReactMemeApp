import React from "react";

import "./Header.css";

function Header() {
  return (
    <header className="header">
      <img
        src="images/troll-face.webp"
        className="header--image"
        alt="troll-face"
      />
      <h2 className="header--title">Header component</h2>
      <h4 className="header--project">React Project</h4>
    </header>
  );
}

export default Header;
