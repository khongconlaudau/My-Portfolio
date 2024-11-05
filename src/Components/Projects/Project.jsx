import React from "react";
import "./Project.css";
const Project = () => {
  return (
    <section className="projects section" id="projects">
      <div className="about-intro">
        <h2 className="about-me">Projects</h2>
        <span className="section-subtitle">Some Of My Feature Projects</span>
      </div>

      <div className="project-content">
        <div className="card-container">
          <div className="card-box">
            <div className="project-img-container">
              <div className="projects-img  project1"></div>
              <p>Hover Me</p>
            </div>

            <div className="about-project">
              <h2 className="project-title">Bank Application</h2>
              <p className="project-time">Apr 2024 - Present</p>
              <p className="project-data">
                One of my recent projects that I am particularly proud of is the
                Bank Application project. It was a challenging yet rewarding
                experience as I was able to improve my coding, database, UI
                skills.
              </p>

              <div className=" project-button-container">
                <a href="" className=" project-button ">
                  Live Code
                </a>
                <a href="" className=" project-button">
                  Source Code
                </a>
              </div>
            </div>
          </div>
          <div className="card-box">
            <div className="project-img-container">
              <div className="projects-img project2"></div>
              <p>Hover Me</p>
            </div>
            <div className="about-project">
              <h2 className="project-title">E-Commercial Sneakers</h2>
              <p className="project-time">Oct 2024 - Oct 2024</p>
              <p className="project-data">
                Using HTML, CSS, and React – this was one of my first projects
                with React, and I’ve really enjoyed working with it. I’ve
                realized that React is incredibly powerful for working with
                components, allowing me to reuse code flexibly and efficiently.
              </p>
              <div className=" project-button-container">
                <a href="" className=" project-button ">
                  Live Code
                </a>
                <a href="" className=" project-button">
                  Source Code
                </a>
              </div>
            </div>
          </div>
          <div className="card-box">
            <div className="project-img-container">
              <div className="projects-img project3"></div>
              <p>Hover Me</p>
            </div>
            <div className="about-project">
              <h2 className="project-title">Clothing Landing Page</h2>
              <p className="project-time">Oct 2024 - Oct 2024</p>
              <p className="project-data">
                This was my first time working with the Tailwind CSS framework,
                and I had a fantastic experience building a clothing landing
                page! Tailwind’s utility-first approach made it easy to create
                clean, responsive designs quickly. I'm so excited to build more
                projects with Tailwind in the future.
              </p>
              <div className=" project-button-container">
                <a href="" className=" project-button ">
                  Live Code
                </a>
                <a href="" className=" project-button">
                  Source Code
                </a>
              </div>
            </div>
          </div>
          <div className="card-box">
            <div className="project-img-container">
              <div className="projects-img project4"></div>
              <p>Hover Me</p>
            </div>
            <div className="about-project">
              <h2 className="project-title">Photography Landing Page</h2>
              <p className="project-time">Oct 2024 - Oct 2024</p>
              <p className="project-data">
                This is one of my first projects using SCSS. It was a lot of fun
                to work with, as it brought a programming-like approach to CSS,
                similar to other OOP languages like Java and JavaScript. SCSS
                allowed me to write cleaner, more maintainable styles with
                reusable components and variables, enhancing the overall
                development experience
              </p>
              <div className=" project-button-container">
                <a href="" className=" project-button ">
                  Live Code
                </a>
                <a href="" className=" project-button">
                  Source Code
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Project;
