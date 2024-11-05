import React from 'react'
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

import "./Footer.css"
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container container">
        <h1 className="footer-title">Mason</h1>

        <ul className="footer-list">
          <li>
            <a href="#about" className="footer-link">
              About
            </a>
          </li>

          <li>
            <a href="#projects" className="footer-link">
              Projects
            </a>
          </li>

          <li>
            <a href="#experience" className="footer-link">
              Experience
            </a>
          </li>
        </ul>

        <div className="footer-social">
          <a
            href="https://www.linkedin.com/in/mason-van-15b621303/"
            className="footer-social-icon"
            target="_blank"
          >
            <CiLinkedin />
          </a>

          <a
            href="https://github.com/khongconlaudau"
            className="footer-social-icon"
            target="_blank"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.instagram.com/ducmanh266/?__pwa=1"
            className="footer-social-icon"
            target="_blank"
          >
            <FaInstagram />
          </a>
        </div>
      </div>
      <span className="footer-copy">&#169; Mason Van. All rights reserved</span>
    </footer>
  );
}

export default Footer