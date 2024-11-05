import React, { useState } from "react";
import "./Qualification.css";
import { MdWorkOutline } from "react-icons/md";
import { TbSchool } from "react-icons/tb";
import { FaRegCalendarAlt } from "react-icons/fa";

const Qualification = () => {
  const [showEducation, setShowEducation] = useState(false);

  return (
    <section className="qualification section" id="experience">
      <div className="about-intro">
        <h2 className="about-me">Qualification</h2>
        <span className="section-subtitle">My Personal Journey</span>
      </div>

      <div className="qualification-container container">
        <div className="qualification-tabs">
          <div
            className="qualification-button button-flex"
            onClick={() => setShowEducation(true)}
          >
            <TbSchool className="qualification-icon education" />
            Education
          </div>

          <div
            className="qualification-button button-flex"
            onClick={() => setShowEducation(false)}
          >
            <MdWorkOutline className="qualification-icon experience" />
            Experience
          </div>
        </div>

        {/* ------------- Education ----------- */}

        <div className="qualification-section">
          <div
            className={
              showEducation
                ? "qualification-education-show"
                : "qualification-content"
            }
          >
            <div className="qualification-data">
              <div>
                <h3 className="qualification-title">Graduated High School</h3>
                <span className="qualification-subtitle">Hoang Quoc Viet</span>
                <div className="qualification-time">
                  <FaRegCalendarAlt className="calender-icon" />
                  2020-2023
                </div>
              </div>

              <div>
                <span className="qualification-rounder"></span>
                <span className="qualification-line"></span>
              </div>
            </div>
            <div className="qualification-data">
              <div></div>
              <div>
                <span className="qualification-rounder"></span>
                <span className="qualification-line"></span>
              </div>
              <div>
                <h3 className="qualification-title">Computer Science</h3>
                <span className="qualification-subtitle">
                  Algonquin College
                </span>
                <div className="qualification-time">
                  <FaRegCalendarAlt className="calender-icon" />
                  2024-Present
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ------------- Work Experience ----------- */}
        <div className="qualification-section experience-section">
          <div
            className={
              showEducation
                ? "qualification-content"
                : "qualification-experience-show"
            }
          >
            <div className="qualification-data">
              <div>
                <h3 className="qualification-title">Server</h3>
                <span className="qualification-subtitle">
                  Korean House Restaurant
                </span>
                <div className="qualification-time">
                  <FaRegCalendarAlt className="calender-icon" />
                  Jan-2023 to Nov-2023
                </div>
              </div>

              <div>
                <span className="qualification-rounder"></span>
                <span className="qualification-line"></span>
              </div>
            </div>
            <div className="qualification-data">
              <div></div>
              <div>
                <span className="qualification-rounder"></span>
                <span className="qualification-line"></span>
              </div>
              <div>
                <h3 className="qualification-title">Receptionlist</h3>
                <span className="qualification-subtitle">
                  Lavender Nail Spa
                </span>
                <div className="qualification-time">
                  <FaRegCalendarAlt className="calender-icon" />
                  2023-Present
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualification;
