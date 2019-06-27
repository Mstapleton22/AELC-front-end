import React, { Component } from "react";
import { MDBCarousel, MDBCarouselCaption, MDBCarouselInner, MDBCarouselItem, MDBView, MDBMask, MDBContainer } from
  "mdbreact";
import CarouselCard from './CarouselCard'
import Accreditation from './Accreditation'

class HomePage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      carousel: [],
      accreditation: [],
    };
    fetch("https://boiling-everglades-64895.herokuapp.com/carousel")
      .then(data => data.json())
      .then(JSONdata => {
        this.setState({
          carousel: JSONdata
        })
      })

    fetch("https://boiling-everglades-64895.herokuapp.com/accreditation")
      .then(data => data.json())
      .then(JSONdata => {
        this.setState({
          accreditation: JSONdata
        })
      })
  }
  render() {
    return (
      <div>
        <div className="row">
          {this.state.carousel.map(item =>
            <CarouselCard id={item.id} image={item.image_url} imageName={item.image_name} quote={item.quote} quoter={item.quoter} />)}
        </div>
        <div className="aboutMe">
          <h1 className="row justify-content-center">About Us</h1>
          <div className="about row">
            <div className="col-lg-2"></div>
            <p className="col-lg-8 alight-items-center mobile">The Augustana Day Care Center opened its doors on May 1, 1971, fulfilling a long held dream of the congregation's Social Ministry Committee. Since its inception the Center was welcomed children
without regard to faith, culture or ethnicity.</p>
            <div className="col-lg-2"></div>
            <div className="col-lg-2"></div>
            <p className="col-lg-8 alight-items-center mobile">Seen as a congregational ministry to the broader community the Center has always had some
      spaces available to lower income families, providing assistance for those in need. The goal of the Center has been to provide care for children in a clean, safe,
and nurturing environment that promotes learning and enhances the child's well-being.</p>
            <div className="col-lg-2"></div>
            <div className="col-lg-2"></div>
            <p className="col-lg-8 alight-items-center mobile">
              Believing that a balance of good nutrition, adequate rest, and ample opportunity for exploration and learning in developmentally appropriate ways is critical to the child's well-being.</p>
            <div className="col-lg-2"></div>
          </div>
          <div className="row accredRow">
            <h5 className="title">Accreditation</h5>
            {this.state.accreditation.map(item =>
              <Accreditation id={item.id} accredImage={item.image_url} imageName={item.image_name} quote={item.quote} quoter={item.quoter} />)}
          </div>
          <div className="row">
            {/* <button className="btn btn-secondary waves-effect mission mr-4" type="button" data-toggle="collapse" data-target="#mission"
                aria-expanded="false" aria-controls="multiCollapseExample2">Our Mission</button>
              <button className="btn btn-secondary ml-2 mission" type="button" data-toggle="collapse" data-target="#vision"
                aria-expanded="false" aria-controls="multiCollapseExample2">Our Vision</button> */}
            {/* <div className="collapse multi-collapse" id="mission"> */}
            <div className="col-lg-6">
              Augustana Early Learning Center serves children and their families through high quality, affordable care and education. We welcome children from diverse cultures, faith traditions, socioeconomic backgrounds, and national origins. We provide learning experiences that foster developmentally-appropriate growth to teach children to love themselves and others.
               </div>
          </div>
          {/* <div className="collapse multi-collapse" id="vision"> */}
          <div className="col-lg-6">
            Augustana Early Learning Center is a community outreach ministry of Augustana Lutheran Church with a vision to love children and inspire them to become engaged, emotionally-intelligent, and curious learners.
                </div>
        </div>
      </div>
      //   </div>
      // </div >
    )
  }
}

export default HomePage;