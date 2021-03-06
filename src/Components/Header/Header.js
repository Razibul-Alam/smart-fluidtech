import React,{useContext} from 'react';
import { Nav, Navbar} from 'react-bootstrap';
import './Header.css'
import { userContext } from './../../App';
import {
    Link,
  } from "react-router-dom";
const Header = () => {
  const [loggedInUser, setLoggedInUser] = useContext(userContext);
  console.log(loggedInUser)

    return (
      <>
        <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
        
        <Navbar.Brand href="#home"><img src="https://smartfluidtech.com/wp-content/uploads/2019/08/logo.png" alt="" className="my-logo mb-2"/></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="ms-auto fw-bolder mt-2">
           <Nav.Link as={Link}  to='/' className="me-3">Home</Nav.Link>
           <Nav.Link as={Link}  to='/allitems' className="me-3">All-Items</Nav.Link>
           <Nav.Link as={Link}  to='/delivery' className="me-3">Recent-Delivery</Nav.Link>
           <Nav.Link as={Link}  to='/admin' className="me-3">Admin</Nav.Link>
           <Nav.Link as={Link} to='/login' className="me-4">
            {loggedInUser?.length? <p>{loggedInUser}</p>:<p>login</p>}
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
        
      </Navbar>
      </>
    );
};

export default Header;
