import React, { Component } from "react";
import StaffCard from "./StaffCard"

class StaffPage extends Component {
  constructor() {
    super()
    this.state = {
      staff: [],
    }

    fetch("https://pure-fortress-15361.herokuapp.com/staff")
      .then(data => data.json())
      .then(JSONdata => {
        this.setState({
          staff: JSONdata
        })
  })
  }
  render() {
    return (
      <div>
        <h2 className="h1-responsive font-weight-bold no-gutters text-center my-3">
          Meet the Staff
    </h2>
        <div className="row no-gutters staff">
          {
            this.state.staff.map(item =>
              <StaffCard key={item.id} id={item.id} name={item.name} image={item.image_url} bio={item.bio} />
            )
          }
        </div>
      </div >
    )
  }
}
export default StaffPage;