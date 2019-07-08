import React, { Component } from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

class FooterPage extends Component {
  render() {
    return (
      <div className="footer">
        <MDBFooter className="font-small staticColor pt-4" >
          <MDBRow className="footerRow no-gutters">
            <MDBCol md="5" className="footerCol">
              <h5 className="title">Contact Us</h5>
              {this.props.contact.map(contact => <p style={{ padding: '-40px' }}>
                <li className="list-unstyled">
                  {contact.hours}</li>
                <li className="list-unstyled">
                  {contact.address}</li>
                <li className="list-unstyled">
                  {contact.phone}</li> <li className="list-unstyled">
                  {contact.email}</li>
              </p>
              )}
            </MDBCol>
            <MDBCol md="6"> </MDBCol>
          </MDBRow>
        </MDBFooter>
      </div >
    )
  }
}

export default FooterPage;


