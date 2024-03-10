
import React, { Component } from 'react'
import { Navbar, NavDropdown,  Nav } from 'react-bootstrap'
// import Button from 'react-bootstrap/esm/Button';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import About from './About';
import Contact from './Contact';
import Service from './Service';
import Home from './Home';
// import Home from './Home';

export default class NavbarComp extends Component {
  render() {
    return (
        <Router>
      <div>
         <Navbar   fixed='top'  bg='' expand='sm' className='navbar'>
   
        <Navbar.Brand as={Link} to='/home'    >
          <img className='logos'
          src='logo.jpg'
          height='35px'
          width='140px'          
          >
          </img>
          
         TSA</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className='right-aligned'>
          <Nav >
 
          <Nav.Link   class="text-light bg-dark"                 className='font' as={Link} to="/home">Home</Nav.Link>
       
            <NavDropdown  className='font' title="Services" id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to='/service'>Freight Forwarding</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to='/service'>Haulaging</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to='/service'>Customs Brokage</NavDropdown.Item>
              <NavDropdown.Divider />
        
            </NavDropdown>
            <Nav.Link className='font' as={Link} to="/about">About</Nav.Link>
              
              <Nav.Link className='font' as={Link} to="/contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>

    </Navbar>
      </div>
      <div>
      <Switch>
      <Route path="/home">
                  <Home/>
             </Route>
             <Route path="/about">
                   <About />
                        </Route>
                        <Route path="/contact">
                            <Contact />
                        </Route>
                        <Route path="/service">
                            <Service/>
                        </Route>

           </Switch>
      </div>
      </Router>
    )
  }
}
