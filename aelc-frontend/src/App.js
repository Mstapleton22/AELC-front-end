
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
      image: '',
    }
  }

  componentDidMount() {
    fetch("http://localhost:3001/")
      .then(data => data.json())
      .then(JSONdata => {
        console.log(JSONdata[0].image)

        this.setState({
          image: JSONdata[0].image
        })
      })
  }
  render() {
    return (
      <div>
        <NavbarPage image={this.state.image} />
        <FooterPage />
      </div>
    )
  }
}

export default App;