import React, { Component } from "react";
import {
  MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBFormInline,
  MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem
} from "mdbreact";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import HomePage from './Home';
import Contact from './Contact';
import ProgramsPage from './Programs';
import StaffPage from './Staff'
import ParentResources from './ParentResources'



class NavbarPage extends Component {
  state = {
    isOpen: false
  };

  toggleCollapse = () => {
    this.setState({ isOpen: !this.state.isOpen });
  }

  render() {
    return (
      <Router>
        <MDBNavbar className="staticColor nav" expand="md">
          <MDBNavbarBrand>
            <img className="logo" src="Augustana_Logo.png" alt="logo"></img>
          </MDBNavbarBrand>
          <MDBNavbarToggler onClick={this.toggleCollapse} />
          {/* <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar> */}
          <MDBNavbarNav className="nav" right>
            <Link className="navItems" to="/">Home</Link>
            <Link className="navItems" to="/ParentResources">Resources</Link>
            <Link className="navItems" to="/ProgramsPage">Programs</Link>
            <Link className="navItems" to="/StaffPage">Staff</Link>
            <Link className="navItems" to="/Contact">Contact</Link>
          </MDBNavbarNav>
          {/* </MDBCollapse> */}
        </MDBNavbar>



        <Route path="/" exact render={(props) => <HomePage carousel={props.carousel}
        />} />
        <Route path="/ParentResources" render={(props) => <ParentResources tuition={props.tuition}
          parentHandbook={props.parentHandbook} />} />
        <Route path="/ProgramsPage" render={(props) => <ProgramsPage programs={props.programs} />} />
        <Route path="/StaffPage" render={(props) => <StaffPage staff={props.staff} />} />

        <Route path="/Contact" render={(props) => <Contact contact={props.contact} />} />
      </Router>
    );
  }
}

export default NavbarPage;