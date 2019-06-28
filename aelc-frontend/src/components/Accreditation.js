import React, { Component } from "react";
class Accreditation extends Component {

  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     accreditation: [],
  //   };
  //   fetch("https://boiling-everglades-64895.herokuapp.com/accreditation")
  //     .then(data => data.json())
  //     .then(JSONdata => {
  //       this.setState({
  //         carousel: JSONdata
  //       })
  //     })
  // }
  render() {
    return (
      <div>

        <img className={`accreditation ${this.props.name}`} src={this.props.accredImage} alt="accreditation" />
        {/* <img className="accreditation" src="COShines_Accreditation.png" alt="accreditation" height="80" width="250" />
        <img className="accreditation" src="COShines_Program Quality Rating_4 Diamonds.png" alt="accreditation" height="80" width="250" /> */}
      </div>
    )
  }
}

export default Accreditation;