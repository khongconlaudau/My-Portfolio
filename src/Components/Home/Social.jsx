import React from 'react'
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Social = () => {
  return (
    <div className="home-social">
      <a
        href="https://www.linkedin.com/in/mason-van-15b621303/"
        className="home-social-icon"
        target="_blank"
      >
        <CiLinkedin />
      </a>

      <a
        href="https://github.com/khongconlaudau"
        className="home-social-icon"
        target="_blank"
      >
        <FaGithub />
      </a>

      <a
        href="https://www.instagram.com/ducmanh266/?__pwa=1"
        className="home-social-icon"
        target="_blank"
      >
        <FaInstagram />
      </a>
    </div>
  );
}

export default Social