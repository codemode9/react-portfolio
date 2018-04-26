import React from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import { Link } from "react-router-dom";
import "./Nav.css";

export default class Example extends React.Component {
 
  render() {
    return (
      <div id="navdiv">
        <Navbar color="faded" light>
          <NavbarBrand href="/" className="mr-auto"><h1 className="rapologize">Timour Basegmez</h1></NavbarBrand>
          <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
          
            <Nav>
              <NavItem>
                <NavLink href="/components/"><p className="makewhite">About</p></NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://github.com/reactstrap/reactstrap"><p className="makewhite">Portfolio</p></NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://github.com/reactstrap/reactstrap"><p className="makewhite">Contact</p></NavLink>
              </NavItem>
            </Nav>
          
        </Navbar>
      </div>
    );
  }
}