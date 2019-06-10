import React, { Component } from "react";
import { MDBRow, MDBCol, MDBCard, MDBCardBody, MDBMask, MDBIcon, MDBView, MDBBtn } from "mdbreact";
import { thisExpression } from "@babel/types";

const StaffPage = (props) => {
  return (
    <div>
      <h2 className="h1-responsive font-weight-bold text-center my-3">
        Meet the Staff
    </h2>

      <div className="row justify-content-center ">
        {
          this.state.teachers.map((teacher, i) => (
            <MDBCard className="my-5 px-5 pb-3">
              <MDBCardBody className=" justify-content-center mb-lg-0 mb-4" hover waves>
                <img
                  className="img-fluid"
                  src={props.staff[i].image}
                  alt="teacher"
                />
                <h3 className="h3-responsive row justify-content-center">{props.staff[i].name}</h3>
              </MDBCardBody>
            </MDBCard>
          ))
        }
      </div>

    </div>
  )
}

export default StaffPage;


  // constructor() {
  //   super()
  //   this.state = {
      // teachers: [
      //   {
      //     image: "./ms.wendie.jpg",
      //     name: "Ms.Wendie",
      //   },
      //   {
      //     image: "./ms.azra.jpg",
      //     name: "Ms.Azra",
      //   },
      //   {
      //     image: "./ms.anna.jpg",
      //     name: "Ms.Anna",
      //   },
      //   {
      //     image: "./ms.beavy.jpg",
      //     name: "Ms.Beavy",
      //   },
      //   {
      //     image: "./ms.diane.jpg",
      //     name: "Ms. Diane",
      //   },
      //   {
      //     image: "./ms.jen.jpg",
      //     name: "Ms. Jen",
      //   },
      //   {
      //     image: "./ms.kisanet.jpg",
      //     name: "Ms. Kisanet",
      //   },
      //   {
      //     image: "./ms.lori.jpg",
      //     name: "Ms. Lori",
      //   },
      //   {
      //     image: "./ms.megan.jpg",
      //     name: "Ms. Megan",
      //   },
      //   {
      //     image: "./ms.noemi.jpg",
      //     name: "Ms. Noemi",
      //   },
      //   {
      //     image: "./ms.sharon.jpg",
      //     name: "Ms. Sharon",
      //   },
      //   {
      //     image: "./ms.shirley.jpg",
      //     name: "Ms. Shirley",
      //   },
      //   {
      //     image: "./ms.tamika.jpg",
      //     name: "Ms. Tamika",
      //   },
      //   {
      //     image: "./ms.yuliya.jpg",
      //     name: "Ms. Yuliya",
      //   },
      //   {
      //     image: "./ms.zoe.jpg",
      //     name: "Ms. Zoe",
      //   }
      // ],
    // }