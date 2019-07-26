import React from "react";
import { MDBCarousel, MDBCarouselCaption, MDBCarouselInner, MDBCarouselItem, MDBView, MDBMask, MDBContainer } from
  "mdbreact";

const CarouselCard = (props) => {
  return (
    <MDBContainer className="img-fluid no-gutters ">
      <MDBCarousel
        activeItem={1}
        length={5}
        showControls={false}
        showIndicators={false}
        className="z-depth-1 homeCarousel no-gutters"
      >
        <MDBCarouselInner className="no-gutters">
          <MDBCarouselItem className="no-gutters" itemId={`${props.id}`}>
            <MDBView>
              <img
                className=" desktop d-block w-100 carouselImage no-gutters"
                src={`${props.image}`}
                alt={`${props.imageName}`}
              // alt="slide"
              />
              <MDBMask overlay="grey-light" />
            </MDBView>
            <MDBCarouselCaption>
              <div className="h3-responsive smartphone no-gutters font-weight-bold">{props.quote}</div>
              <p className="h5-responsive font-weight-bold no-gutters smartphone1">- {props.quoter} -</p>
            </MDBCarouselCaption>
          </MDBCarouselItem>
        </MDBCarouselInner>
      </MDBCarousel>
    </MDBContainer>
  );
}

export default CarouselCard;
