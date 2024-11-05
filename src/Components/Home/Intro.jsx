import React from "react";
import { FiSend } from "react-icons/fi";

const Intro = () => {
  return (
    <div className="home-intro">
      <h1 className="home-title">Mason Van <span className="hand-icon">🖖</span></h1>
      <h3 className="home-subtitle">Programmer</h3>
      <p className="home-description">
        I'm a passionate coder on a mission to turn big dreams into reality.
      </p>

      <a href="#contact" className="button button-flex">
        Say Hello <FiSend  className="button-icon"/>
      </a>
    </div>
  );
};

export default Intro;
