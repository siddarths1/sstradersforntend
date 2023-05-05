import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { NavLink } from 'react-router-dom';

export default function Navbarr() {
  return (
    <>
   
    <Navbar collapseOnSelect  bg="light" expand="lg">
    <Container>
      <Navbar.Brand href="#"><img src='images/sstrader.png' alt='pic' width={40} height={40}/>SS TRADERS</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="/" style={{fontSize:'18px'}}>Home</Nav.Link>
          <Nav.Link href="/About" style={{fontSize:'18px'}}>AboutUs</Nav.Link>
          <NavDropdown title="Groceries" id="collasible-nav-dropdown">
            <NavDropdown.Item href="Oils_Ghee" > Ghee & Oils</NavDropdown.Item>
            <NavDropdown.Item href="Masalas_spices">Masala & Spices</NavDropdown.Item>
            <NavDropdown.Item href="Pulses_Dalls">Dalls / Pulses</NavDropdown.Item>
            <NavDropdown.Item href="DryFruit">Dry Fruits</NavDropdown.Item>
            <NavDropdown.Item href="Rice_Atta">Rice & Atta</NavDropdown.Item>
            <NavDropdown.Item href="Bevarages">Bevarages</NavDropdown.Item>
            <NavDropdown.Item href="Home_Essentials">Home Essentials</NavDropdown.Item>
            <NavDropdown.Item href="Kitchen_Essentials">Kitchen Essentials</NavDropdown.Item>
            <NavDropdown.Item href="Food_Noodles">Food Additives & Noodles</NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Nav>
          
          <Nav.Link href="Login">Login</Nav.Link>
          <Nav.Link href="SignUp">Sign Up</Nav.Link>
        </Nav>
      </Navbar.Collapse>
      <Nav.Link><span class="material-symbols-outlined">add_shopping_cart</span></Nav.Link>
    </Container>
  </Navbar>
  </>
  )
}
