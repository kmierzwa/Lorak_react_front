import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const Header = () => (
  <Navbar bg="light" expand="lg">
    <LinkContainer to="/">
      <Navbar.Brand>Lorak</Navbar.Brand>
    </LinkContainer>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">
        <LinkContainer to="/dupa">
          <Nav.Link>Dupa</Nav.Link>
        </LinkContainer>
        <LinkContainer to="/dziwki">
          <Nav.Link>Dziwki</Nav.Link>
        </LinkContainer>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

export default Header;
