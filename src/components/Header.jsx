import React from "react";

function Header() {
  return (
    <header className="header">
      <h1 className="visually-hidden">Tip Calculator</h1>
      <div className="logo-container">
        <img className="logo" src="./images/logo.svg" alt="splitter logo" />
      </div>
    </header>
  );
}

export default Header;
