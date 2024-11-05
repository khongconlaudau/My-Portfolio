import React from "react";
import "./Skills.css";
import TechnicalSkills from "./TechnicalSkills";
import SoftSkills from "./SoftSkills";
const Skills = () => {
  return (
    <section className="skills section" id="skills">
      <div className="about-intro">
        <h2 className="about-me">Skills</h2>
        <span className="section-subtitle">My Personal Skills</span>
      </div>

      <div className="skill-container container grid">
        <TechnicalSkills />
        <SoftSkills />
      </div>
    </section>
  );
};

export default Skills;
