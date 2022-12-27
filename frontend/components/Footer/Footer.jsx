import React from "react";

function Footer(props) {

    return (
      <div className="footer-container">
        <div className="footer-splitter">
          <div className="footer-left">
            <h1>About</h1>
            <p>About Felp</p>
            <p>Felp Github</p>
          </div>
          <div className="footer-center">
            <h1>Developers Info</h1>
            <p>Portfolio</p>
            <p>LinkedIn</p>
            <p>Github</p>
          </div>
          <div className="footer-right">
            <h1>Technologies Used</h1>
            <p>Javascript</p>
            <p>React Redux</p>
            <p>Ruby on Rails</p>
            <p>PostgreSQL</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>
            Copyleft © 2022 Felp Inc. Felp and related marks are registered
            trademarks of Felp.
          </p>
        </div>
      </div>
    );
};

export default Footer;