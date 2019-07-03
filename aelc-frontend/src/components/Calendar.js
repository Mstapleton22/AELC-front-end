import React, { Component } from "react";
import { MDBCarousel, MDBCarouselCaption, MDBCarouselInner, MDBCarouselItem, MDBView, MDBMask, MDBContainer } from
  "mdbreact";

class Calendar extends Component {
  render() {
    return (
        <div className="img-fluid">
          <div>
            <iframe src="https://calendar.google.com/calendar/embed?src=mike.stapleton2%40gmail.com&ctz=America%2FDenver" className="calendar"></iframe>
          </div>
        </div >
    )
  }
}

export default Calendar;