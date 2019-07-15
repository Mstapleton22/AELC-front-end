import React, { Component } from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import Accreditation from "./Accreditation.js"

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
        // console.log(JSONdata)
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
            <MDBCol md="5" className="footerCol text-left">
              <h5 className="title">Contact Us</h5>
              {this.props.contact.map(contact => <p style={{ padding: '-40px' }}>
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
            <MDBCol md="6">
              <div className=" accredFooterRow no-gutters">
                {this.state.accreditation.map(item =>
                  <div className="accredFooterBox text-center no-gutters">
                    <Accreditation id={item.id} accredImage={item.image_url} name={item.name} imageName={item.image_name} />
                  </div>
                )}
              </div>
            </MDBCol>
          </MDBRow>
        </MDBFooter>
      </div >
    )
  }
}

export default FooterPage;


