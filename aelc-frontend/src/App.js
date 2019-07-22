
import React, { Component } from 'react';
import './App.css';
import NavbarPage from './components/Nav';
class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
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
    fetch("https://pure-fortress-15361.herokuapp.com/contact")
      .then(data => data.json())
      .then(JSONdata => {
        this.setState({
          contact: JSONdata,
          loadedData: true
        })
      })
    fetch("https://pure-fortress-15361.herokuapp.com/staff")
      .then(data => data.json())
      .then(JSONdata => {
        this.setState({
          staff: JSONdata
        })
      })

    fetch("https://pure-fortress-15361.herokuapp.com/parentHandbook")
      .then(data => data.json())
      .then(JSONdata => {
        console.log(JSONdata)
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
      </div>
    )
  }
}

export default App;