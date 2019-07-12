import React, { Component } from 'react'
import { MDBCardBody, MDBCardImage, MDBCardTitle, MDBCol } from 'mdbreact';
import { MDBRow, MDBTabPane, MDBTabContent, MDBNav, MDBNavItem, MDBNavLink } from "mdbreact";
import { MDBContainer, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter } from 'mdbreact';


class StaffCard extends Component {

  constructor(props) {
    super(props)
    this.state = {
      modal: false,

      items: {
        default: "1",
      }
    };

    this.toggle = () => {
      this.setState({
        modal: !this.state.modal
      });
    }


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
        <MDBContainer style={{ width: "18rem" }} className="no-gutters staffImgContainer" >
          <MDBRow className="no-gutters" >
            <MDBCol className="no-gutters" md="12">
              {/* <MDBTabContent className="no-gutters" activeItem={this.state.items["default"]}>
                <MDBTabPane className="row justify-content-center" tabId="1"> */}
              <p>
                <MDBCardBody className="no-gutters staffImgContainer">
                  <MDBCardImage className="img-fluid no-gutters staffImage" src={`${this.props.image}`} waves />
                  <div className="bioBtn no-gutters">
                    <button className="bio no-gutters" onClick={this.toggle}>Bio</button>
                  </div>
                  <MDBCardTitle className="h5-responsive staffName">{this.props.name}</MDBCardTitle>
                  <MDBModal isOpen={this.state.modal} toggle={this.toggle}>
                    <MDBModalHeader toggle={this.toggle}>{this.props.name}</MDBModalHeader>
                    <MDBModalBody>
                      {this.props.bio}
                    </MDBModalBody>
                  </MDBModal>
                </MDBCardBody>
              </p>
              {/* </MDBTabPane>
              </MDBTabContent> */}
            </MDBCol>
          </MDBRow>
          {/* </MDBCard> */}
        </MDBContainer>
      </div >

    );
  }
}
export default StaffCard

