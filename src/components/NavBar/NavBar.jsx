import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { navigationLinks } from "../../helpers/navLinks";
import "./NavBar.css";

function NavBar() {
  return (
    <div>
      <Navbar className="navigation_container" collapseOnSelect expand="md">
        <Navbar.Brand className="nav_name" href="/">
          Augusto Viggiano
        </Navbar.Brand>
        <Navbar.Toggle
          className="nav_toggle"
          aria-controls="basic-navbar-nav"
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            {navigationLinks.map((link, index) => (
              <Nav.Link className="nav_link" key={index} href={link.ref}>
                {link.name}
              </Nav.Link>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  )
}

export default NavBar;