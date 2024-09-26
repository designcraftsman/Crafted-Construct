import React from "react";
import { FaBuilding,  FaBusinessTime  } from "react-icons/fa"; // Importing FontAwesome icons
import { RiTeamFill } from "react-icons/ri";
import { MdOutlineHomeWork } from "react-icons/md";

const WhyChooseUs = () => {
  return (
    <div className="container text-start px-5 py-5 ">
      <h2 className="fw-bolder display-4 mb-5">Why Choose Us ?</h2>
      <p className="fw-semibold fs-2 w-75 mb-5">At CraftedConstruct, we merge expertise with artistry to create exceptional spaces.</p>
      
      <div className="row p-3 d-flex justify-content-between align-items-center">
        <div className="col-lg-3">
            <span className="display-5 text-primary fw-bold align-items-center" >
            <MdOutlineHomeWork />
            15+
            </span>
            <hr />
            <h2 className="fs-4 fw-light">Projects</h2>
        </div>
        <div className="col-lg-3">
            <span className="display-5 text-primary fw-bold align-items-center" >
            <RiTeamFill />
            200
            </span>
            <hr />
            <h2 className="fs-4 fw-light">Team Members</h2>
        </div>
        <div className="col-lg-3">
            <span className="display-5 text-primary fw-bold align-items-center" >
            <FaBuilding />
            15+
            </span>
            <hr />
            <h2 className="fs-4 fw-light">Agencies</h2>
        </div>
        <div className="col-lg-3 ">
            <span className="display-5 text-primary fw-bold align-items-center" >
            <FaBusinessTime  />
            40
            </span>
            <hr />
            <h2 className="fs-4 fw-light">Years Of Experience</h2>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
