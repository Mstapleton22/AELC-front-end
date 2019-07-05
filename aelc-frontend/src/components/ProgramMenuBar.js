import React, { Component } from 'react'
import { MDBContainer, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter } from 'mdbreact';
import { MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol, MDBRow } from 'mdbreact';


class ProgramCard extends Component {

  constructor(props) {
    super(props);

    this.state = {
      // modal: false
    };
  }

  // toggle = () => {
  //   this.setState({
  //     modal: !this.state.modal
  //   });
  // }

  render() {
    console.log(this.props.image_url)
    return (
      < div >
        <MDBBtn className="font-weight-bold stickyBtn" color="#4ca468" lg="7">{this.props.name}</MDBBtn>
      </div >
    )
  }
}

export default ProgramCard