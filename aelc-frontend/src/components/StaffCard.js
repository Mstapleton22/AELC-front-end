import React, { Component } from 'react'
import { MDBContainer, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCol } from 'mdbreact';
import { MDBRow, MDBTabPane, MDBTabContent, MDBNav, MDBNavItem, MDBNavLink } from "mdbreact";

class StaffCard extends Component {

  constructor(props) {
    super(props)
    this.state = {
      items: {
        default: "1",
      }
    };

    this.togglePills = (type, tab) => e => {
      e.preventDefault();
      if (this.state.items[type] !== tab) {
        let items = { ...this.state.items };
        items[type] = tab;
        this.setState({
          items
        });
      }
    };
  }
  render() {
    return (
      < div >
        <MDBContainer style={{ width: "25rem" }} className="" >
          {/* <MDBCard className="my-5 px-5 pb-3" style={{ width: "20rem" }}> */}

          <MDBRow className="pl-5 ml-4">
            <MDBCol md="10">
              {/* <h2>Default</h2> */}
              <MDBNav className="mt-1 nav-pills">
                <MDBNavItem>
                  <MDBNavLink to="#" active={this.state.items["default"] === "1"} onClick={this.togglePills("default", "1")} >
                    {this.props.name}
                  </MDBNavLink>
                </MDBNavItem>
                <MDBNavItem>
                  <MDBNavLink to="#" active={this.state.items["default"] === "2"} onClick={this.togglePills("default", "2")} >
                    Bio
                  </MDBNavLink>
                </MDBNavItem>
              </MDBNav>
              <MDBTabContent activeItem={this.state.items["default"]}>
                <MDBTabPane className="row justify-content-center" tabId="1">
                  <p>
                    <MDBCardBody className=" justify-content-center ">

                      <MDBCardImage className="img-fluid row justify-content-center" src={`${this.props.image}`} waves />
                      <MDBCardTitle className="h3-responsive justify-content-center">{this.props.name}</MDBCardTitle>
                    </MDBCardBody>
                  </p>
                </MDBTabPane>
                <MDBTabPane tabId="2">
                  <p>
                    {this.props.bio}
                  </p>
                </MDBTabPane>
              </MDBTabContent>
            </MDBCol>
          </MDBRow>
          {/* </MDBCard> */}
        </MDBContainer>
      </div >

    );
  }
}
export default StaffCard

