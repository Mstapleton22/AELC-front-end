import React, { Component } from "react";
import { MDBCarousel, MDBCarouselCaption, MDBCarouselInner, MDBCarouselItem, MDBView, MDBMask, MDBContainer } from
  "mdbreact";
import CarouselCard from './CarouselCard'
class HomePage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      carousel: [],
    };
    fetch("https://boiling-everglades-64895.herokuapp.com/carousel")
      .then(data => data.json())
      .then(JSONdata => {
        this.setState({
          carousel: JSONdata
        })
      })
  }
  render() {
    return (
      <div>
      </div>
    )
  }
}

export default HomePage;