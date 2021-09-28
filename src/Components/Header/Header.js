import React,{useState,useContext} from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { userContext } from './../../App';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    NavLink
  } from "react-router-dom";
const Header = () => {
  const [loggedInUser, setLoggedInUser] = useContext(userContext);
  console.log(loggedInUser)
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        
        <Navbar.Brand href="#home">Smart-Fluidtech</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
           <Nav.Link as={Link}  to='/'>Home</Nav.Link>
           <Nav.Link as={Link}  to='/admin'>Admin</Nav.Link>
           <Nav.Link as={Link}  to='/allpumps'>All-Pumps</Nav.Link>
           <Nav.Link as={Link}  to='/delivery'>Recent-Delivery</Nav.Link>
           
          </Nav>
          <Nav>
          <Nav.Link as={Link} to='/login'>
            {loggedInUser?.length? <p>{loggedInUser}</p>:<p>login</p>}
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
        
      </Navbar>
    );
};

export default Header;
