import React from "react";
import "./About.css";
import { IoCloudDownloadOutline } from "react-icons/io5";
import aboutImg from "../../assets/me.png";
import CV from "../../assets/Mason-CV.pdf";
import Infor from "./Infor";
const About = () => {
  return (
    <section className="about section" id="about">
      <div className="about-intro">
        <h2 className="about-me">About Me</h2>
        <span className="section-subtitle">My Introduction</span>
      </div>

      <div className="about-container container grid">
        <div className="img-container ">
          <div className="about-img img1"></div>
          <div className="about-img img2"></div>
          <div className="about-img img3"></div>
        </div>
        {/* <img src={aboutImg} alt="Mason" className="about-img" /> */}
        <div className="about-data">
          <Infor />

          <p className="about-description">
            I'm a Computer Science student with a strong love for coding, all
            things tech and creating innovative solutions. My ultimate goal is
            to explore the vast world of technology and develop user-friendly
            applications that enhance the overall experience for clients.
          </p>

          <a download="" href={CV} className="button button-flex">
            Download CV <IoCloudDownloadOutline className="download-icon" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
