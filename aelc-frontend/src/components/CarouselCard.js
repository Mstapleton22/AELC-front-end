import React, { Component } from 'react'
import { MDBCarousel, MDBCarouselCaption, MDBCarouselInner, MDBCarouselItem, MDBView, MDBMask, MDBContainer } from 'mdbreact'


class CarouselCard extends Component {

  constructor(props) {
    super(props);

    this.state = {
    };
  }

  render() {
    return (
      < div >
        < MDBContainer className="img-fluid no-gutters container" >
          < MDBCarousel
            activeItem={1}
            length={5}
            showControls={true}
            showIndicators={true}
            className="z-depth-1 no-gutters homeCarousel"
          >
            <MDBCarouselInner>
              <MDBCarouselItem itemId={`${this.props.id}`}>
                <MDBView>
                  <img
                    className="desktop d-block carouselImage image-fluid no-gutters w-100"
                    src={`${this.props.image}`}
                    alt={`${this.props.imageName}`}
                  />
                  <MDBMask overlay="black-slight" />
                </MDBView>
                <MDBCarouselCaption>
                  <div className="smartphone font-weight-bold">{this.props.quote}</div>
                  <p className="font-weight-bold smartphone1">{this.props.quoter}</p>
                </MDBCarouselCaption>
              </MDBCarouselItem>
            </MDBCarouselInner>
          </MDBCarousel >
        </MDBContainer >
      </div >
    )
  }
}

export default CarouselCard