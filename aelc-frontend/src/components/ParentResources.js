import React, { Component } from "react";

class ParentResources extends Component {
    render() {
        return (


            <div>

                <div class='container'>
                    <div class="accordion md-accordion mt-5" id="accordionEx" role="tablist" aria-multiselectable="true">
                        <div class="card">

                            <div class="card-header" role="tab" id="headingOne1">
                                <a data-toggle="collapse" data-parent="#accordionEx" href="#collapseOne1" aria-expanded="true"
                                    aria-controls="collapseOne1">
                                    <h5 class="mb-0">
                                        Waitlist Application <i class="fas fa-angle-down rotate-icon"></i>
                                    </h5>
                                </a>
                            </div>


                            <div id="collapseOne1" class="collapse show" role="tabpanel" aria-labelledby="headingOne1"
                                data-parent="#accordionEx">
                                <div class="card-body">

                                    <input type="text" class="form-control mb-2" placeholder="Child's Name" aria-describedby="defaultRegisterFormPhoneHelpBlock" />

                                    <input type="text" class="form-control mb-2" placeholder="Birthdate" aria-describedby="defaultRegisterFormPhoneHelpBlock" />

                                    <input type="text" class="form-control mb-2" placeholder="Guardians's Full Name" aria-describedby="defaultRegisterFormPhoneHelpBlock" />

                                    <input type="text" class="form-control mb-2" placeholder="Relationship" aria-describedby="defaultRegisterFormPhoneHelpBlock" />

                                    <input type="text" class="form-control mb-2" placeholder="Address" aria-describedby="defaultRegisterFormPhoneHelpBlock" />

                                    <input type="email" class="form-control mb-2" placeholder="Email" aria-describedby="defaultRegisterFormPhoneHelpBlock" />

                                    <input type="number" id="defaultRegisterPhonePassword" class="form-control mb-2" placeholder="Phone Number" aria-describedby="defaultRegisterFormPhoneHelpBlock" />

                                    <button class="btn btn-info my-4 btn-block" type="submit">Submit</button>
                                </div>
                            </div>
                        </div>

                        <div class="card mt-5">


                            <div class="card-header" role="tab" id="headingTwo2">
                                <a class="collapsed" data-toggle="collapse" data-parent="#accordionEx" href="#collapseTwo2"
                                    aria-expanded="false" aria-controls="collapseTwo2">
                                    <h5 class="mb-0">
                                        Tuition Information <i class="fas fa-angle-down rotate-icon"></i>
                                    </h5>
                                </a>
                            </div>


                            <div id="collapseTwo2" class="collapse" role="tabpanel" aria-labelledby="headingTwo2"
                                data-parent="#accordionEx">
                                <div class="card-body">
                                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3
                                    wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum
                                    eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla
                                    assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred
                                    nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer
                                    farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus
                                    labore sustainable VHS.
        </div>
                            </div>
                        </div>
                        <div class="card mt-5 mb-5">
                            <div class="card-header" role="tab" id="headingThree3">
                                <a class="collapsed" data-toggle="collapse" data-parent="#accordionEx" href="#collapseThree3"
                                    aria-expanded="false" aria-controls="collapseThree3">
                                    <h5 class="mb-0">
                                        Parent Handbook<i class="fas fa-angle-down rotate-icon"></i>
                                    </h5>
                                </a>
                            </div>

                            <div id="collapseThree3" class="collapse" role="tabpanel" aria-labelledby="headingThree3"
                                data-parent="#accordionEx">
                                <div class="card-body">
                                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3
                                    wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum
                                    eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla
                                    assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred
                                    nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer
                                    farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus
                                    labore sustainable VHS.
        </div>
                            </div>

                        </div>


                    </div>
                </div>
            </div>

        )
    }
}

export default ParentResources;
