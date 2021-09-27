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
            {/* <Nav.Link><Link to='/'>Home</Link></Nav.Link>
            <Nav.Link><Link to='/admin'>Admin</Link></Nav.Link>
            <Nav.Link><Link to='/allpumps'>All-Pumps</Link></Nav.Link>
            <Nav.Link><Link to='/delivery'>Recent-Delivery</Link></Nav.Link>
          </Nav>
          <Nav>
          <Nav.Link><Link to='/login'> */}
           <Nav.Link as={Link}  to='/'>Home</Nav.Link>
           <Nav.Link as={Link}  to='/admin'>Admin</Nav.Link>
           <Nav.Link as={Link}  to='/allpumps'>All-Pumps</Nav.Link>
           <Nav.Link as={Link}  to='/delivery'>Recent-Delivery</Nav.Link>
           
          </Nav>
          <Nav>
          <Nav.Link as={Link} to='/login'>
            {loggedInUser.success?<div><img src={loggedInUser.img} style = {
        {
          width: "60px",
          height: "60px",
          borderRadius:"50%"
        }
      } alt=""/>{loggedInUser.name}</div>:
            <p>Login</p>}</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              Services
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
        
      </Navbar>
    );
};

export default Header;
