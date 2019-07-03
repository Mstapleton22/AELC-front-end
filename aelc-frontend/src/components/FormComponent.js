import React, { Component } from 'react';

const post = async (data) => {
  const { url } = data;
  const serverName = 'http://localhost:5000/api/contact'
  delete data.url;
  
  const params = {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    }
  };

  const response = await fetch(serverName, params);

  if (response.status < 200 && response.status >= 300) {
    const res = await response.json();

    throw new Error(res);
  }

  return response.json();
};

class FormComponent extends Component {
  state = {
    error: null,
    submitted: false,
    fields: { name: '', email: '', message: ''}
  };
  
  submitForm(event) {
    const formElement = event.target;
    const {name, email, message} = formElement.elements;
    // build the request payload which includes the url of the end-point we want to hit
    const payload = {
      url: 'api/contact',
      name: name,
      email: email,
      message: message,
    };
    
    // call the post helper function which returns a promise, which we can use to update the
    // state of our component once returned
    post(payload)
      .then(() => {
        // on success, clear any errors and set submitted state to true
        this.setState({error: null, submitted: true});
      })
      .catch(error => {
        // on error, update error state with the error message and set submitted to false
        this.setState({error: error.message, submitted: false});
      });
  }

  render() {
    return (
      <form ref={this.formElement}
            onSubmit={(event) => this.submitForm(event)}>
      <div className="card-body mx-2">
        <h5 className='mt-3'>* Add disclaimer or note about process?</h5>
        <input type="date" className="form-control mb-2 mt-3" placeholder="Tour Date" aria-describedby="defaultRegisterFormPhoneHelpBlock"/>

        <input type="date" className="form-control mb-2" placeholder="Requested start date" aria-describedby="defaultRegisterFormPhoneHelpBlock"/>

        <div class="input-group mb-3">
          <div class="input-group-prepend">
            <label class="input-group-text" for="inputGroupSelect01">Classroom:</label>
          </div>
          <select class="custom-select" id="inputGroupSelect01">
          <option value="Firefly">Firefly (12 months - 2 years)</option>
          <option value="Bumblebee">Bumblebee (2 - 3 years)</option>
          <option value="Ladybug">Ladybug (2 1/2 - 3 1/2 years)</option>
          <option value="Butterfly">Butterfly (3 - 4)</option>
          <option value="Cricket">Cricket (4 years by October 1st)</option>
          </select>
        </div>

        <div>
          <h5>Check all that apply:</h5>
          <div class="input-group mb-1">
            <div class="input-group-prepend">
              <div class="input-group-text">
                <input type="checkbox" aria-label="Checkbox for following text input"/>
              </div>
            </div>
            <div class="form-control" aria-label="Text input with checkbox">Current Family</div>
          </div>
          <div class="input-group mb-1">
            <div class="input-group-prepend">
              <div class="input-group-text">
                <input type="checkbox" aria-label="Checkbox for following text input"/>
              </div>
            </div>
            <div class="form-control" aria-label="Text input with checkbox">Staff</div>
          </div>
          <div class="input-group mb-1">
            <div class="input-group-prepend">
              <div class="input-group-text">
                <input type="checkbox" aria-label="Checkbox for following text input"/>
              </div>
            </div>
            <div class="form-control" aria-label="Text input with checkbox">Church Member</div>
          </div>

          <div class="input-group mb-1">
            <div class="input-group-prepend">
              <div class="input-group-text">
                <input type="checkbox" aria-label="Checkbox for following text input"/>
              </div>
            </div>
            <div class="form-control" aria-label="Text input with checkbox">Sibling</div>
          </div>

          <div class="input-group mb-2">
            <div class="input-group-prepend">
              <div class="input-group-text">
                <input type="checkbox" aria-label="Checkbox for following text input"/>
              </div>
            </div>
            <div class="form-control" aria-label="Text input with checkbox">New</div>
          </div>
      </div>

        <input type="text" className="form-control mb-2" placeholder="Child's Name" aria-describedby="defaultRegisterFormPhoneHelpBlock" />

        <input type="date" className="form-control mb-2" placeholder="Birthdate" aria-describedby="defaultRegisterFormPhoneHelpBlock" />

      <h5 className='my-2'>Parent/Guardian Information:</h5>

        <input type="text" className="form-control mb-2" placeholder="Guardians's Full Name" aria-describedby="defaultRegisterFormPhoneHelpBlock" />

        <input type="text" className="form-control mb-2" placeholder="Relationship" aria-describedby="defaultRegisterFormPhoneHelpBlock" />

        <input type="text" className="form-control mb-2" placeholder="Address" aria-describedby="defaultRegisterFormPhoneHelpBlock" />

        <input type="email" className="form-control mb-2" placeholder="Email" aria-describedby="defaultRegisterFormPhoneHelpBlock" />

        <input type="number" id="defaultRegisterPhonePassword" className="form-control mb-2" placeholder="Phone Number" aria-describedby="defaultRegisterFormPhoneHelpBlock" />

        <div className='my-2'>
          <h5>Second Parent/Guardian (Optional):</h5>

          <input type="text" className="form-control mb-2" placeholder="Guardians's Full Name" aria-describedby="defaultRegisterFormPhoneHelpBlock" />

          <input type="text" className="form-control mb-2" placeholder="Relationship" aria-describedby="defaultRegisterFormPhoneHelpBlock" />

          <input type="text" className="form-control mb-2" placeholder="Address" aria-describedby="defaultRegisterFormPhoneHelpBlock" />

          <input type="email" className="form-control mb-2" placeholder="Email" aria-describedby="defaultRegisterFormPhoneHelpBlock" />

          <input type="number" id="defaultRegisterPhonePassword" className="form-control mb-2" placeholder="Phone Number" aria-describedby="defaultRegisterFormPhoneHelpBlock" />
        </div>

          

          <button className="btn btn-success my-4 btn-block" type="submit">Submit</button>
        </div>
      
      </form>
    );
  }
}

export default FormComponent;