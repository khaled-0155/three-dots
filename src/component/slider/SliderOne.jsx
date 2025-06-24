import React, { Component } from "react";
import ServiceOne from "../../elements/service/ServiceOne";
import icon1 from "../../assets/images/icons/icon-01.png";
import icon2 from "../../assets/images/icons/icon-02.png";
import icon3 from "../../assets/images/icons/icon-03.png";
const services = [
  {
    title: "ERP Systems",
    description:
      "Streamline your business operations with smart, scalable ERP solutions.",
    icon: icon2, // Replace with actual icon or component
  },
  {
    title: "Digital Marketing",
    description: "Reach, engage, and convert with data-driven strategies.",
    icon: icon1, // Replace with actual icon or component
  },
  {
    title: "Software Solutions",
    description: "Build what your business needs, without the tech headaches.",
    icon: icon3, // Replace with actual icon or component
  },
];

class SliderOne extends Component {
  render() {
    return (
      <div className="slider-activation">
        {/* Start Single Slide */}
        <div
          className="slide slide-style-1 slider-fixed--height d-flex align-items-center bg_image bg_image--1"
          data-black-overlay="6"
        >
          <div className="container position-relative">
            <div className="row">
              <div className="col-lg-12">
                <div className="inner">
                  <h1 className="title theme-gradient">
                    Welcome to <br />3 Dots agency.{" "}
                  </h1>
                </div>
              </div>
            </div>
            {/* Start Service Area */}
            <div className="service-wrapper service-white">
              <ServiceOne services={services} />
            </div>
            {/* End Service Area */}
          </div>
        </div>
        {/* End Single Slide */}
      </div>
    );
  }
}
export default SliderOne;
