import React, { useState } from "react";
import PageHelmet from "../component/common/Helmet";
import ModalVideo from "react-modal-video";
import ScrollToTop from "react-scroll-up";
import { FiChevronUp } from "react-icons/fi";
import Header from "../component/header/Header";
import Footer from "../component/footer/Footer";

import serviceImg from "../assets/images/service/service-01.png";
import serviceImg2 from "../assets/images/service/service-02.png";
import erpImg1 from "../assets/images/service/service-01.png";
import erpImg2 from "../assets/images/service/service-02.png";
import marketingImg1 from "../assets/images/service/service-01.png";
import marketingImg2 from "../assets/images/service/service-02.png";
import softwareImg1 from "../assets/images/service/service-01.png";
import softwareImg2 from "../assets/images/service/service-02.png";
import { useParams } from "react-router-dom";
import Contact from "../elements/contact/ContactTwo";
import Navbar from "../custom-component/NavBar";

const serviceDetailsData = [
  {
    id: "erp",
    title: "ERP Systems",
    description:
      "Unify Your Operations. Empower Your Teams. Scale Without Chaos.",
    sections: [
      {
        paragraphs: [
          "At 3 dots, we develop and implement end-to-end ERP systems tailored to your business model, no matter the size or sector.",
          "Our ERP solutions centralize your data, automate manual tasks, and bring clarity to every department.",
        ],
        title: "What Our Systems Offer",
        list: [
          "Real-time financial tracking, automated invoicing, and expense management.",
          "Monitor stock levels, track shipments, and optimize purchase orders.",
          "Manage employee records, performance reviews, attendance, and payroll.",
          "CRM tools to manage sales pipelines and customer relationships.",
          "Industry-specific modules for retail, manufacturing, logistics, etc.",
          "Choose cloud or on-premise hosting with scalable mobile-friendly architecture.",
        ],
      },
      {
        paragraphs: [
          "Our systems are designed to grow with your business, with easy-to-use interfaces that minimize training time.",
          "We support localized features, compliance needs, and provide post-launch monitoring and support.",
        ],
        title: "Why Our ERP Systems Work",
        list: [
          "Designed to grow with your business",
          "Easy-to-use interfaces that reduce training time",
          "Localized features for regional compliance and workflows",
          "Backed by implementation support and post-launch monitoring",
        ],
      },
    ],
    image1: erpImg1,
    image2: erpImg2,
  },
  {
    id: "marketing",
    title: "Digital Marketing",
    description: "From Visibility to Conversion, We Build Brands That Perform",
    sections: [
      {
        paragraphs: [
          "At 3 dots, our digital marketing services are not just about traffic, they're about traction.",
          "We design and execute performance-driven strategies that attract, engage, and convert the right audience for your business.",
        ],
        title: "Our Marketing Capabilities Include",
        list: [
          "SEO strategy, technical audits, content optimization, and authority building.",
          "Paid ads on Google, Meta, LinkedIn – with ROI-focused management and split testing.",
          "Full-service social media strategy and content management.",
          "Content creation including blogs, videos, infographics, and emails.",
          "Custom landing pages, lead magnets, and nurturing sequences.",
          "Analytics dashboards and strategic campaign reporting.",
        ],
      },
      {
        paragraphs: [
          "We align campaigns with your business goals and track every performance metric transparently.",
          "Whether B2B or B2C, our marketing is continuously optimized for better results.",
        ],
        title: "Why Our Marketing Delivers",
        list: [
          "Campaigns aligned with your business objectives",
          "Experts across both B2B and B2C strategies",
          "Transparent performance metrics",
          "Continuous optimization, not set-it-and-forget-it",
        ],
      },
    ],
    image1: marketingImg1,
    image2: marketingImg2,
  },
  {
    id: "software",
    title: "Software Solutions",
    description: "Purpose-Built Platforms. Seamless Performance.",
    sections: [
      {
        paragraphs: [
          "We design and develop custom software engineered to scale with your business.",
          "From backend systems to user-facing web and mobile apps, our work is built for speed, stability, and results.",
        ],
        title: "Our Capabilities Include",
        list: [
          "Secure, scalable backend architecture with APIs and CI/CD pipelines.",
          "Web apps, dashboards, and PWAs with smooth UX and real-time features.",
          "Native and cross-platform mobile apps with fast, intuitive design.",
          "Custom eCommerce with secure checkout, inventory control, and analytics.",
          "Add-on services like UI/UX audits, product strategy, and maintenance.",
        ],
      },
    ],
    image1: softwareImg1,
    image2: softwareImg2,
  },
];

const CustomServiceDetails = () => {
  const { id } = useParams();

  const service = serviceDetailsData.find((s) => s.id === id);
  if (!service) return <p>Service not found.</p>;

  return (
    <>
      <PageHelmet pageTitle={service.title} />
      <Navbar />

      <div
        className="rn-page-title-area pt--120 pb--190 bg_image bg_image--5"
        data-black-overlay="9"
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="rn-page-title text-center pt--100">
                <h2 className="title theme-gradient">{service.title}</h2>
                <p>{service.description}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="rn-service-details ptb--120 bg_color--1">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="service-details-inner">
                <div className="inner">
                  {/* Section 1 */}
                  <div className="row sercice-details-content pb--80 align-items-center">
                    <div className="col-lg-6 col-12">
                      <div className="thumb">
                        <img
                          className="w-100"
                          src={service.image1}
                          alt={service.title}
                        />
                      </div>
                    </div>
                    <div className="col-lg-6 col-12">
                      <div className="details mt_md--30 mt_sm--30">
                        {service.sections[0].paragraphs.map((p, i) => (
                          <p key={i}>{p}</p>
                        ))}
                        <h4 className="title">{service.sections[0].title}</h4>
                        <ul className="liststyle">
                          {service.sections[0].list.map((item, i) => (
                            <li key={i}>{item}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Section 2 */}
                  {service.sections[1] && (
                    <div className="row sercice-details-content align-items-center">
                      <div className="col-lg-6 col-12 order-2 order-lg-1">
                        <div className="details mt_md--30 mt_sm--30">
                          {service.sections[1].paragraphs.map((p, i) => (
                            <p key={i}>{p}</p>
                          ))}
                          <h4 className="title">{service.sections[1].title}</h4>
                          <ul className="liststyle">
                            {service.sections[1].list.map((item, i) => (
                              <li key={i}>{item}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                      <div className="col-lg-6 col-12 order-1 order-lg-2">
                        <div className="thumb position-relative">
                          <img
                            className="w-100"
                            src={service.image2}
                            alt={service.title}
                          />
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="rn-contact-us ptb--120 bg_color--5" id="contact">
        <Contact />
      </div>

      <div className="backto-top">
        <ScrollToTop showUnder={160}>
          <FiChevronUp />
        </ScrollToTop>
      </div>

      <Footer />
    </>
  );
};

export default CustomServiceDetails;
