import React, { Component } from "react";
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol } from 'mdbreact';
import ProgramCard from './ProgramCard'
import ProgramMenuBar from './ProgramMenuBar'
import StickyBox from "react-sticky-box/dist/esnext"


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
        <div className="programHeader">
          <h2 className="h1-responsive font-weight-bold p-3 programHeader text-center ">
            Programs We Offer
          </h2>
          <div style={{ height: "80vh", position: "relative", overflow: "auto" }}>
            <div style={{ position: "absolute" }}>
              <div className="row no-gutters">

                <div className="col-lg-3">
                  <StickyBox className="stickyBar mobileStickyBar" style={{ height: "50vh" }}>
                    {
                      this.state.programs.map(item =>
                        <ProgramMenuBar id={item.id} name={item.name} image={item.image_url} body={item.body}
                        />
                      )
                    }
                  </StickyBox>
                </div>
                {/* </div> */}

                <div className="col-lg-9 programCards">
                  {
                    this.state.programs.map(item =>
                      <ProgramCard id={item.id} name={item.name} image={item.image_url} body={item.body}
                      />
                    )
                  }
                </div>
              </div>
            </div>

          </div>
        </div >
        // </div >
        :
        <div>
          Loading...
        </div>

    )
  }
}
export default ProgramsPage;