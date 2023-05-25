import React from "react";
import {Container, Nav, Navbar} from "react-bootstrap";
import {LinkContainer} from "react-router-bootstrap";

function Toolbar() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <LinkContainer to="/">
          <Navbar.Brand>Users Management</Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="main-toolbar" />
        <Navbar.Collapse id="main-toolbar">
          <Nav className="ms-auto">
            <LinkContainer to="/">
              <Nav.Link>Users</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/new">
              <Nav.Link>New User</Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Toolbar;
