import React, { Component } from 'react';


class FormComponent extends Component {
  state = {
    error: null,
    submitted: false,
    inquiry_date: '',
    tour_date: '',
    requested_date: '',
    chosen_classroom: '',
    circled: [],
    child_name: '',
    child_bday: '',
    parent_one: '',
    parent_two: '',
    relationship_one: '',
    relationship_two: '',
    address_one: '',
    address_two: '',
    email_one: '',
    email_two: '',
    phone_one: '',
    phone_two: '',
    success: false
  };

  convertDate = (inputDate) => {
    var splitDate = inputDate.split('-');
    if (splitDate.count === 0) {
      return '';
    }
    var year = splitDate[0];
    var month = splitDate[1];
    var day = splitDate[2];

    console.log(String(month + '//' + day + '//' + year))
    return (String(month + '/' + day + '/' + year));
  }

  saveTourDate = (e) => {
    let tourDate = this.convertDate(e.target.value)
    this.setState({
      tour_date: tourDate
    })
  }

  saveStartDate = (e) => {
    let startDate = this.convertDate(e.target.value)
    this.setState({
      requested_date: startDate
    })
  }

  saveClassRoom = (e) => {
    this.setState({
      chosen_classroom: e.target.value
    })
  }

  saveChildName = (e) => {
    this.setState({
      child_name: e.target.value
    })
  }

  saveBday = (e) => {
    let bday = this.convertDate(e.target.value)
    this.setState({
      child_bday: bday
    })
  }
  saveCircledOptions = (e) => {
    if (!this.state.circled.includes(e.target.id)) {
      this.setState({
        circled: [...this.state.circled, e.target.id]
      })
      console.log(this.state.circled, e.target.value)
    } else {
      let newCircled = this.state.circled.filter(item => item !== e.target.id)
      this.setState({
        circled: newCircled
      })
      console.log(this.state.circled, e.target.value)
    }
  }

  saveParentNameOne = (e) => {
    this.setState({
      parent_one: e.target.value
    })
    console.log(this.state.parent_one)
  }


  saveParentNameTwo = (e) => {
    this.setState({
      parent_two: e.target.value
    })
    console.log(e.target.value)
  }

  saveRelationship = (e) => {
    this.setState({
      relationship_one: e.target.value
    })
  }

  saveRelationshipTwo = (e) => {
    this.setState({
      relationship_two: e.target.value
    })
  }

  saveAddressOne = (e) => {
    this.setState({
      address_one: e.target.value
    })
  }

  saveAddressTwo = (e) => {
    this.setState({
      address_two: e.target.value
    })
  }

  saveEmailOne = (e) => {
    this.setState({ email_one: e.target.value })
  }

  saveEmailTwo = (e) => {
    this.setState({ email_two: e.target.value })
  }

  savePhoneOne = (e) => {
    this.setState({ phone_one: e.target.value })
  }

  savePhoneTwo = (e) => {
    this.setState({ ephone_two: e.target.value })
  }

  getCurrentDate = () => {
    let today = new Date();
    let dd = String(today.getDate()).padStart(2, '0');
    let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    let yyyy = today.getFullYear();
    return (String(mm + '/' + dd + '/' + yyyy))
  }


