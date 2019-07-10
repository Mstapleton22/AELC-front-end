import React, { Component } from "react";
import { MDBRow, MDBCol, MDBCard, MDBCardBody, MDBMask, MDBIcon, MDBView, MDBBtn } from "mdbreact";
import { thisExpression } from "@babel/types";
import StaffCard from "./StaffCard"

class StaffPage extends Component {
  constructor() {
    super()
    this.state = {
      staff: [],
    }

    fetch("http://localhost:5000/staff")
      .then(data => data.json())
      .then(JSONdata => {
        this.setState({
          staff: JSONdata
        })

  })

  }
  render() {
    return (
      <div>
        <h2 className="h1-responsive font-weight-bold no-gutters text-center my-3">
          Meet the Staff
    </h2>
        <div className="row no-gutters staff">
          {
            this.state.staff.map(item =>
              <StaffCard id={item.id} name={item.name} image={item.image_url} bio={item.bio} />
            )
          }
        </div>
      </div >
    )
  }
}
export default StaffPage;