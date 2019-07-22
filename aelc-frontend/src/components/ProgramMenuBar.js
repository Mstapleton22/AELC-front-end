import React, { Component } from 'react'
import { MDBBtn } from 'mdbreact';


class ProgramMenuBar extends Component {

  render() {
    return (
      < div >
        <MDBBtn href={`#${this.props.id}`} className="font-weight-bold stickyBtn" color="#4ca468" lg="7">{this.props.name}</MDBBtn>
      </div >
    )
  }
}

export default ProgramMenuBar