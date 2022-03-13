import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";

function Header() {
  return (
    <Navbar collapseOnSelect fixed="top" expand="lg" bg="light" variant="light">
      <Container>
        <Navbar.Brand href="#home">furni.shop</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link href="#Home">Home</Nav.Link>
            <Nav.Link href="#About">About</Nav.Link>
            <Nav.Link href="#Products">Products</Nav.Link>
            <Nav.Link href="#Contact">Contact</Nav.Link>
            
          </Nav>
          <Nav>
            <Nav.Link href="#deets"><i className="bi bi-search"></i></Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
            <i className="bi bi-list"></i>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
