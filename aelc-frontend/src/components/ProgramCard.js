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
        <MDBCard className="my-3 pt-5 px-5 pb-5" >
          <MDBRow>
            <MDBCol>
              <MDBCardImage className="col-6 img-fluid image" src={`${this.props.image}`} waves />
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

