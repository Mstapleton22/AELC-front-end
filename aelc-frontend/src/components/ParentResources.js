import React, { Component } from "react";
import FormComponent from './FormComponent'
import TuitionCard from './TuitionCard'


class ParentResources extends Component {

  constructor() {
    super()
    this.state = {
      tuition: [],
      loadingData: false,
      parenthandbook: ''
    }
    fetch("https://pure-fortress-15361.herokuapp.com/tuition")
      .then(data => data.json())
      .then(JSONdata => {
        this.setState({
          tuition: JSONdata,
          loadingData: true
        })
      })

      fetch("https://pure-fortress-15361.herokuapp.com/parenthandbook")
      .then(data => data.json())
      .then(JSONdata => {
        // console.log("tuition", JSONdata)
        this.setState({
          parenthandbook: JSONdata[0].url,
          loadingData: true
        })
        // console.log("tuitionnn", this.state.tuition)
      })
  }
  render() {
    return (
      this.state.loadingData ?

        <div className="site">
          <div className='container mb Site-content'>
            <div className=" Site-content accordion md-accordion mt-5" id="accordionEx" role="tablist" aria-multiselectable="true">
              <div className="Site-content card">

                <div className="card-header" role="tab" id="headingOne1">
                  <a data-toggle="collapse" data-parent="#accordionEx" href="#collapseOne1" aria-expanded="true"
                    aria-controls="collapseOne1">
                    <h5 className="mb-0 resourceTitle">
                      Waitlist Application <i className="fas fa-angle-down rotate-icon"></i>
                    </h5>
                  </a>
                </div>


                <div id="collapseOne1" className="collapse show" role="tabpanel" aria-labelledby="headingOne1"
                  data-parent="#accordionEx">
                  <FormComponent />
                </div>
              </div>

              <div className="card mt-5">
                <div className="card-header" role="tab" id="headingTwo2">
                  <a className="collapsed" data-toggle="collapse" data-parent="#accordionEx" href="#collapseTwo2"
                    aria-expanded="false" aria-controls="collapseTwo2">
                    <h5 className="mb-0 resourceTitle">
                      Tuition Information <i className="fas fa-angle-down rotate-icon"></i>
                    </h5>
                  </a>
                </div>
                <div id="collapseTwo2" className="collapse" role="tabpanel" aria-labelledby="headingTwo2" data-parent="#accordionEx">
                  {
                    this.state.tuition.map(item =>
                      <TuitionCard className="card-body" id={item.id} name={item.name} image_url={item.image_url} image_name={item.image_name} />
                    )
                  }
                </div>
              </div>
              <div className="card mt-5 mb-5 ">
                <div className="card-header" role="tab" id="headingThree3">
                  <a className="collapsed" data-toggle="collapse" data-parent="#accordionEx" href="#collapseThree3"
                    aria-expanded="false" aria-controls="collapseThree3">
                    <h5 className="resourceTitle">
                      Parent Handbook<i className="fas fa-angle-down rotate-icon"></i>
                    </h5>
                  </a>
                </div>

                <div id="collapseThree3" className="collapse" role="tabpanel" aria-labelledby="headingThree3"
                  data-parent="#accordionEx">
                  <div className="card-body">
               
                  <a href={`${this.state.parenthandbook}`} download>Click to download</a>


                
                  </div>
                </div>

              </div>


            </div>
          </div>
        </div>
        :
        <div>
          ...Loading
        </div>

    )
  }
}

export default ParentResources;
