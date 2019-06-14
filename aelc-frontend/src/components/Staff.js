import React, { Component } from "react";
import { MDBRow, MDBCol, MDBCard, MDBCardBody, MDBMask, MDBIcon, MDBView, MDBBtn } from "mdbreact";
import { thisExpression } from "@babel/types";

class StaffPage extends Component {
  constructor() {
    super()
    this.state = {
      staff: [],
    }

    fetch("https://boiling-everglades-64895.herokuapp.com/staff")
      .then(data => data.json())
      .then(JSONdata => {
        // console.log(JSONdata)
        this.setState({
          staff: JSONdata
        })
        console.log('staff', this.state.staff)

      })

  }
  render() {
    console.log(this.state.staff)
    return (
      <div>
        <h2 className="h1-responsive font-weight-bold text-center my-3">
          Meet the Staff
    </h2>
        <div className="row justify-content-center">
          {
            this.state.staff.map((staff, i) => (
              <MDBCard className="my-5 px-5 pb-3">
                <MDBCardBody className=" justify-content-center mb-lg-0 mb-4" hover waves>
                  <img
                    className="img-fluid"
                    src={staff.image}
                    alt="teacher"
                  />
                  <h3 className="h3-responsive row justify-content-center">{staff.name}</h3>
                  <p className="h3-responsive row justify-content-center">{staff.bio}</p>
                </MDBCardBody>
              </MDBCard>
            ))
          }
        </div>
      </div >
    )
  }
}
export default StaffPage;