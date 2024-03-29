import React, { Component } from "react";

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contact: [],
      loadedData: false,
    };
    fetch("https://pure-fortress-15361.herokuapp.com/contact")
      .then(data => data.json())
      .then(JSONdata => {
        this.setState({
          contact: JSONdata,
          loadedData: true
        })
      })
  }

  render() {
    return (
      this.state.loadedData ?

        <div>
          <div className="row contact_row no-gutters">
            <div className="col-lg-12 contact_row">
              <div className="contact_container contact_row  clock ">
                <i className="contact_image contact_icon far fa-clock"></i>
                <div className="contact_overlay">
                  <h3 className="contact_text">{this.state.contact[0].hours}</h3>
                </div>
              </div>
              <div className="contact_container address">
                <i className="contact_image  contact_icon fas fa-map-marked-alt"></i>
                <div className="contact_overlay">
                  <a href="https://goo.gl/maps/cFs2EqNe1b1iPBkf8" target="_blank" className="h3-responsive addressHover contact_text">{this.state.contact[0].address}</a>
                </div>
              </div>
              <div className="contact_container phone">
                <i className="contact_image  contact_icon fas fa-phone"></i>
                <div className="contact_overlay">
                  <h3 className="contact_text">{this.state.contact[0].phone}</h3>
                </div>
              </div>
              <div className="contact_container email">
                <i className="contact_image  contact_icon fas fa-at"></i>
                <div className="contact_overlay">
                  <h3 className="contact_text">{this.state.contact[0].email}</h3>
                </div>
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

export default Contact;

