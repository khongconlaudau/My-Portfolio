import React from "react";
import { RiVerifiedBadgeFill } from "react-icons/ri";

const SoftSkills = () => {
  return (
    <div className="skill-content">
      <h3 className="skill-title">Soft Skills</h3>

      <div className="skill-box">
        <div className="skill-group">
          <div className="skill-data">
            <RiVerifiedBadgeFill className="badge" />
            <div>
              <h3 className="skill-name">Communication</h3>
              <span className="skill-level">Experienced</span>
            </div>
          </div>
        </div>
        <div className="skill-group">
          <div className="skill-data">
            <RiVerifiedBadgeFill className="badge" />
            <div>
              <h3 className="skill-name">Problem-Solving</h3>
              <span className="skill-level">Experienced</span>
            </div>
          </div>
        </div>
        <div className="skill-group">
          <div className="skill-data">
            <RiVerifiedBadgeFill className="badge" />
            <div>
              <h3 className="skill-name">Team-Work</h3>
              <span className="skill-level">Experienced</span>
            </div>
          </div>
        </div>
        <div className="skill-group">
          <div className="skill-data">
            <RiVerifiedBadgeFill className="badge" />
            <div>
              <h3 className="skill-name">Time Management</h3>
              <span className="skill-level">Experienced</span>
            </div>
          </div>
        </div>
        <div className="skill-group">
          <div className="skill-data">
            <RiVerifiedBadgeFill className="badge" />
            <div>
              <h3 className="skill-name">Customer Service</h3>
              <span className="skill-level">Experienced</span>
            </div>
          </div>
        </div>
        <div className="skill-group">
          <div className="skill-data">
            <RiVerifiedBadgeFill className="badge" />
            <div>
              <h3 className="skill-name">Critical Thinking</h3>
              <span className="skill-level">Experienced</span>
            </div>
          </div>
        </div>
        <div className="skill-group">
          <div className="skill-data">
            <RiVerifiedBadgeFill className="badge" />
            <div>
              <h3 className="skill-name">Organization</h3>
              <span className="skill-level">Experienced</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SoftSkills;
