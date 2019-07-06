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
      < div className="mobileProgramCard">
        <MDBCard className="my-5 pt-3 px-3 pb-3">
          <MDBRow>
            <MDBCol>
              <MDBCardImage className="image-fluid image" src={`${this.props.image}`} waves />
            </MDBCol>
            <MDBCol>
              <MDBCardBody>
                <MDBCardTitle className="font-weight-bold " lg="7">{this.props.name}</MDBCardTitle>
                <MDBCardText className="font-weight-bold" lg="7">{this.props.body}</MDBCardText>
              </MDBCardBody>
            </MDBCol>
          </MDBRow>
        </MDBCard>
      </div >
    )
  }
}

export default ProgramCard

