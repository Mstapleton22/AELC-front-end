import React, { Component } from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

class FooterPage extends Component {
  render() {
    return (
      <div className="footer" style={{ position: 'relative', bottom: '0', width: '100%' }}>
        <MDBFooter className="font-small staticColor pt-4" >
          {/* <MDBContainer className=""> */}
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
                // </ul>
              )}
            </MDBCol>
            <MDBCol md="6"> </MDBCol>
          </MDBRow>
          {/* </MDBContainer> */}
        </MDBFooter>
      </div >
    )
  }
}

export default FooterPage;


