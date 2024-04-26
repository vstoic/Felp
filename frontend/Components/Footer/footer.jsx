import React from 'react';

function Footer(props) {
  return (
    <div className="footer-container">
      <div className="footer-splitter">
        <div className="footer-column">
          <h1>About</h1>
          <a
            href="https://www.github.com/vstoic/felp"
            target="_blank"
            rel="noopener noreferrer"
          >
            About Felp
          </a>
          <a
            href="https://www.github.com/vstoic/felp"
            target="_blank"
            rel="noopener noreferrer"
          >
            Felp Repo
          </a>
        </div>
        <div className="footer-column">
          <h1>Developers Info</h1>
          <a
            href="https://www.chengvictor.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Portfolio
          </a>
          <a
            href="https://www.linkedin.com/in/victorcheng3/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <a
            href="https://www.google.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Github
          </a>
        </div>
        <div className="footer-column">
          <h1>Technologies Used</h1>
          <p
            href="https://www.github.com/vstoic/"
            target="_blank"
            rel="noopener noreferrer"
          >
            React
          </p>
          <p
            href="https://www.google.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Javascript
          </p>
          <p
            href="https://www.google.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Ruby on Rails
          </p>
          <p
            href="https://www.google.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            PostgreSQL
          </p>
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
}

export default Footer;
