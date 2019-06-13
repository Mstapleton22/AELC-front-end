import React, { Component } from "react";

const ParentResources = (props) => {
  return (
    <div>

      <div className='container'>
        <div className="accordion md-accordion mt-5" id="accordionEx" role="tablist" aria-multiselectable="true">
          <div className="card">

            <div className="card-header" role="tab" id="headingOne1">
              <a data-toggle="collapse" data-parent="#accordionEx" href="#collapseOne1" aria-expanded="true"
                aria-controls="collapseOne1">
                <h5 className="mb-0">
                  Waitlist Application <i className="fas fa-angle-down rotate-icon"></i>
                </h5>
              </a>
            </div>


            <div id="collapseOne1" className="collapse show" role="tabpanel" aria-labelledby="headingOne1"
              data-parent="#accordionEx">
              <div className="card-body">

                <input type="text" className="form-control mb-2" placeholder="Child's Name" aria-describedby="defaultRegisterFormPhoneHelpBlock" />

                <input type="text" className="form-control mb-2" placeholder="Birthdate" aria-describedby="defaultRegisterFormPhoneHelpBlock" />

                <input type="text" className="form-control mb-2" placeholder="Guardians's Full Name" aria-describedby="defaultRegisterFormPhoneHelpBlock" />

                <input type="text" className="form-control mb-2" placeholder="Relationship" aria-describedby="defaultRegisterFormPhoneHelpBlock" />

                <input type="text" className="form-control mb-2" placeholder="Address" aria-describedby="defaultRegisterFormPhoneHelpBlock" />

                <input type="email" className="form-control mb-2" placeholder="Email" aria-describedby="defaultRegisterFormPhoneHelpBlock" />

                <input type="number" id="defaultRegisterPhonePassword" className="form-control mb-2" placeholder="Phone Number" aria-describedby="defaultRegisterFormPhoneHelpBlock" />

                <button className="btn btn-info my-4 btn-block" type="submit">Submit</button>
              </div>
            </div>
          </div>

          <div className="card mt-5">


            <div className="card-header" role="tab" id="headingTwo2">
              <a className="collapsed" data-toggle="collapse" data-parent="#accordionEx" href="#collapseTwo2"
                aria-expanded="false" aria-controls="collapseTwo2">
                <h5 className="mb-0">
                  Tuition Information <i className="fas fa-angle-down rotate-icon"></i>
                </h5>
              </a>
            </div>


            <div id="collapseTwo2" className="collapse" role="tabpanel" aria-labelledby="headingTwo2"
              data-parent="#accordionEx">
              <div className="card-body">
                {/* {props.tuition.image1} */}
              </div>
              <div className="card-body">
                {/* {props.tuition.image2} */}
              </div>
            </div>
          </div>
          <div className="card mt-5 mb-5">
            <div className="card-header" role="tab" id="headingThree3">
              <a className="collapsed" data-toggle="collapse" data-parent="#accordionEx" href="#collapseThree3"
                aria-expanded="false" aria-controls="collapseThree3">
                <h5 className="mb-0">
                  Parent Handbook<i className="fas fa-angle-down rotate-icon"></i>
                </h5>
              </a>
            </div>

            <div id="collapseThree3" className="collapse" role="tabpanel" aria-labelledby="headingThree3"
              data-parent="#accordionEx">
              <div className="card-body">
                {/* {props.parentHandbook.document} */}
              </div>
            </div>

          </div>


        </div>
      </div>
    </div>

  )
}

export default ParentResources;
