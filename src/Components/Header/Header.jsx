import React, { useEffect, useState } from "react";
import { AiOutlineHome } from "react-icons/ai";
import { FaRegUser } from "react-icons/fa";
import { IoDocumentTextOutline } from "react-icons/io5";
import { MdOutlineWorkHistory } from "react-icons/md";
import { ImProfile } from "react-icons/im";
import { MdOutlineConnectWithoutContact } from "react-icons/md";
import { AiOutlineAppstore } from "react-icons/ai";
import { IoMdClose } from "react-icons/io";

import "./Header.css";

const Header = () => {
  // Change bg header
  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector(".header");
      if (window.scrollY >= 80) {
        header.classList.add("scroll-header");
      } else {
        header.classList.remove("scroll-header");
      }
    };

    window.addEventListener("scroll", handleScroll);

    // clean up
    return () => window.removeEventListener("scroll", handleScroll);
  });

  // toggle phone menu
  const [showMenu, setShowMenu] = useState(false);
  const [activeNav, setActiveNav] = useState("#about");

  return (
    <header className="header">
      <nav className="nav container">
        <a href="../../../index.html" className="nav-logo">
          Mason
        </a>

        <div className={showMenu ? "nav-menu show-menu" : "nav-menu"}>
          <ul className="nav-list ">
            <li className="nav-item">
              <a
                href="#home"
                onClick={() => setActiveNav("#home")}
                className={
                  activeNav === "#home" ? "nav-link active-link" : "nav-link"
                }
              >
                <AiOutlineHome className="nav-icon" />
                Home
              </a>
            </li>

            <li className="nav-item">
              <a
                href="#about"
                onClick={() => setActiveNav("#about")}
                className={
                  activeNav === "#about" ? "nav-link active-link" : "nav-link"
                }
              >
                <FaRegUser className="nav-icon" />
                About
              </a>
            </li>

            <li className="nav-item">
              <a
                href="#skills"
                onClick={() => setActiveNav("#skills")}
                className={
                  activeNav === "#skills" ? "nav-link active-link" : "nav-link"
                }
              >
                <IoDocumentTextOutline className="nav-icon" />
                Skills
              </a>
            </li>

            <li className="nav-item">
              <a
                href="#experience"
                onClick={() => setActiveNav("#experience")}
                className={
                  activeNav === "#experience"
                    ? "nav-link active-link"
                    : "nav-link"
                }
              >
                <MdOutlineWorkHistory className="nav-icon" />
                Experience
              </a>
            </li>

            <li className="nav-item">
              <a
                href="#projects"
                onClick={() => setActiveNav("#projects")}
                className={
                  activeNav === "#projects"
                    ? "nav-link active-link"
                    : "nav-link"
                }
              >
                <ImProfile className="nav-icon" />
                Projects
              </a>
            </li>

            <li className="nav-item">
              <a
                href="#contact"
                onClick={() => setActiveNav("#contact")}
                className={
                  activeNav === "#contact" ? "nav-link active-link" : "nav-link"
                }
              >
                <MdOutlineConnectWithoutContact className="nav-icon" />
                Contact
              </a>
            </li>
          </ul>

          <IoMdClose className="nav-close" onClick={() => setShowMenu(false)} />
        </div>

        <div className="nav-toggle" onClick={() => setShowMenu(true)}>
          <AiOutlineAppstore />
        </div>
      </nav>
    </header>
  );
};

export default Header;
