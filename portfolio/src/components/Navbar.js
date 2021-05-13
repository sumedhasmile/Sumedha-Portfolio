import React from 'react'
import logo from '../assets/Logo.svg';
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
const navbar = () => {
    return (
      <div>
      <Navbar collapseOnSelect
        fixed="top"
         variant="light"
        expand="lg"
         bg ="dark"
        className="navbar"
        style={{width:"100%", fontFamily:" 'Roboto Condensed' sans-serif"}}
        >
        
          <Navbar.Brand href="#home">
            <img className="logo" src={logo} alt=""  />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav"   >
            <Nav className="mr-auto ">
              <Nav.Link href="#home" className="navlink" style={{color:"white"}}>Home</Nav.Link>
              <Nav.Link href="#about" className="navlink" style={{color:"white"}}>About</Nav.Link>
              <Nav.Link href="#skills" className="navlink" style={{color:"white"}}>Skills</Nav.Link>
              <Nav.Link href="#projects" className="navlink" style={{color:"white"}}>Projects</Nav.Link>
              <Nav.Link href="#contact" className="navlink" style={{color:"white"}}>Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
       
      </Navbar>
      
    </div> 
    )
}

export default navbar