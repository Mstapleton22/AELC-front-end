import React, { Component } from "react";
import {
  MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBFormInline,
  MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem
} from "mdbreact";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import HomePage from './Home';
import ProgramsPage from './programs';
import StaffPage from './staff'
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
        <MDBNavbar className="staticColor" expand="md">
          <MDBNavbarBrand>
            <img className="logo" src="Augustana_Logo.png" alt="logo"></img>
          </MDBNavbarBrand>
          <MDBNavbarToggler onClick={this.toggleCollapse} />
          <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
            <MDBNavbarNav className="nav" right>
              <Link className="navItems" to="/">Home</Link>
              <Link className="navItems" to="ParentResources">Resources</Link>
              <Link className="navItems" to="/ProgramsPage">Programs</Link>
              <Link className="navItems" to="/StaffPage">Staff</Link>
            </MDBNavbarNav>
          </MDBCollapse>
        </MDBNavbar>



        <Route path="/" exact render={(props) => <HomePage carousel={props.carousel} />} />
        {/* <Route path="/whyus" component={userBook} /> */}
        <Route path="/ParentResources" render={(props) => <ParentResources tuition={props.tuition}
          parentHandbook={props.parentHandbook} />} />
        <Route path="/ProgramsPage" render={(props) => <ProgramsPage programs={props.programs} />} />
        <Route path="/StaffPage" render={(props) => <Staff staff={props.staff} />} />
      </Router>
    );
  }
}

export default NavbarPage;