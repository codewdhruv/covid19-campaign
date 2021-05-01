import React from 'react'
import * as ReactBootStrap from "react-bootstrap";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Image from "../../images/c19logonav.png";

function NavBar() {
    return (
        <div className="p-5">
            <ReactBootStrap.Navbar collapseOnSelect expand="lg" bg="light" variant="light" fixed="top">
            <ReactBootStrap.Navbar.Brand href="/"><img src={Image} style={{ width: "40px", height:"40px" }} alt="C19 Campaign" /></ReactBootStrap.Navbar.Brand>
            <ReactBootStrap.Navbar.Brand>C19 Campaign</ReactBootStrap.Navbar.Brand>
            <ReactBootStrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <ReactBootStrap.Navbar.Collapse id="responsive-navbar-nav">
              <ReactBootStrap.Nav className="mr-auto">
              <ReactBootStrap.Nav.Link href="/">Home</ReactBootStrap.Nav.Link>
                <ReactBootStrap.Nav.Link href="/services">Services</ReactBootStrap.Nav.Link>
                <ReactBootStrap.Nav.Link href="/about">About</ReactBootStrap.Nav.Link>
                <ReactBootStrap.Nav.Link href="/contact">Contact</ReactBootStrap.Nav.Link>
                <ReactBootStrap.NavDropdown title="Others" id="collasible-nav-dropdown">
                  <ReactBootStrap.NavDropdown.Item href="/resources">Resources</ReactBootStrap.NavDropdown.Item>
                  <ReactBootStrap.NavDropdown.Item href="/blogs">
                    Blogs
                </ReactBootStrap.NavDropdown.Item>
                  <ReactBootStrap.NavDropdown.Item href="/awareness">
                    Awareness
                </ReactBootStrap.NavDropdown.Item>
                <ReactBootStrap.NavDropdown.Item href="/team">
                    Our Team
                </ReactBootStrap.NavDropdown.Item>
                  <ReactBootStrap.NavDropdown.Divider />
                  <ReactBootStrap.NavDropdown.Item href="/faq">
                    FAQ's
                </ReactBootStrap.NavDropdown.Item>
                </ReactBootStrap.NavDropdown>
              </ReactBootStrap.Nav>
              <ReactBootStrap.Nav>
                {/* <ReactBootStrap.Nav.Link href="#deets">Resources</ReactBootStrap.Nav.Link> */}
                <ReactBootStrap.Nav.Link eventKey={2} href="#memes">
                <ReactBootStrap.Button variant="outline-dark" size="sm">Log in</ReactBootStrap.Button>{' '}
                <ReactBootStrap.Button variant="danger" size="sm">Sign up</ReactBootStrap.Button>
              </ReactBootStrap.Nav.Link>
              </ReactBootStrap.Nav>
            </ReactBootStrap.Navbar.Collapse>
          </ReactBootStrap.Navbar>
        </div>
    )
}

export default NavBar
