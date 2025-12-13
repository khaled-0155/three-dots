import React, { Component } from "react";
import PageHelmet from "../component/common/Helmet";
import ScrollToTop from "react-scroll-up";
import { FiChevronUp } from "react-icons/fi";
import Footer from "../component/footer/Footer";

import serviceImg from "../assets/images/service/service-01.png";
import findingImg from "../assets/images/about/finding-us-01.png";
import Navbar from "../custom-component/Navbar";

import {
  FiDatabase,
  FiGlobe,
  FiSmartphone,
  FiShoppingCart,
  FiTool,
} from "react-icons/fi";

const ServiceList = [
  {
    icon: <FiDatabase />,
    title: "Backend Development",
    description:
      "Secure, scalable, and optimized backend architecture with clean APIs, microservices, and CI/CD pipelines.",
  },
  {
    icon: <FiGlobe />,
    title: "Web Applications",
    description:
      "Full-stack platforms, admin dashboards, and progressive web apps with smooth UX and real-time functionality.",
  },
  {
    icon: <FiSmartphone />,
    title: "Mobile Apps",
    description:
      "Native and cross-platform apps with intuitive design, fast performance, and seamless integrations.",
  },
  {
    icon: <FiShoppingCart />,
    title: "eCommerce Systems",
    description:
      "Custom online stores built to convert, featuring secure checkout, inventory management, and growth-focused analytics.",
  },
  {
    icon: <FiTool />,
    title: "Add-on Services",
    description:
      "Product strategy, UI/UX audits, technical documentation, and long-term maintenance.",
  },
];

class Software extends Component {
  constructor() {
    super();
    this.state = {
      isOpen: false,
    };
    this.openModal = this.openModal.bind(this);
  }
  openModal() {
    this.setState({ isOpen: true });
  }
  render() {
    return (
      <React.Fragment>
        <PageHelmet pageTitle="Odoo Services" />
        <Navbar />

        {/* Start Breadcrump Area */}
        <div
          className="rn-page-title-area pt--120 pb--190 bg_image bg_image--17"
          data-black-overlay="9"
        >
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="rn-page-title text-center pt--100">
                  <h2 className="title theme-gradient">Software Services</h2>
                  <p>Purpose-Built Platforms. Seamless Performance.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End Breadcrump Area */}

        {/* Start Service Area */}
        <div className="service-area ptb--120 bg_color--5">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="section-title text-center mb--30">
                  <h2 className="title ">Our Capabilities Include</h2>
                  <p>
                    We design and develop custom software that’s engineered to
                    scale with your business, from backend systems to
                    user-facing web and mobile apps.
                  </p>
                </div>
              </div>
            </div>
            <div className="row service-one-wrapper">
              {ServiceList.map((val, i) => (
                <div
                  className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12"
                  key={i}
                >
                  <div href="/service-details">
                    <div className="service service__style--2">
                      <div className="icon">{val.icon}</div>
                      <div className="content">
                        <h3 className="title">{val.title}</h3>
                        <p>{val.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* End Service Area */}

        {/* Start Page Wrapper */}
        <div className="rn-service-details ptb--120 bg_color--1">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="service-details-inner">
                  <div className="inner">
                    {/* Start Single Area */}
                    <div className="row sercice-details-content pb--80 align-items-center">
                      <div className="col-lg-6 col-12">
                        <div className="thumb">
                          <img
                            className="w-100"
                            src={serviceImg}
                            alt="Service Images"
                          />
                        </div>
                      </div>

                      <div className="col-lg-6 col-12">
                        <div className="details mt_md--30 mt_sm--30">
                          <h4 className="title">Why Our Software Delivers</h4>

                          <p>
                            We don’t just build software <br />
                            We engineer performance.
                          </p>

                          <p>
                            Every line of code, every interface, and every
                            integration is designed to make your business
                            stronger, faster, and more scalable.
                          </p>

                          <ul className="liststyle">
                            <li>
                              <strong>Future-Proof Architecture:</strong>{" "}
                              Secure, scalable, and optimised backends built on
                              clean APIs, microservices, and CI/CD pipelines.
                            </li>
                            <li>
                              <strong>Web Excellence:</strong> Full-stack
                              platforms, admin dashboards, and progressive web
                              apps that combine smooth UX with real-time
                              functionality.
                            </li>
                            <li>
                              <strong>Mobile Mastery:</strong> Native and
                              cross-platform apps designed for speed, stability,
                              and seamless integrations.
                            </li>
                            <li>
                              <strong>eCommerce Power:</strong> Custom-built
                              online stores designed to convert, with secure
                              checkout, automated inventory, and data-driven
                              analytics.
                            </li>
                            <li>
                              <strong>Beyond Development:</strong> From product
                              strategy and UI/UX audits to documentation and
                              ongoing maintenance, we stay with you through
                              every stage of growth.
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    {/* End Single Area */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End Page Wrapper */}

        {/* Start Finding Us Area */}
        <div className="rn-finding-us-area rn-finding-us bg_color--1">
          <div className="inner">
            <div className="content-wrapper">
              <div className="content">
                <h4 className="theme-gradient">
                  At 3 Dots, software isn’t a product, it’s a partnership
                  between logic and vision.
                </h4>
                <p>
                  Let’s build something that works beautifully and scales
                  effortlessly.
                </p>
                <a className="rn-btn btn-white" href="/contact">
                  Contact us
                </a>
              </div>
            </div>
            <div className="thumbnail">
              <div className="image">
                <img src={findingImg} alt="Finding Images" />
              </div>
            </div>
          </div>
        </div>
        {/* End Finding Us Area */}

        {/* Start Back To Top */}
        <div className="backto-top">
          <ScrollToTop showUnder={160}>
            <FiChevronUp />
          </ScrollToTop>
        </div>
        {/* End Back To Top */}

        <Footer />
      </React.Fragment>
    );
  }
}
export default Software;
