import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const Header = () => (
  <Navbar bg="dark" variant="dark">
    <LinkContainer to="/">
      <Navbar.Brand>Home</Navbar.Brand>
    </LinkContainer>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">
      <LinkContainer to="/users">
          <Nav.Link>Users</Nav.Link>
        </LinkContainer>
        <LinkContainer to="/dupa">
          <Nav.Link>Hierarchy Mapping</Nav.Link>
        </LinkContainer>
        <LinkContainer to="/dziwki">
          <Nav.Link>Unit Master</Nav.Link>
        </LinkContainer>
        <LinkContainer to="/payee">
          <Nav.Link>Payee</Nav.Link>
        </LinkContainer>
        <LinkContainer to="/history">
          <Nav.Link>Process</Nav.Link>
        </LinkContainer>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

export default Header;
