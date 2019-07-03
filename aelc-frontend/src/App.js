
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
      tuition: [],
      loadedData: false
    }
  }

  componentDidMount() {
    fetch("https://boiling-everglades-64895.herokuapp.com/contact")
      .then(data => data.json())
      .then(JSONdata => {
        this.setState({
          contact: JSONdata,
          loadedData: true
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
          parentHandbook={this.state.parentHandbook}
          tuition={this.state.tuition}
          accreditation={this.state.accreditation}
          contact={this.state.contact}
        />
        <FooterPage
          contact={this.state.contact}
        />
      </div>
    )
  }
}

export default App;