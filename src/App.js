import './App.css';
import { Link, Routes, Route } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
import Home from './pages/Home';

import About from './pages/About';
import Contact from './pages/Contact';
import { ContactInfo } from './components/ContactInfo';
import Navbare from './components/Navbar';
import Download from './pages/Download';


function App() {
  return (
    <div>
      {/* <Navbar expand="lg" className='fixed-top bg-body-tertiary-transparent '>
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
              <Nav.Link href='/menu' className='text-uppercase '>Download</Nav.Link>
              <Nav.Link href='/about' className='text-uppercase '>About</Nav.Link>
              <Nav.Link href='/' className='text-uppercase'>Shop</Nav.Link>
            </Nav>
            <Nav className='me-auto justify-content-end w-100'>
            <Button variant='outline-dark' >Sign up</Button>
            <Button variant='outline-dark' ><Link to={'https://arcade.inworld.ai/characters/diPN7LIxCl2smXUk'}>ENG Assistant</Link></Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar> */}
      <Navbare/>
     

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/download' element={<Download />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
      <ContactInfo />
      <footer className='bg-body-tertiary'>
        <p className='p-3 m-0 text-center'>copyright @ made by A-EYE</p>
      </footer>
    </div>
  );
}

export default App;
