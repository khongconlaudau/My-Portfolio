import React from 'react'
import { FaJava } from "react-icons/fa6";
import { FaPython } from "react-icons/fa6";
import { TbBrandJavascript } from "react-icons/tb";

import { BsDatabase } from "react-icons/bs";
import { AiOutlineHtml5 } from "react-icons/ai";
import { FaCss3 } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaSass } from "react-icons/fa";
import { SiSpring } from "react-icons/si";


const TechnicalSkills = () => {
  return (
    <div className="skill-content">
      <h3 className="skill-title">Technical Skills</h3>

      <div className="skill-box">
        <div className="skill-group">
          <div className="skill-data">
            <FaJava className="skill-icon java" />
            <div>
              <h3 className="skill-name">Java</h3>
              <span className="skill-level">Advanced</span>
            </div>
          </div>
        </div>
        <div className="skill-group">
          <div className="skill-data">
            <FaPython className="skill-icon python" />
            <div>
              <h3 className="skill-name">Python</h3>
              <span className="skill-level">Advanced</span>
            </div>
          </div>
        </div>
        <div className="skill-group">
          <div className="skill-data">
            <TbBrandJavascript className='skill-icon javascript'/>
            <div>
              <h3 className="skill-name">JavaScript</h3>
              <span className="skill-level">Advanced</span>
            </div>
          </div>
        </div>
        <div className="skill-group">
          <div className="skill-data">
            <BsDatabase className='skill-icon database'/>
            <div>
              <h3 className="skill-name">DataBase</h3>
              <span className="skill-level">Intermediate</span>
            </div>
          </div>
        </div>
        <div className="skill-group">
          <div className="skill-data">
            <AiOutlineHtml5 className='skill-icon html5'/>
            <div>
              <h3 className="skill-name">HTML</h3>
              <span className="skill-level">Advanced</span>
            </div>
          </div>
        </div>
        <div className="skill-group">
          <div className="skill-data">
            <FaCss3  className='skill-icon css3'/>
            <div>
              <h3 className="skill-name">CSS</h3>
              <span className="skill-level">Intermidate</span>
            </div>
          </div>
        </div>
        <div className="skill-group">
          <div className="skill-data">
            <FaReact className='skill-icon react' />
            <div>
              <h3 className="skill-name">React</h3>
              <span className="skill-level">Intermediate</span>
            </div>
          </div>
        </div>
        <div className="skill-group">
          <div className="skill-data">
            <RiTailwindCssFill className='skill-icon tailwind'/>
            <div>
              <h3 className="skill-name">Tailwind</h3>
              <span className="skill-level">Advanced</span>
            </div>
          </div>
        </div>
        <div className="skill-group">
          <div className="skill-data">
            <FaSass className="skill-icon sass" />
            <div>
              <h3 className="skill-name">Sass</h3>
              <span className="skill-level">Advanced</span>
            </div>
          </div>
        </div>
        <div className="skill-group">
          <div className="skill-data">
            <SiSpring  className='skill-icon spring'/>
            <div>
              <h3 className="skill-name">Spring</h3>
              <span className="skill-level">Intermediate</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TechnicalSkills