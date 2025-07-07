import React, { Component } from "react";

import aboutImg from "../../../assets/images/about/about-1.png";

class About extends Component {
  render() {
    let title = "About",
      description = [
        "3 dots is a digital solutions company powered by the expertise of Point 7.",
        "We specialize in building integrated ecosystems for businesses, combining ERP systems, tailored software development, and strategic digital marketing.",
        "Whether you're a startup looking to scale or an established business ready to modernize, 3 dots offers the technology, insight, and execution you need.",
      ];

    return (
      <React.Fragment>
        <div className="about-wrapper">
          <div className="container">
            <div className="row row--35 align-items-center">
              <div className="col-lg-5 col-md-12">
                <div className="thumbnail">
                  <img className="w-100" src={aboutImg} alt="About Images" />
                </div>
              </div>

              <div className="col-lg-7 col-md-12">
                <div className="about-inner inner">
                  <div className="section-title">
                    <h2 className="title">{title}</h2>
                    {description.map((text, index) => (
                      <p className="description" key={index}>
                        {text}
                      </p>
                    ))}
                    {/* <p className="description">{description}</p> */}
                  </div>
                  <div style={{ marginTop: 40 }} className="section-title">
                    <h3 className="title">Our Mission</h3>
                    <p className="description">
                      Is simple that simplify complexity and deliver results
                      that matter.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
export default About;
