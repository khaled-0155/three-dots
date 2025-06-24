import React, { Component } from "react";
import ContactForm from "./ContactForm";

import about from "../../assets/images/about/about-6.jpg";

class ContactTwo extends Component {
  render() {
    return (
      <div className="contact-form--1">
        <div className="container">
          <div className="row row--35 align-items-start">
            <div className="col-lg-6 order-2 order-lg-1">
              <div className="section-title text-left mb--50">
                <h2 className="title">Let’s build something great.</h2>
                <p className="description">
                  You can leave your question and we would reach out to you
                  shortly..
                </p>
              </div>
              <div className="form-wrapper">
                <ContactForm />
              </div>
            </div>
            <div className="col-lg-6 order-1 order-lg-2">
              <div className="thumbnail mb_md--30 mb_sm--30">
                <img src={about} alt="3dots" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default ContactTwo;
