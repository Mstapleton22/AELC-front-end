
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
      accreditation: [],
      tuition: []
    }
  }
  // componentDidMount() {
  //     fetch("http://localhost:3001/")
  //       .then(data => data.json())
  //       .then(JSONdata => {
  //         console.log(JSONdata[0].image)

  //         this.setState({
  //           image: JSONdata[0].image
  //         })
  //       })
  //   }
  componentDidMount() {
    fetch("https://boiling-everglades-64895.herokuapp.com")
      .then(data => data.json())
      .then(JSONdata => {
        // console.log(JSONdata)
        this.setState({
          carousel: JSONdata
        })
        // console.log(this.state.carousel[0].id)
      })
    fetch("https://boiling-everglades-64895.herokuapp.com/contact")
      .then(data => data.json())
      .then(JSONdata => {
        // console.log(JSONdata)
        this.setState({
          contact: JSONdata
        })
      })
    // fetch("https://boiling-everglades-64895.herokuapp.com")
    //   .then(data => data.json())
    //   .then(JSONdata => {
    // console.log(JSONdata)
    // this.setState({
    //   carousel: JSONdata
    // })
    // console.log('carousel', this.state.carousel[0].id)

    // })

    fetch("https://boiling-everglades-64895.herokuapp.com/staff")
      .then(data => data.json())
      .then(JSONdata => {
        // console.log(JSONdata)
        this.setState({
          staff: JSONdata
        })
        // console.log('staff', this.state.staff)

      })
    fetch("https://boiling-everglades-64895.herokuapp.com/accreditation")
      .then(data => data.json())
      .then(JSONdata => {
        // console.log(JSONdata)
        this.setState({
          accreditation: JSONdata
        })
        // console.log('accred', this.state.accreditation)

      })
    fetch("https://boiling-everglades-64895.herokuapp.com/parentHandbook")
      .then(data => data.json())
      .then(JSONdata => {
        // console.log(JSONdata)
        this.setState({
          parentHandbook: JSONdata
        })
        // console.log('handbook', this.state.parentHandbook)
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
        // staff={this.state.staff}
        />
        <FooterPage
          contact={this.state.contact}
          accreditation={this.state.accreditation} />
      </div>
    )
  }
}

export default App;