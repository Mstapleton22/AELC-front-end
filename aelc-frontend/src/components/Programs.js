import React, { Component } from "react";
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol } from 'mdbreact';
import ProgramCard from './ProgramCard'

class ProgramsPage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      programs: [],
      loadedData: false
    }

    fetch("https://boiling-everglades-64895.herokuapp.com/programs")
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
        this.state.programs.map(item =>
          <ProgramCard id={item.id} name={item.name} image={item.image_url} body={item.body}
          />
        )
        :
        <div>
          Loading...
        </div>
    )
  }
}
export default ProgramsPage;