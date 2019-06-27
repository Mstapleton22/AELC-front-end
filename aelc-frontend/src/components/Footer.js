import React, { Component } from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

class FooterPage extends Component {
  render() {
    return (
      <div className="footer" style={{ position: 'relative', bottom: '0', width: '100%' }}>
        <MDBFooter className="font-small pt-4 staticColor mt-4">
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
            {/* <MDBCol md="6">
              <h5 className="title">Accreditation</h5>
              <img className="accreditation" src="ECADAlogo.gif " alt="accreditation" height="100" width="100" />
              <img className="accreditation" src="COShines_Accreditation.png" alt="accreditation" height="80" width="250" />
              <img className="accreditation" src="COShines_Program Quality Rating_4 Diamonds.png" alt="accreditation" height="80" width="250" />
            </MDBCol> */}
          </MDBRow>
          {/* </MDBContainer> */}
        </MDBFooter>
      </div >
    )
  }
}

export default FooterPage;


