import React, { Component } from "react";
class Accreditation extends Component {

  render() {
    return (
      <div>
        <img className={`accreditation ${this.props.name} ${this.props.name}_footer`} src={this.props.accredImage} alt="accreditation" />
      </div>
    )
  }
}

export default Accreditation;