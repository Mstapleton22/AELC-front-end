import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

const FooterPage = (props) => {
  return (
    <div>
      <MDBFooter className="font-small pt-4 staticColor mt-4">
        <MDBContainer fluid className="text-center text-md-left">
          <MDBRow>
            <MDBCol md="6">
              <h5 className="title">Contact Us</h5>
              <ul>
                <li className="list-unstyled">
                  {props.contact.hours}
                </li>
                <li className="list-unstyled">
                  {props.contact.address}
                </li>
                <li className="list-unstyled">
                  {props.contact.phone}
                </li>
                <li className="list-unstyled">
                  <a href="edwards@augustanadenver.org">{props.contact.email}</a>
                </li>
              </ul>
            </MDBCol>
            <MDBCol md="6">
              <h5 className="title">Accreditation</h5>
              <img className="accreditation" src="ECADAlogo.gif " alt="accreditation" height="100" width="100" />
              <img className="accreditation" src="COShines_Accreditation.png" alt="accreditation" height="80" width="250" />
              <img className="accreditation" src="COShines_Program Quality Rating_4 Diamonds.png" alt="accreditation" height="80" width="250" />
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </MDBFooter>
    </div>
  );
}

export default FooterPage;


