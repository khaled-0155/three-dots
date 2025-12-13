import React, { useState } from "react";
import PageHelmet from "../component/common/Helmet";
import ScrollToTop from "react-scroll-up";
import Footer from "../component/footer/Footer";
import findingImg from "../assets/images/about/finding-us-01.png";
import imgOne from "../assets/images/blog/bl-big-01.jpg";
import imgTwo from "../assets/images/blog/blog-single-01.png";
import Navbar from "../custom-component/Navbar";

import {
  FiSettings,
  FiLayers,
  FiUploadCloud,
  FiCode,
  FiChevronUp,
  FiBookOpen,
  FiHelpCircle,
  FiFileText,
  FiMonitor,
  FiSmartphone,
  FiPenTool,
  FiLink2,
  FiRefreshCcw,
  FiTrendingUp,
  FiCpu,
  FiMessageSquare,
  FiCheck,
  FiBarChart2,
} from "react-icons/fi";

const AIAutomationList = [
  {
    title: "Predictive Analytics",
    icon: <FiTrendingUp />,
    points: [
      "Turn historical data into foresight.",
      "We use machine learning models to forecast demand, track customer behaviour, and identify trends before they happen.",
      "Helping you plan smarter and act faster.",
    ],
  },
  {
    title: "Process Automation",
    icon: <FiCpu />,
    points: [
      "Automate repetitive tasks such as approvals, reporting, invoicing, and communication.",
      "Our AI-powered automation ensures accuracy, reduces human error, and saves valuable time across departments.",
    ],
  },
  {
    title: "AI Chatbots & Virtual Assistants",
    icon: <FiMessageSquare />,
    points: [
      "Enhance customer and employee experiences with intelligent assistants.",
      "They handle queries, generate leads, and provide instant responses directly within Odoo’s ecosystem.",
    ],
  },
  {
    title: "Data Insights & Decision Support",
    icon: <FiBarChart2 />,
    points: [
      "We combine Odoo’s analytics with AI algorithms to give you actionable insights and data-backed recommendations.",
      "So every decision moves your business forward.",
    ],
  },
];

const IntegrationList = [
  {
    icon: <FiLink2 />,
    title: "Integration",
    description:
      "We connect Odoo with your existing systems, from CRMs and eCommerce platforms to accounting software, logistics providers, and reporting tools. These integrations eliminate manual data entry, reduce errors, and keep every department aligned through real-time information sharing.",
  },
  {
    icon: <FiRefreshCcw />,
    title: "Odoo Migration",
    description:
      "Whether you’re upgrading from an older Odoo version or switching from another ERP, we handle the full migration process. Our team ensures that all your data, modules, and workflows move securely into the latest Odoo environment while preserving functionality and business continuity.",
  },
];

const DesignDevList = [
  {
    icon: <FiMonitor />,
    title: "Website Development",
    description:
      "We design and build responsive, SEO-friendly websites fully integrated with Odoo. From eCommerce platforms to corporate sites, every page is crafted for performance, usability, and conversion.",
  },
  {
    icon: <FiSmartphone />,
    title: "Mobile Application",
    description:
      "We develop custom mobile applications that extend Odoo’s functionality to smartphones and tablets, giving you real-time access to operations, analytics, and communication, anytime, anywhere.",
  },
  {
    icon: <FiPenTool />,
    title: "UI/UX Customization",
    description:
      "We refine Odoo’s interface to match your brand identity and optimise user experience. Through layout enhancements, visual consistency, and intuitive navigation, we make Odoo not only functional but enjoyable to use.",
  },
];

const TrainingSupportList = [
  {
    icon: <FiBookOpen />,
    title: "Training",
    description:
      "We provide hands-on, role-based training covering every key module and workflow. Administrators and end-users learn how to get the most out of Odoo, boosting adoption, accuracy, and productivity.",
  },
  {
    icon: <FiHelpCircle />,
    title: "Support",
    description:
      "Our support doesn’t stop after launch. We offer continuous technical and functional assistance with fast response times, proactive monitoring, troubleshooting, performance tuning, and module enhancements.",
  },
  {
    icon: <FiFileText />,
    title: "Documentation",
    description:
      "We deliver clear, practical documentation—user manuals, admin guides, and process flowcharts—empowering your team with long-term consistency and smoother onboarding.",
  },
];

