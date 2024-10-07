import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import './ContactMe.css';

function ContactMe() {
  return (
    <div id="contact" className="contactMe_container">
      <div className="contactMe_data_links">
        <p>Buenos Aires (CABA), ARG</p>
        <p>Augusto Viggiano</p>
        <p>augusto.viggiano@gmail.com</p>
      </div>
      <div className="contactMe_social_links">
        <a
          href="https://github.com/AugusViggia"
          target="_blank"
          rel="noopener noreferrer"
          className="github"
        >
          <FontAwesomeIcon icon={faGithub} />
        </a>
        <a
          href="https://www.linkedin.com/in/augusto-viggiano-195134213/"
          target="_blank"
          rel="noopener noreferrer"
          className="linkedin"
        >
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
        <a
          href="https://www.instagram.com/augusviggiano/"
          target="_blank"
          rel="noopener noreferrer"
          className="instagram"
        >
          <FontAwesomeIcon icon={faInstagram} />
        </a>
      </div>
      <div className="copyright">
        Copyright&copy; {new Date().getFullYear()} All rights reserved
      </div>
    </div>
  );
}

export default ContactMe;
