import React, { Component } from "react";
import { MDBCarousel, MDBCarouselCaption, MDBCarouselInner, MDBCarouselItem, MDBView, MDBMask, MDBContainer } from
  "mdbreact";

class Calendar extends Component {
  render() {
    // console.log(this.props.carousel.image)

    return (
      <div className="row">
        <MDBContainer className="img-fluid container">
          <div>
            <iframe src="https://calendar.google.com/calendar/embed?src=mike.stapleton2%40gmail.com&ctz=America%2FDenver" className="calendar"></iframe>
          </div>
        </MDBContainer >
      </div>
    )
  }
}

export default Calendar;