
import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import NavbarPage from './components/Nav';
import HomePage from './components/Home';
import FooterPage from './components/Footer'
import ProgramsPage from './components/Programs'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      // carousel: [],
      programs: [],
      parentHandbook: [],
      staff: [],
      contact: [],
      accreditation: [{}],
      tuition: []
    }
  }

  componentDidMount() {
    fetch("https://boiling-everglades-64895.herokuapp.com/contact")
      .then(data => data.json())
      .then(JSONdata => {
        this.setState({
          contact: JSONdata
        })
      })
    fetch("https://boiling-everglades-64895.herokuapp.com/staff")
      .then(data => data.json())
      .then(JSONdata => {
        // console.log(JSONdata)
        this.setState({
          staff: JSONdata
        })
        // console.log('staff', this.state.staff)

      })
    // fetch("https://boiling-everglades-64895.herokuapp.com/accreditation")
    //   .then(data => data.json())
    //   .then(JSONdata => {
    //     // console.log(JSONdata)
    //     this.setState({
    //       accreditation: JSONdata
    //     })
    //   })
    fetch("https://boiling-everglades-64895.herokuapp.com/parentHandbook")
      .then(data => data.json())
      .then(JSONdata => {
        // console.log(JSONdata)
        this.setState({
          parentHandbook: JSONdata
        })
      })
  }
  render() {
    return (
      <div>
        <NavbarPage
          // carousel={this.state.carousel}
          // programs={this.state.programs}
          parentHandbook={this.state.parentHandbook}
          tuition={this.state.tuition}
          accreditation={this.state.accreditation}
        // staff={this.state.staff}
        />
        <FooterPage
          contact={this.state.contact}
        />
      </div>
    )
  }
}

export default App;