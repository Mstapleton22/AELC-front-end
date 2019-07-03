import React, { Component } from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contact: [],
      loadedData: false,
    };
    fetch("https://boiling-everglades-64895.herokuapp.com/contact")
      .then(data => data.json())
      .then(JSONdata => {
        this.setState({
          contact: JSONdata,
          loadedData: true
        })
      })
  }

  render() {
    console.log("loaded", this.state.loadedData)
    return (
      // this.state.loadedData ?

      <div>
        <div className="row contact_row no-gutters">

          {/* <div className="row  no-gutters" > */}
            {/* <div className="col-lg-2">
              <div className="contact_container">
                <h3 className="">Contact Us: </h3>
                <div className="contact_overlay">
                  <div></div>
                </div>
              </div>
            </div> */}
            {/* <div className="col-lg-12"> */}
            <div className="contact_container">
              <i className="contact_image contact_icon far fa-clock"></i>
              <div className="contact_overlay">
                <h3 className="contact_text">Hours of Operation: 7 a.m - 6 p.m daily</h3>
              </div>

            </div>
            {/* </div> */}
            {/* <div className="col-lg-3"> */}
            <div className="contact_container">
              <i class="contact_image contact_icon fas fa-map-marked-alt"></i>
              <div className="contact_overlay">
                <h3 className="contact_text">Address: 5000 East Alameda Avenue, Denver, Colorado 80249</h3>
              </div>
            </div>
            {/* </div>

            <div className="col-lg-3"> */}
            <div className="contact_container">
              <i class="contact_image contact_icon fas fa-phone"></i>
              <div className="contact_overlay">
                <h3 className="contact_text">Phone: (303)338-7012</h3>
              </div>
            </div>
            {/* </div>
            <div className="col-lg-3"> */}
            <div className="contact_container">
              <i class="contact_image contact_icon fas fa-at"></i>
              <div className="contact_overlay">
                <h3 className="contact_text">edwards@augustanadenver.org</h3>
              </div>
            </div>
            {/* </div> */}
            {/* <h3 className="justify-content-center">
              {this.state.contact[0].hours}</h3> */}
            {/* <h3 className="justify-content-center">
              {this.state.contact[0].address}</h3> */}
            {/* <h3 className="justify-content-center">
              {this.state.contact[0].phone}</h3>
            <h3 className="justify-content-center">
              {this.state.contact[0].email}</h3> */}
          </div>

        </div>
      // </div >
    )
  }
}

export default Contact;

    //   {/* :
    //  <div>
    //    Loading...
    //  </div> */}