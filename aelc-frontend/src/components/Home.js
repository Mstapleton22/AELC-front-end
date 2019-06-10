import React from "react";
import { MDBCarousel, MDBCarouselCaption, MDBCarouselInner, MDBCarouselItem, MDBView, MDBMask, MDBContainer } from
  "mdbreact";

const HomePage = (props) => {
  return (
    <div>
      <img src={`data:image/jpeg;base64,${props.image}`} />

      <div className="row">
        <MDBContainer className="img-fluid container">
          < MDBCarousel
            activeItem={1}
            length={5}
            showControls={true}
            showIndicators={true}
            className="z-depth-1 homeCarousel"
          >
            <MDBCarouselInner>
              <MDBCarouselItem itemId="1">
                <MDBView>
                  <img
                    className="desktop d-block carouselImage image-fluid  w-100"
                    src={process.env.PUBLIC_URL + '/bicycleboy.jpg'}
                    alt="First slide"
                  />
                  <MDBMask overlay="black-slight" />
                </MDBView>
                <MDBCarouselCaption>
                  <div className="smartphone font-weight-bold">"Noble absolutely adores his teachers. He’s excited to go to school to spend time in the fairy garden. We’re learning more and more each day through him as well. Augustana has a great program and support structure, thats been great for him."</div>
                  <p className="font-weight-bold smartphone1">{`– Zain & Lauren Master`}</p>
                </MDBCarouselCaption>
              </MDBCarouselItem>
              <MDBCarouselItem itemId="2">
                <MDBView>
                  <img
                    className="desktop d-block carouselImage1 w-100"
                    src={process.env.PUBLIC_URL + '/playground.jpg'}
                    alt="Second slide"
                  />
                  <MDBMask overlay="black-slight" />
                </MDBView>
                <MDBCarouselCaption>
                  <div className="smartphone font-weight-bold">"We are dedicated to help your child develop academically and socially, but encourage their personalities and bring out their unique traits too."</div>
                  <p className="font-weight-bold smartphone1">{`- Azra Beganovic (Augustana teacher for 21 years)`}</p>
                </MDBCarouselCaption>
              </MDBCarouselItem>
              <MDBCarouselItem itemId="3">
                <MDBView>
                  <img
                    className="desktop carouselImage w-100"
                    src={process.env.PUBLIC_URL + '/tunnelkids.jpg'}
                    alt="Third slide"
                  />
                  <MDBMask overlay="black-slight" />
                </MDBView>
                <MDBCarouselCaption>
                  <div className="smartphone font-weight-bold">"My Jesse can't stop talking about their time spent in the fairy garden. I'm just excited to see them outdoors!"</div>
                  <p className="font-weight-bold smartphone1">- Shelly Shermani</p>
                </MDBCarouselCaption>
              </MDBCarouselItem>
              <MDBCarouselItem itemId="4">
                <MDBView>
                  <img
                    className="desktop d-block carouselImage1 w-100"
                    src={process.env.PUBLIC_URL + '/frontdoor.jpg'}
                    alt="Fourth slide"
                  />
                  <MDBMask overlay="black-slight" />
                </MDBView>
                <MDBCarouselCaption>
                  <div className="smartphone font-weight-bold">"The music program literally brings music to my ears! This is one of the reasons we chose AELC as a family."</div >
                  <p className="font-weight-bold smartphone1">- Jared, Lexi and Michelle Growski</p>
                </MDBCarouselCaption>
              </MDBCarouselItem>
              <MDBCarouselItem itemId="5">
                <MDBView>
                  <img
                    className="desktop d-block carouselImage w-100"
                    src={process.env.PUBLIC_URL + '/lunchboysmile.jpg'}
                    alt="Fifth slide"
                  />
                  <MDBMask overlay="black-slight" />
                </MDBView>
                <MDBCarouselCaption>
                  <div className="smartphone font-weight-bold">"Having joined the AELC family only just a year ago, I know that this is where my heart belongs. Creating an environment that allows young people to flourish is where I belong."</div>
                  <p className="font-weight-bold smartphone1">- Ms. Wendie</p>
                </MDBCarouselCaption>
              </MDBCarouselItem>
            </MDBCarouselInner>
          </MDBCarousel >
        </MDBContainer >
      </div>
      <div className="aboutMe">
        <h1 className="row justify-content-center">About Us</h1>
        <div className="about row">
          <div className="col-lg-2"></div>
          <p className="col-lg-8 alight-items-center mobile">The Augustana Day Care Center opened its doors on May 1, 1971, fulfilling a long held dream of the congregation's Social Ministry Committee. Since its inception the Center was welcomed children
without regard to faith, culture or ethnicity.</p>
          <div className="col-lg-2"></div>
          <div className="col-lg-2"></div>
          <p className="col-lg-8 alight-items-center mobile">Seen as a congregational ministry to the broader community the Center has always had some
spaces available to lower income families, providing assistance for those in need. The goal of the Center has been to provide care for children in a clean, safe,
and nurturing environment that promotes learning and enhances the child's well-being.</p>
          <div className="col-lg-2"></div>
          <div className="col-lg-2"></div>
          <p className="col-lg-8 alight-items-center mobile">
            Believing that a balance of good nutrition, adequate rest, and ample opportunity for exploration and learning in developmentally appropriate ways is critical to the child's well-being.</p>
          <div className="col-lg-2"></div>

        </div>

        <div className=" row justify-content-center">
          <button class="btn btn-secondary waves-effect mission mr-4" type="button" data-toggle="collapse" data-target="#mission"
            aria-expanded="false" aria-controls="multiCollapseExample2">Our Mission</button>
          <button class="btn btn-secondary ml-2 mission" type="button" data-toggle="collapse" data-target="#vision"
            aria-expanded="false" aria-controls="multiCollapseExample2">Our Vision</button>
        </div>

        <div class="row">
          <div class="col">
            <div class="collapse multi-collapse" id="mission">
              <div class="card card-body">
                Augustana Early Learning Center serves children and their families through high quality, affordable care and education. We welcome children from diverse cultures, faith traditions, socioeconomic backgrounds, and national origins. We provide learning experiences that foster developmentally-appropriate growth to teach children to love themselves and others.
      </div>
            </div>
          </div>
          <div class="col">
            <div class="collapse multi-collapse" id="vision">
              <div class="card card-body">
                Augustana Early Learning Center is a community outreach ministry of Augustana Lutheran Church with a vision to love children and inspire them to become engaged, emotionally-intelligent, and curious learners.
      </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
}

export default HomePage;