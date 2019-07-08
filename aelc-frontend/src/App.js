
import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import NavbarPage from './components/Nav';
import FooterPage from './components/Footer'
import { withRouter } from 'react-router-dom';
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
    fetch("http://localhost:5000/contact")
      .then(data => data.json())
      .then(JSONdata => {
        this.setState({
          contact: JSONdata,
          loadedData: true
        })
      })
    fetch("http://localhost:5000/staff")
      .then(data => data.json())
      .then(JSONdata => {
        // console.log(JSONdata)
        this.setState({
          staff: JSONdata
        })
        // console.log('staff', this.state.staff)
      })

    fetch("http://localhost:5000/parentHandbook")
      .then(data => data.json())
      .then(JSONdata => {
        console.log(JSONdata)
        this.setState({
          parentHandbook: JSONdata
        })
      })

  }
  render() {
    // if (this.props.history.location.pathname === "/ProgramsPage/") {
    //   return (
    //     <div>
    //       <NavbarPage
    //         parentHandbook={this.state.parentHandbook}
    //         tuition={this.state.tuition}
    //         accreditation={this.state.accreditation}
    //         contact={this.state.contact}
    //       />
    //     </div >
    //   )
    // } else {
    return (
      <div>
        <NavbarPage
          parentHandbook={this.state.parentHandbook}
          tuition={this.state.tuition}
          accreditation={this.state.accreditation}
          contact={this.state.contact}
        />
        {/* <FooterPage
          contact={this.state.contact}
        /> */}
      </div>
    )
    // }
  }
}

export default App;