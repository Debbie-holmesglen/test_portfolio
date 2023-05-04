// Import React modules
import React from 'react';

// Import Bootstrap modules
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';


import img from './logo.svg';


const Header = () => {
  return (
    <Navbar className="color-nav" variant="light" expand="lg">
      <Container >


        <Link className="navbar-brand" to="/"><img src={img} alt={'logo'} width={'50'}/> 
          {' '}
          Debbie Rose</Link>


        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link className="nav-link" to="/">Home</Link>
            <Link className="nav-link" to="/About">About</Link>
            <Link className="nav-link" to="/Portfolio">Portfolio</Link>
            <Link className="nav-link" to="/Contact">Contact</Link>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

  )
  
}

export default Header