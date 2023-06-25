import React from "react";
import Me from "./supcomp/me";
import Navtop from "./supcomp/nav";
import "../styles/resume.css";

const Resume = (props) => {
  return (
    <div id="Home" className="resume">
      <Navtop scrollTop={props.scrollTop} />
      <div className="main">
        <Me />
      </div>
    </div>
  );
};

export default Resume;
