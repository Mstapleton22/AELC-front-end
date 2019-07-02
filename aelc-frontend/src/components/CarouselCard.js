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
                alt="slide"
              />
              {/* <MDBMask overlay="black-slight" /> */}
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


// import React, { Component } from 'react'
// import { MDBCarousel, MDBCarouselCaption, MDBCarouselInner, MDBCarouselItem, MDBView, MDBMask, MDBContainer } from 'mdbreact'


// class CarouselCard extends Component {

//   constructor(props) {
//     super(props);

//     this.state = {
//     };
//   }

//   render() {
//     return (
//       < div >
//         < MDBContainer className="img-fluid no-gutters" >
//           < MDBCarousel
//             activeItem={1}
//             length={5}
//             showControls={true}
//             showIndicators={true}
//             className="z-depth-1 no-gutters .d-block w-100 homeCarousel"
//           >
//             <MDBCarouselInner>
//               <MDBCarouselItem itemId={`${this.props.id}`}>
//                 <MDBView className="">
//                   <img
//                     className="desktop d-block carouselImage image-fluid no-gutters w-100"
//                     src={`${this.props.image}`}
//                     alt={`${this.props.imageName}`}
//                   />
//                   <MDBMask overlay=".d-block w-100 black-slight" />
//                 </MDBView>
//                 <MDBCarouselCaption>
//                   <div className="smartphone font-weight-bold">{this.props.quote}</div>
//                   <p className="font-weight-bold smartphone1">{this.props.quoter}</p>
//                 </MDBCarouselCaption>
//               </MDBCarouselItem>
//             </MDBCarouselInner>
//           </MDBCarousel >
//         </MDBContainer >
//       </div >
//     )
//   }
// }

// export default CarouselCard