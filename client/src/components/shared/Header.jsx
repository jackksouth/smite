import logo from '../shared/assets/smitten.png'
import React from "react";
import "./Header.scss";

export default function () {
  return (
    <div className="header">
      <div className="logoThing">
        <img className="logo" src={logo} alt="logo" />
      </div>
    </div>

  );
}