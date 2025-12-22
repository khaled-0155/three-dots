import React from "react";
import aboutImg from "../../../assets/images/about/about-1.png";

const About = ({ content }) => {
  const title = "About";

  const defaultDescription = [
    "Three Dots is a digital solutions company that builds integrated business ecosystems connecting technology, marketing, and operations into one seamless flow.",
    "Our core services — Odoo systems, strategic marketing, and custom software development — help businesses operate smarter, scale faster, and grow stronger.",
    "Our mission is simple: to simplify complexity and deliver results that matter.",
    "From startups aiming to scale to enterprises ready to modernise, Three Dots provides the technology, strategy, and execution needed to turn potential into performance.",
  ];

  const description = content || defaultDescription;

  return (
    <>
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
                </div>

                <div style={{ marginTop: 40 }} className="section-title">
                  <h3 className="title">Our Mission</h3>
                  <p className="description">
                    Is simple that simplify complexity and deliver results that
                    matter.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
