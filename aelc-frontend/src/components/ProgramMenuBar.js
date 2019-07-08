import React, { Component } from 'react'
import { MDBContainer, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter } from 'mdbreact';


class ProgramMenuBar extends Component {

  constructor(props) {
    super(props);

    this.state = {
      // modal: false
    };
  }

  render() {
    return (
      < div >
        <MDBBtn href={`#${this.props.id}`} className="font-weight-bold stickyBtn" color="#4ca468" lg="7">{this.props.name}</MDBBtn>
      </div >
    )
  }
}

export default ProgramMenuBar

// onClick = {() => <ProgramCard />}