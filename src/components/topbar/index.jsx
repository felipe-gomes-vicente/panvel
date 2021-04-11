import React from "react";

import Logo from "../../assets/images/logo-white.svg";

import "./style.scss";

function TopBarComponent() {
  return (
    <div className="topBar">
      <nav>
        <img className="logo" src={Logo} alt="Logo Branco PanVel" />
        <div className="categories">
          <span className="material-icons hamburguer-icon">menu</span>
          <b>Categorias</b>
        </div>
        <input
          type="search"
          className="search"
          placeholder="O que você Procura?"
        />
        <div className="login">
          <span className="material-icons signin-icon">account_circle</span>
          <b>Entrar</b>
        </div>
        <span className="material-icons cart-icon">shopping_basket</span>
      </nav>
    </div>
  );
}

export default TopBarComponent;
