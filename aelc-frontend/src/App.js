
import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import NavbarPage from './components/nav';
import HomePage from './components/Home';
import FooterPage from './components/footer'
import ProgramsPage from './components/programs'

class App extends Component {


  constructor(props) {
    super(props)
    this.state = {
      carousel: '',
      programs: '',
      parentHandbook: '',
      staff: '',
      contact: '',
      accreditation: '',
      tuition: ''
    }
  }

  componentDidMount() {
    fetch("http://localhost:3001/")
      .then(data => data.json())
      .then(JSONdata => {
        console.log(JSONdata[0].carousel)
        console.log(JSONdata[0].programs)
        this.setState({
          carousel: JSONdata[0].carousel
        })
      })
  }
  render() {
    return (
      <div>
        <NavbarPage
          carousel={this.state.carousel}
          programs={this.state.programs}
          parentHandbook={this.state.parentHandbook}
          tuition={this.state.tuition}
          staff={this.state.staff}
        />
        <FooterPage
          contact={this.state.contact}
          accreditation={this.state.accreditation} />
      </div>
    )
  }
}

export default App;