const ServiceList = [
  {
    icon: <FiSettings />,
    title: "Implementation",
    description:
      "We manage the entire Odoo deployment lifecycle, from requirements to configuration and go-live—fully tailored to your operations.",
  },
  {
    icon: <FiLayers />,
    title: "GAP Analysis",
    description:
      "We analyse gaps between your business processes and Odoo’s capabilities, then bridge them with customised workflows and modules.",
  },
  {
    icon: <FiUploadCloud />,
    title: "Data Migration",
    description:
      "Secure, accurate, and seamless migration of your data from legacy systems to Odoo with zero loss and minimal downtime.",
  },
  {
    icon: <FiCode />,
    title: "Customization",
    description:
      "We build custom modules, dashboards, and automations that align with your unique processes and performance goals.",
  },
  {
    icon: <FiTrendingUp />,
    title: "Optimization & Upgrades",
    description:
      "Boost system speed, improve usability, and upgrade Odoo versions to keep your environment evolving with your business.",
  },
];

const Oddo = () => {
  return (
    <>
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
                <h2 className="title theme-gradient">Odoo Services</h2>
                <p>
                  Unify Your Operations. Empower Your Teams. Scale Without
                  Chaos.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Breadcrump Area */}

      {/* Start Blog Details */}
      <div className="rn-blog-details pt--110 pb--70 bg_color--1">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="inner-wrapper">
                <div className="inner">
                  <p>
                    At 3 Dots, we believe technology should adapt to your
                    business, not the other way around. That’s why we implement
                    Odoo, an all-in-one ERP platform that unifies every aspect
                    of your operations under a single, intelligent system.
                  </p>
                  <p>
                    From finance and HR to inventory, sales, and CRM, Odoo
                    brings your teams, data, and workflows together to work in
                    perfect sync. No more switching between disconnected tools
                    or dealing with manual bottlenecks, just one streamlined
                    ecosystem designed for growth.
                  </p>

                  <div className="thumbnail">
                    <img src={imgOne} alt="Blog Images" />
                  </div>

                  <p className="mt--40">
                    Our Odoo experts analyse your business model, identify
                    process gaps, and build tailored modules that enhance
                    efficiency, visibility, and scalability, in order to reach
                    out to a system that feels built for you, because it is.
                  </p>

                  <blockquote className="rn-blog-quote">
                    To make it simple, we’ve structured our services into five
                    main pillars:
                  </blockquote>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Blog Details */}

      {/* Start Service Area */}
      <div className="service-area ptb--120 bg_color--5">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title text-center mb--30">
                <h3 className="title theme-gradient">1</h3>
                <h2 className="title ">Services & Solutions</h2>
                <p>
                  Our Odoo Services & Solutions help businesses implement,
                  adapt, and optimise the platform so it fits their workflow—not
                  just their software checklist. Whether starting fresh or
                  migrating, we ensure every module delivers efficiency and
                  control.
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

      {/* Start Service Area */}
      <div className="service-area ptb--120 bg_color--1">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title text-center mb--30">
                <h3 className="title theme-gradient">2</h3>
                <h2>Training & Support</h2>
                <p>
                  Implementing Odoo is only the beginning—true success comes
                  from how well your team uses it every day. Our Training &
                  Support services empower your people with the knowledge,
                  confidence, and tools to make Odoo a natural part of your
                  operations.
                </p>
              </div>
            </div>
          </div>
          <div className="row service-one-wrapper">
            {TrainingSupportList.map((val, i) => (
              <div
                className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12"
                key={i}
              >
                <a className="text-center" href="/service-details">
                  <div className="service service__style--2">
                    <div className="icon">{val.icon}</div>
                    <div className="content">
                      <h3 className="title">{val.title}</h3>
                      <p>{val.description}</p>
                    </div>
                  </div>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* End Service Area */}

      <div className="service-area creative-service-wrapper pt--90 pb--120 bg_color--5">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title text-center mb--30">
                <h3 className="title theme-gradient">3</h3>
                <h2>Integrations</h2>
                <p>
                  A powerful ERP doesn’t work in isolation—it thrives when
                  seamlessly connected to the rest of your business ecosystem.
                  Our Integration Services ensure your Odoo environment
                  communicates effortlessly with the tools and platforms you
                  already use.
                </p>
              </div>
            </div>
          </div>
          <div className="row creative-service">
            {IntegrationList.map((item, i) => (
              <div
                className="col-lg-6 col-md-6 col-12 mt_sm--30 custom"
                key={i}
              >
                <div className="single-column h-100 d-flex flex-column custom-color">
                  <div
                    className="icon mb--20"
                    style={{ fontSize: "40px", color: "white" }}
                  >
                    {item.icon}
                  </div>

                  <h4 className="tilte">{item.title}</h4>

                  <p className="flex-grow-1">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Start Service Area */}
      <div className="service-area creative-service-wrapper pt--90 pb--120 bg_color--5">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title text-center mb--30">
                <h3 className="title theme-gradient">4</h3>
                <h2>Design & Development</h2>
                <p>
                  Great systems don’t just work well—they look and feel right.
                  Our Design & Development services transform Odoo into a
                  powerful, visually consistent platform that aligns with your
                  brand and extends your capabilities across web and mobile.
                </p>
              </div>
            </div>
          </div>
          <div className="row creative-service">
            {DesignDevList.map((item, i) => (
              <div className="col-lg-4 col-md-6 col-12 mt_sm--30" key={i}>
                <div
                  className={`single-column custom-color custom-color--${i} h-100 d-flex flex-column`}
                >
                  <div
                    className="icon mb--20"
                    style={{ fontSize: "40px", color: "white" }}
                  >
                    {item.icon}
                  </div>

                  <h4 className="tilte">{item.title}</h4>

                  <p className="flex-grow-1">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* End Service Area */}

      {/* Start Service Area */}
      <div className="service-area creative-service-wrapper pt--90 pb--120 bg_color--5">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title text-center mb--30">
                <h3 className="title theme-gradient">5</h3>
                <h2>AI & Automation</h2>
                <p>
                  Smart businesses don’t just collect data, they use it to make
                  better decisions. At 3 Dots, we integrate AI-driven tools and
                  automation workflows into your Odoo system to unlock deeper
                  insights, faster processes, and more intelligent operations.
                </p>
              </div>
            </div>
          </div>
          <div className="rn-pricing-table-area ptb--120 bg_color--5">
            <div className="container">
              <div className="row row g-4">
                {AIAutomationList.map((item, i) => (
                  <div className="col-lg-6 col-md-6 col-12 mb--30" key={i}>
                    <div className={`rn-pricing h-100 d-flex flex-column`}>
                      <div className="pricing-table-inner d-flex flex-column h-100">
                        {/* Header */}
                        <div className="pricing-header text-center">
                          <div
                            className="icon mb--20"
                            style={{ fontSize: "40px" }}
                          >
                            {item.icon}
                          </div>
                          <h4 className="title">{item.title}</h4>
                        </div>

                        {/* Body */}
                        <div className="pricing-body flex-grow-1">
                          <ul className="list-style--1">
                            {item.points.map((point, idx) => (
                              <li key={idx}>
                                <FiCheck /> {point}
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Footer */}
                        <div className="pricing-footer mt-auto">
                          <a className="rn-btn" href="#">
                            Learn More
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Service Area */}

      <div className="rn-blog-details pt--110 pb--70 bg_color--1">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="inner-wrapper">
                <div className="inner"></div>
                <div className="blog-single-list-wrapper d-flex flex-wrap">
                  <div className="thumbnail">
                    <img className="w-100" src={imgTwo} alt="Blog Images" />
                  </div>

                  <div className="content">
                    <h4 className="title">Why Choose 3 Dots for Odoo</h4>

                    <ul className="list-style">
                      <li>
                        Choosing the right Odoo partner means choosing a team
                        that understands both technology and business logic.
                      </li>
                      <li>
                        At 3 Dots, we don’t just install Odoo — we shape it
                        around your goals, workflows, and growth ambitions.
                      </li>
                      <li>
                        Our team of certified Odoo developers, business
                        analysts, and implementation specialists brings together
                        years of experience across multiple industries.
                      </li>
                      <li>
                        We translate complex processes into efficient digital
                        systems that save time, reduce costs, and unlock new
                        opportunities for scale.
                      </li>
                    </ul>

                    <h4 className="title">What Sets Us Apart</h4>

                    <ul className="list-style">
                      <li>
                        We take an end-to-end approach — from discovery and
                        deployment to training, support, and continuous
                        optimisation.
                      </li>
                      <li>
                        Every module, workflow, and integration is engineered to
                        deliver measurable performance improvements.
                      </li>
                      <li>
                        We ensure Odoo becomes a scalable operational engine
                        tailored to your business — not just an installed tool.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Start Finding Us Area  */}
      <div className="rn-finding-us-area rn-finding-us bg_color--1">
        <div className="inner">
          <div className="content-wrapper">
            <div className="content">
              <h4 className="theme-gradient">
                At 3 Dots, Odoo becomes more than software, it becomes the
                operational engine that drives your business forward.
              </h4>
              <p>
                Ready to streamline your operations with Odoo? Let’s design a
                system built for your growth.
              </p>
              <a className="rn-btn btn-white" href="/contact">
                Contact us{" "}
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
      {/* End Finding Us Area  */}

      {/* Back To Top */}
      <div className="backto-top">
        <ScrollToTop showUnder={160}>
          <FiChevronUp />
        </ScrollToTop>
      </div>

      <Footer />
    </>
  );
};

export default Oddo;
