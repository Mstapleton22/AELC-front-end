
import React, { Component, createRef } from "react";
import ProgramCard from './ProgramCard'
import ScrollableAnchor, { configureAnchors } from 'react-scrollable-anchor'
import ProgramMenuBar from './ProgramMenuBar'
import StickyBox from "react-sticky-box/dist/esnext"


class ProgramsPage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      programs: [],
      loadedData: false,
      contact: {}
    }

    fetch("https://pure-fortress-15361.herokuapp.com/programs")
      .then(data => data.json())
      .then(JSONdata => {
        this.setState({
          programs: JSONdata,
          loadedData: true
        })
      })

    fetch("https://pure-fortress-15361.herokuapp.com/contact")
      .then(data => data.json())
      .then(JSONdata => {
        this.setState({
          contact: JSONdata,
          loadedData: true
        })
      })
  }
  componentWillMount() {
    configureAnchors({ offset: -105 })
  }



  render() {

    return (
      this.state.loadedData ?
        <div className="programHeader" >
          <div style={{ height: "80vh", position: "relative" }}>
            <StickyBox className="stickyBar mobileStickyBar">
              <div className="h1-responsive font-weight-bold p-2 programsOffered">
                Programs We Offer
          </div>
            </StickyBox>
            <div className="row no-gutters">

              <div className="col-lg-2">
                <StickyBox className="stickyBar stickyBtnWrapper mobileStickyBar" style={{ height: "100vh" }}>
                  {
                    this.state.programs.map(item =>
                      <ProgramMenuBar id={item.id} name={item.name} image={item.image_url} body={item.body} />
                    )
                  }
                </StickyBox>
              </div>

              <div className="col-lg-10 programCards">
                {
                  this.state.programs.map(item =>
                    <ProgramCard key={item.id}
                      style={{ height: '350px' }} id={item.id} name={item.name} image={item.image_url} body={item.body}
                    />
                  )
                }
              </div>
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