import React, { Component } from 'react'


class TuitionCard extends Component {

  constructor(props) {
    super(props);

    this.state = {
    };
  }

  render() {
    return (
      < div >
        <div className="row tuition_row no-gutters">
          <img className="tuition_image image-fluid" src={this.props.image_url} alt='tuition'></img>
        </div>
      </div >
    )
  }
}

export default TuitionCard