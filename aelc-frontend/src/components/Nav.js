import React, { Component, Fragment } from "react";
import {
  MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBFormInline,
  MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem
} from "mdbreact";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import HomePage from './Home';
import Contact from './Contact';
import Calendar from './Calendar';
import ProgramsPage from './Programs';
import StaffPage from './Staff'
import ParentResources from './ParentResources'
import FooterPage from './Footer'
import StickyBox from "react-sticky-box/dist/esnext";




class NavbarPage extends Component {
  state = {
    isOpen: false
  };

  toggleCollapse = () => {
    this.setState({ isOpen: !this.state.isOpen });
  }

  render() {
    // console.log("tuition", this.props.tuition)
    // console.log(this.props.contact)
    return (
      <Router>

        {/* <StickyBox className="stickyBar mobileStickyBar" > */}
        <MDBNavbar className="staticColor nav" expand="md">

        <MDBNavbar className="staticColor fontRegular nav" expand="md">

          <MDBNavbarBrand>
            <img className="logo" src="Augustana_Logo.png" alt="logo"></img>
          </MDBNavbarBrand>
          <MDBNavbarToggler onClick={this.toggleCollapse} right>
            <i class="far fa-caret-square-down" />
          </MDBNavbarToggler>
          <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} left navbar>
            <MDBNavbarNav className="nav">
              <Link className="navItems" to="/">Home</Link>
              <Link className="navItems" to="/ParentResources">Resources</Link>
              <Link className="navItems" to="/ProgramsPage">Programs</Link>
              <Link className="navItems" to="/StaffPage">Staff</Link>
              <Link className="navItems" to="/Contact">Contact</Link>
              <Link className="navItems" to="/Calendar">Calendar</Link>
            </MDBNavbarNav>
          </MDBCollapse>
        </MDBNavbar >
        {/* </StickyBox> */}
        <Switch>
          <Route path="/ProgramsPage" component={ProgramsPage} />

          <Fragment>
            <Route path="/" exact render={(props) => <HomePage carousel={props.carousel} accreditation={props.accreditation}
            />} />
            <Route path="/ParentResources" render={(props) => <ParentResources tuition={props.tuition}
              parentHandbook={props.parentHandbook} />} />

            <Route path="/StaffPage" render={(props) => <StaffPage staff={props.staff} />} />

            <Route path="/Contact" render={(props) => <Contact contact={props.contact} />} />
            <Route path="/Calendar" render={(props) => <Calendar calendar={props.calendar} />} />
            <FooterPage contact={this.props.contact} />
          </Fragment>
        </Switch>
      </Router >
    );
  }
}

export default NavbarPage;