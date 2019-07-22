import React, { Component } from "react";
import { MDBCol, MDBRow, MDBFooter } from "mdbreact";

class FooterPage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      accreditation: [],
    };
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

  componentDidMount() {
    this.accredFetch()
  }
  render() {
    return (
      <div className="footer">
        <MDBFooter className="font-small staticColor pt-4" >
          <MDBRow className="footerRow no-gutters">
            <MDBCol md="11" className="footerCol text-left">
              <h5 className="title">Contact Us</h5>
              {this.props.contact.map(contact => <p key={contact.id} style={{ padding: '-40px' }}>
                <li className="list-unstyled">
                  Hours: {contact.hours}</li>
                <a href="https://goo.gl/maps/cFs2EqNe1b1iPBkf8" target="_blank" className=" list-unstyled">
                  Address: {contact.address}</a>
                <li className="list-unstyled">
                  Phone: {contact.phone}</li> <li className="list-unstyled">
                  Email: {contact.email}</li>
              </p>
              )}
            </MDBCol>
          </MDBRow>
        </MDBFooter>
      </div >
    )
  }
}

export default FooterPage;


