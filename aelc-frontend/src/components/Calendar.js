import React, { Component } from "react";

class Calendar extends Component {
  render() {
    return (
      <div className="img-fluid">
        <div>
          <iframe src="https://calendar.google.com/calendar/embed?src=aelcdenver%40gmail.com&ctz=America%2FDenver" className="calendar"></iframe>
        </div>
      </div >
    )
  }
}

export default Calendar;