  submitForm = async (props) => {
    let waitlist = {
      inquiry_date: this.getCurrentDate(),
      tour_date: this.state.tour_date,
      requested_date: this.state.requested_date,
      chosen_classroom: this.state.chosen_classroom,
      circled: this.state.circled,
      child_name: this.state.child_name,
      child_bday: this.state.child_bday,
      parent_name: [this.state.parent_one, this.state.parent_two],
      relationship: [this.state.relationship_one, this.state.relationship_two],
      address: [this.state.address_one, this.state.address_two],
      email: [this.state.email_one, this.state.email_two],
      phone: [this.state.phone_one, this.state.phone_two]
    }

    console.log(waitlist)

    fetch(`https://pure-fortress-15361.herokuapp.com/api/contact`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(
        waitlist
      )
    })
    this.setState({
      success: true
    })

  }
  toggleSuccess = () => {
    return (
      <div>
        <div className="successHeader">
          <h1 className="success text-center">Success!</h1>
          <h2 className="success text-center">Please read the disclaimer to follow waitlist procedure.</h2>
        </div>
        <div className="disclaimer">
          <h6>Thank you for your interest in Augustana Early Learning Center. Choosing a quality care program is one of the more important decisions you will make.
</h6>
          <h6>In order to join our waitlist you must have signed and submitted your waitlist application and paid the $50 waitlist fee. This fee is non-refundable, and must be turned in on-site at Augustana Early Learning Center.
</h6>
          <h6>When your registration form AND fee are received, you will be placed on the waiting list. When space becomes available for your child, you will be contacted though email ONLY regarding the enrollment process.
</h6>
          <h4>General Waitlist Information</h4>
          <h6>Our waitlist is organized according to…..</h6>
          <ol>
            <li>Date of application submittal </li>
            <li>Age of Child
</li>
            <li>Priority Positions*</li>
            <li>Requested start date </li>
          </ol>
          <h6>We will NOT inform families of their specific position on the waitlist due to the complexity and variables that can affect that position.  </h6>
          <h4>Priority Positions*</h4>
          <h6>AELC employee, Augustana Church employee, sibling and Augustana church members’ applications will be prioritized first. These children shall be placed on the waitlist according to the date of the application.</h6>
          <h4>Considerations:</h4>
          <h6>If we are able to offer your family the next open spot and you turn it down, you will need to pay full tuition to hold your spot or your application will be moved to the back of the waitlist.</h6>
          <h6>Official acceptance into ALEC requires a signed contract and 1 month tuition as a deposit plus $25 activity fee.</h6>
          <h6>Prior to enrollment, the Center Director or Office Coordinator will schedule a time for a home visit. This will allow you to meet with your child’s primary care givers, learn more about Augustana Early Learning Center program and develop a transition schedule for your child.  </h6>
        </div>
      </div>
    )
  }

  render() {
    {
      if (this.state.success) {
        return this.toggleSuccess()
      } else {
        return (
          <form>
            <div className="card-body mx-2">
              <div className="disclaimer">
                <h6>Thank you for your interest in Augustana Early Learning Center. Choosing a quality care program is one of the more important decisions you will make.
</h6>
                <h6>In order to join our waitlist you must have signed and submitted your waitlist application and paid the $50 waitlist fee. This fee is non-refundable, and must be turned in on-site at Augustana Early Learning Center.
</h6>
                <h6>When your registration form AND fee are received, you will be placed on the waiting list. When space becomes available for your child, you will be contacted though email ONLY regarding the enrollment process.
</h6>
                <h4>General Waitlist Information</h4>
                <h6>Our waitlist is organized according to…..</h6>
                <ol>
                  <li>Date of application submittal </li>
                  <li>Age of Child
</li>
                  <li>Priority Positions*</li>
                  <li>Requested start date </li>
                </ol>
                <h6>We will NOT inform families of their specific position on the waitlist due to the complexity and variables that can affect that position.  </h6>
                <h4>Priority Positions*</h4>
                <h6>AELC employee, Augustana Church employee, sibling and Augustana church members’ applications will be prioritized first. These children shall be placed on the waitlist according to the date of the application.</h6>
                <h4>Considerations:</h4>
                <h6>If we are able to offer your family the next open spot and you turn it down, you will need to pay full tuition to hold your spot or your application will be moved to the back of the waitlist.</h6>
                <h6>Official acceptance into ALEC requires a signed contract and 1 month tuition as a deposit plus $25 activity fee.</h6>
                <h6>Prior to enrollment, the Center Director or Office Coordinator will schedule a time for a home visit. This will allow you to meet with your child’s primary care givers, learn more about Augustana Early Learning Center program and develop a transition schedule for your child.  </h6>
              </div>
              <div className="required">
                <input onChange={(e) => this.saveTourDate(e)} type="date" className="form-control mb-2 mt-3" placeholder="Tour Date" aria-describedby="defaultRegisterFormPhoneHelpBlock" />
              </div>

              <div className="required">
                <input onChange={(e) => this.saveStartDate(e)} type="date" className="form-control mb-2" placeholder="Requested start date" aria-describedby="defaultRegisterFormPhoneHelpBlock" />
              </div>

              <div className="input-group mb-3">
                <div className="input-group-prepend">
                  <div className="required">
                    <label className="input-group-text" for="inputGroupSelect01">
                      Classroom:</label>
                  </div>
                </div>
                <select onClick={(e) => this.saveClassRoom(e)} className="custom-select" id="inputGroupSelect01">
                  <option value="Firefly">Firefly (12 months - 2 years)</option>
                  <option value="Bumblebee">Bumblebee (2 - 3 years)</option>
                  <option value="Ladybug">Ladybug (2 1/2 - 3 1/2 years)</option>
                  <option value="Butterfly">Butterfly (3 - 4)</option>
                  <option value="Cricket">Cricket (4 years by October 1st)</option>
                </select>
              </div>


              <div>
                <div className="required">
                  <h5>Check all that apply:</h5></div>
                <div className="input-group mb-1">
                  <div className="input-group-prepend">
                    <div className="input-group-text">
                      <input onChange={(e) => this.saveCircledOptions(e)} id={'Current Family'} type="checkbox" aria-label="Checkbox for following text input" className="checkbox" />
                    </div>
                  </div>
                  <div className="form-control" aria-label="Text input with checkbox">Current Family</div>
                </div>
                <div className="input-group mb-1">
                  <div className="input-group-prepend">
                    <div className="input-group-text">
                      <input onChange={(e) => this.saveCircledOptions(e)} id="Staff" type="checkbox" aria-label="Checkbox for following text input" className="checkbox" />
                    </div>
                  </div>
                  <div className="form-control" aria-label="Text input with checkbox">Staff</div>
                </div>
                <div className="input-group mb-1">
                  <div className="input-group-prepend">
                    <div className="input-group-text">
                      <input onChange={(e) => this.saveCircledOptions(e)} id='Church Member' type="checkbox" aria-label="Checkbox for following text input" className="checkbox" />
                    </div>
                  </div>
                  <div className="form-control" aria-label="Text input with checkbox">Church Member</div>
                </div>
                <div className="input-group mb-1">
                  <div className="input-group-prepend">
                    <div className="input-group-text">
                      <input onChange={(e) => this.saveCircledOptions(e)} id='Sibling' type="checkbox" aria-label="Checkbox for following text input" className="checkbox" />
                    </div>
                  </div>
                  <div className="form-control" aria-label="Text input with checkbox">Sibling</div>
                </div>

                <div className="input-group mb-2">
                  <div className="input-group-prepend">
                    <div className="input-group-text">
                      <input onChange={(e) => this.saveCircledOptions(e)} id='New' type="checkbox" aria-label="Checkbox for following text input" className="checkbox" />
                    </div>
                  </div>
                  <div className="form-control" aria-label="Text input with checkbox">New</div>
                </div>
              </div>

              <div className="required">
                <h5>Child information</h5>
              </div>
              <input onChange={(e) => this.saveChildName(e)} type="text" className="form-control mb-2" placeholder="Child's Name" aria-describedby="defaultRegisterFormPhoneHelpBlock" />


              <input onChange={(e) => this.saveBday(e)} type="date" className="form-control mb-2" placeholder="Birthdate" aria-describedby="defaultRegisterFormPhoneHelpBlock" />

              <div className="required">
                <h5 className='my-2 '> Parent/Guardian Information:</h5>
              </div>

              <input onChange={(e) => this.saveParentNameOne(e)} type="text"
                className="form-control mb-2"
                placeholder="Guardians's Full Name"
                aria-describedby="defaultRegisterFormPhoneHelpBlock"
                name="name"
                id="name"
              />


              <input onChange={(e) => this.saveRelationship(e)} type="text" className="form-control mb-2" placeholder="Relationship" aria-describedby="defaultRegisterFormPhoneHelpBlock" />

              <input onChange={(e) => this.saveAddressOne(e)} type="text" className="form-control mb-2" placeholder="Address" aria-describedby="defaultRegisterFormPhoneHelpBlock" />

              <input onChange={(e) => this.saveEmailOne(e)} type="email" className="form-control mb-2" placeholder="Email" aria-describedby="defaultRegisterFormPhoneHelpBlock" />

              <input onChange={(e) => this.savePhoneOne(e)} type="number" id="defaultRegisterPhonePassword" className="form-control mb-2" placeholder="Phone Number" aria-describedby="defaultRegisterFormPhoneHelpBlock" />

              <div className='my-2'>

                <h5>Second Parent/Guardian (Optional):</h5>

                <input onChange={(e) => this.saveParentNameTwo(e)} type="text" className="form-control mb-2" placeholder="Guardians's Full Name" aria-describedby="defaultRegisterFormPhoneHelpBlock" />

                <input onChange={(e) => this.saveRelationshipTwo(e)} type="text" className="form-control mb-2" placeholder="Relationship" aria-describedby="defaultRegisterFormPhoneHelpBlock" />

                <input onChange={(e) => this.saveAddressTwo(e)} type="text" className="form-control mb-2" placeholder="Address" aria-describedby="defaultRegisterFormPhoneHelpBlock" />

                <input onChange={(e) => this.saveEmailTwo(e)} type="email" className="form-control mb-2" placeholder="Email" aria-describedby="defaultRegisterFormPhoneHelpBlock" />

                <input onChange={(e) => this.savePhoneTwo(e)} type="number" id="defaultRegisterPhonePassword" className="form-control mb-2" placeholder="Phone Number" aria-describedby="defaultRegisterFormPhoneHelpBlock" />
              </div>

              <button onClick={() => this.submitForm(this.props)} className="btn btn-success my-4   btn-block" type="submit">Submit</button>
            </div>
          </form>
        );
      }
    }

  }
}


export default FormComponent;



