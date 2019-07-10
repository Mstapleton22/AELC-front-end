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
      // <div className="mobileProgramCard">
      <ScrollableAnchor id={`${this.props.id}`}>
        <MDBCard className="my-5 pt-3 px-3 pb-3">
          <MDBRow>
            <div className="col-sm-5 no-gutters programCardColumn">
              <MDBCardImage className="image-fluid image" src={`${this.props.image}`} />
            </div>
            <div className="col-sm-6 no-gutters programCardColumn">
              <MDBCardBody className="no-gutters" >
                <MDBCardTitle className="font-weight-bold no-gutters " lg="7">{this.props.name}</MDBCardTitle>
                <div className="font-weight-bold programText no-gutters" lg="7">{this.props.body}</div>
              </MDBCardBody>
            </div>
          </MDBRow>
        </MDBCard>
      </ScrollableAnchor>
      // </div >
    )
  }
}

export default ProgramCard

