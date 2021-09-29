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
      <Nav className="ms-auto fw-bolder mt-2">
           <Nav.Link as={Link}  to='/' className="me-3">Home</Nav.Link>
           <Nav.Link as={Link}  to='/admin' className="me-3">Admin</Nav.Link>
           <Nav.Link as={Link}  to='/allpumps' className="me-3">All-Items</Nav.Link>
           <Nav.Link as={Link}  to='/delivery' className="me-3">Recent-Delivery</Nav.Link>
           <Nav.Link as={Link} to='/login' className="me-4">
            {loggedInUser?.length? <p>{loggedInUser}</p>:<p>login</p>}
            </Nav.Link>
          </Nav>
      
          {/* <Nav>
          
          </Nav> */}
        </Navbar.Collapse>
        
      </Navbar>
    );
};

export default Header;
