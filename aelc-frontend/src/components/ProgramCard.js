import React, { Component } from 'react'
import { MDBContainer, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter } from 'mdbreact';
import { MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol } from 'mdbreact';


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
        <MDBCol>
          <MDBCard style={{ width: "22rem" }}>
            <MDBCardImage className="img-fluid" src={`${this.props.image}`} waves />
            <MDBCardBody>
              <MDBCardTitle>{this.props.name}</MDBCardTitle>
              <MDBCardText>{this.props.body}</MDBCardText>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </div >
    )
  }
}

export default ProgramCard

