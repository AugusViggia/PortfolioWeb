import React from 'react'
import './ContactMe.css'
import { navigationLinks } from '../../helpers/navLinks';

function createLinks() {
  return navigationLinks.map((link, index) => {
    return (
      <a key={index} href={link.url} target="_blank" rel="noreferrer">
        {link.name}
      </a>
    )
  })
} 

function ContactMe() {
  return (
    <div id="contact" className="contactMe_container">
      <div className="contactMe_data_links">
        <div>
          <p>Buenos Aires, ARG</p>
          <p>Augusto Viggiano</p>
          <p>augusto.viggiano@gmail.com</p>
        </div>
        <div>{createLinks()}</div>
      </div>
      <div>Copyright&copy; {new Date().getFullYear()} All rights reserved</div>
    </div>
  );
}

export default ContactMe;
