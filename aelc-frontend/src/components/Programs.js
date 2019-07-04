import React, { Component } from "react";
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol } from 'mdbreact';
import ProgramCard from './ProgramCard'
import ProgramMenuBar from './ProgramMenuBar'


class ProgramsPage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      programs: [],
      loadedData: false
    }

    fetch("http://localhost:5000/programs")
      .then(data => data.json())
      .then(JSONdata => {
        // console.log('bbom',JSONdata[0].name)
        this.setState({
          programs: JSONdata,
          loadedData: true
        })
      })
  }

  render() {
    console.log(this.state.programs)
    return (
      this.state.loadedData ?
        <div>
          <h2 className="h1-responsive font-weight-bold text-center ">
            Programs We Offer
          </h2>
          <div className="row">
            <div className="col-lg-4">
              {
                this.state.programs.map(item =>
                  <ProgramMenuBar id={item.id} name={item.name} image={item.image_url} body={item.body}
                  />
                )
              }
            </div>
            <div className="col-lg-8">

              {
                this.state.programs.map(item =>
                  <ProgramCard id={item.id} name={item.name} image={item.image_url} body={item.body}
                  />
                )
              }
            </div>
          </div>
        </div>
        :
        <div>
          Loading...
        </div>

    )
  }
}
export default ProgramsPage;