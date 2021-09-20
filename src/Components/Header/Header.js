import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    NavLink
  } from "react-router-dom";
const Header = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
        <Navbar.Brand href="#home">Smart-Fluidtech</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link><Link to='/'>Home</Link></Nav.Link>
            <Nav.Link><Link to='/admin'>Admin</Link></Nav.Link>
            <Nav.Link><Link to='/allpumps'>All-Pumps</Link></Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="#deets">Teams</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              Services
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
        </Container>
      </Navbar>
    );
};

export default Header;
