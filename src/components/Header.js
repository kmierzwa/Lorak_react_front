import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import LogoutButton from "./LogoutButton";

const Header = () => (
  <Navbar bg="dark" variant="dark">
    <LinkContainer to="/home">
      <Navbar.Brand>Home</Navbar.Brand>
    </LinkContainer>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">
      <LinkContainer to="/users">
          <Nav.Link>Users</Nav.Link>
        </LinkContainer>
        <LinkContainer to="/hierarchy">
          <Nav.Link>Hierarchy Mapping</Nav.Link>
        </LinkContainer>
        <LinkContainer to="/unitmaster">
          <Nav.Link>Unit Master</Nav.Link>
        </LinkContainer>
        <LinkContainer to="/payee">
          <Nav.Link>Payee</Nav.Link>
        </LinkContainer>
        <LinkContainer to="/process">
          <Nav.Link>Process</Nav.Link>
        </LinkContainer>
      </Nav>
    </Navbar.Collapse>
    <LogoutButton className="mr-sm-2"/>
  </Navbar>
);

export default Header;
