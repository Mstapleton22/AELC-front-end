import React, { Component } from "react";
import CarouselCard from './CarouselCard'
import Accreditation from './Accreditation'
import { MDBView, MDBMask, MDBContainer } from
  "mdbreact";

class HomePage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      carousel: [],
      accreditation: [],
      missionAndVision: [{}, {}],
    };
  }

  carouselFetch = () => {
    fetch("https://pure-fortress-15361.herokuapp.com/carousel")
      .then(data => data.json())
      .then(JSONdata => {
        this.setState({
          carousel: JSONdata
        })
      })
  }

  accredFetch = () => {
    fetch("https://pure-fortress-15361.herokuapp.com/accreditation")
      .then(data => data.json())
      .then(JSONdata => {
        this.setState({
          accreditation: JSONdata
        })
      })
  }

  missionFetch = () => {
    fetch("https://pure-fortress-15361.herokuapp.com/missionandvision")
      .then(data => data.json())
      .then(JSONdata => {
        this.setState({
          missionAndVision: JSONdata,
        })
      })
  }


  componentDidMount() {
    this.carouselFetch()
    this.accredFetch()
    this.missionFetch()
  }
  render() {
    return (
      <div>
        <div className="row no-gutters">
          {this.state.carousel.map(item =>
            <CarouselCard id={item.id} image={item.image_url} imageName={item.image_name} quote={item.quote} quoter={item.quoter} />)}
        </div>
        <div className="aboutMe no-gutters">
          <div className="arrow-down"></div>
          <div className="row about no-gutters justify-content-center">
            <div className="aboutName ">
              About Us
            </div>
          </div>
          <div className="about no-gutters row">
            <div className="col-lg-2"></div>
            <p className="col-lg-8 fontRegular alight-items-center mobile">The Augustana Day Care Center opened its doors on May 1, 1971, fulfilling a long held dream of the congregation's Social Ministry Committee. Since its inception the Center was welcomed children
without regard to faith, culture or ethnicity.</p>
            <div className="col-lg-2"></div>
            <div className="col-lg-2"></div>
            <p className="col-lg-8 fontRegular alight-items-center mobile">Seen as a congregational ministry to the broader community the Center has always had some
      spaces available to lower income families, providing assistance for those in need. The goal of the Center has been to provide care for children in a clean, safe,
and nurturing environment that promotes learning and enhances the child's well-being.</p>
            <div className="col-lg-2"></div>
            <div className="col-lg-2"></div>
            <p className="col-lg-8 fontRegular alight-items-center mobile mobile3">
              Believing that a balance of good nutrition, adequate rest, and ample opportunity for exploration and learning in developmentally appropriate ways is critical to the child's well-being.</p>
            <div className="col-lg-2"></div>
          </div>
          <div className="accredAll no-gutters">
            <div className="row accredTitleRow no-gutters">
              <img className="accredTitle no-gutters" src="recognitions.png" alt="logo"></img>
            </div>
            <div className="row accredRow no-gutters">
              {this.state.accreditation.map(item =>
                <div className="accredBox no-gutters">
                  <Accreditation id={item.id} accredImage={item.image_url} name={item.name} imageName={item.image_name} />
                </div>
              )}
            </div>

          </div>

          <div className="no-gutters">
            <div className="row missionRow no-gutters">
              <div className="col-lg-1 no-gutters"></div>
              <div className="col-lg-4 mission ">
                <MDBView hover className="hoverMission">
                  <div className="missionText no-gutters">
                    <h1 className="missionStyle flex-center">
                      {this.state.missionAndVision[0].name}
                    </h1>
                    <MDBMask className="flex-center hoverFont" overlay="white-strong">
                      <p className="black-text">
                        {this.state.missionAndVision[0].body}
                      </p>
                    </MDBMask>
                  </div>
                </MDBView>
              </div>
              <div className="col-lg-1"></div>
              <div className="col-lg-4 vision ">
                <MDBView hover className="hoverMission">
                  <div className="visionText no-gutters">
                    <h1 className="missionStyle">
                      {this.state.missionAndVision[1].name}
                    </h1>
                    <MDBMask className="flex-center hoverFont" overlay="white-strong">
                      <p className="black-text">
                        {this.state.missionAndVision[1].body}
                      </p>
                    </MDBMask>
                  </div>
                </MDBView>
              </div>
              <div className="col-lg-1"></div>
            </div>
          </div>
        </div>
      </div >
    )
  }
}

export default HomePage;