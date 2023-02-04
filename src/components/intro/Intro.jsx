import React from "react";
import "./intro.css";
import Me from "../../img/me-2.png";
import Resume from "../../img/Fahmid_Imtiaz_CV.pdf";

const Intro = () => {
  return (
    <div className="intro">
      <div className="intro-left">
        <div className="intro-left-wrapper">
          <h2>Hello My Name is</h2>
          <h1>Fahmid Imtiaz</h1>
          <div className="intro-title">
            <div className="intro-title-wrapper">
              <div className="intro-title-item">Web Developer</div>
              <div className="intro-title-item">Frontend Developer</div>
              <div className="intro-title-item">Backend Developer</div>
              <div className="intro-title-item">Telecom Engineer</div>
              <div className="intro-title-item">Programmer</div>
            </div>
          </div>
          <p className="intro-desc">
            My expertise in coding, design, and problem-solving make you a
            valuable asset to any organization.
          </p>

          <a href={Resume} download className="my_resume">
            Resume
          </a>
        </div>
      </div>
      <div className="intro-right">
        <div className="intro-bg"></div>
        <img src={Me} alt="" className="intro-img" />
      </div>
    </div>
  );
};

export default Intro;
