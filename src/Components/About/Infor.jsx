import React from "react";
import { FaEarthAsia } from "react-icons/fa6";
import { MdDone } from "react-icons/md";
import { FaAward } from "react-icons/fa";

const Infor = () => {
  return (
    <div className="about-infor grid">
      <div className="about-box">
        <FaEarthAsia />
        <h3 className="about-title">Nationality</h3>
        <span className="about-subtitle">Vietnam</span>
      </div>
      <div className="about-box">
        <MdDone />
        <h3 className="about-title">Completed</h3>
        <span className="about-subtitle">16 + Projects</span>
      </div>
      <div className="about-box">
        <FaAward />
        <h3 className="about-title">GPA</h3>
        <span className="about-subtitle">Overall: 3.88</span>
      </div>
    </div>
  );
};

export default Infor;
