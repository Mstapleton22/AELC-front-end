import React, { Component } from 'react'
import { MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol, MDBRow } from 'mdbreact';
import ScrollableAnchor from 'react-scrollable-anchor'


class ProgramCard extends Component {

  constructor(props) {
    super(props);

    this.state = {
      // modal: false
    };
  }


  render() {
    return (
      <div className="mobileProgramCard">
        <ScrollableAnchor id={`${this.props.id}`}>
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
        </ScrollableAnchor>
      </div >
    )
  }
}

export default ProgramCard

