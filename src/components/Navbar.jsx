import React from 'react'
import { Navbar, Container, Nav, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './Navbar.css'
export default function Navbare
() {
  const user=false;
  return (
    <div>
        <Navbar expand="lg" className='fixed-top bg-body-tertiary-transparent '>
              <Container>
                <Navbar.Brand>
                  <Link to="/" className='navbar-brand text-dark fw-bold fs-6'>
                    A-EYE
                  </Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls='basic-navbar-nav' />
                <Navbar.Collapse id='basic-navbar-nav'>
                  <Nav className='me-auto justify-content-end w-100'>
                    <Nav.Link href='/' className='active text-uppercase '>Home</Nav.Link>
                    <Nav.Link href='/download' className='text-uppercase '>Download</Nav.Link>
                    <Nav.Link href='/about' className='text-uppercase '>About</Nav.Link>
                    <Nav.Link href='/about' className='text-uppercase '>Shop</Nav.Link>
                  </Nav>
                  <Nav className='me-auto justify-content-end w-100'>
                  {user ? (<div className='user'>
                    <img src='../utils/img/person4.jpg' alt=''></img>
                    <span>Omar Reda</span>
                    <Link to='/profile>'>profile</Link>
                  </div>):(<><Button variant='outline-dark'>Sign up</Button></>)}
                  </Nav>
                </Navbar.Collapse>
              </Container>
        </Navbar>
    </div>
  )
}
