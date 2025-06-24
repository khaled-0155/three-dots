import PageHelmet from "../component/common/Helmet";
import Breadcrumb from "../elements/common/Breadcrumb";
import {
  FiCast,
  FiLayers,
  FiUsers,
  FiMonitor,
  FiChevronUp,
} from "react-icons/fi";
import ScrollToTop from "react-scroll-up";
import Header from "../component/header/Header";
import Footer from "../component/footer/Footer";
import Navbar from "../custom-component/NavBar";
import Contact from "../elements/contact/ContactTwo";
import { ProgressBar } from "react-bootstrap";
import about from "../assets/images/about/about-3.jpg";
import { Link } from "react-router-dom";

const serviceContent = [
  {
    link: "erp",
    icon: <FiLayers />,
    title: "ERP Systems",
    description:
      "Streamline your business operations with smart, scalable ERP solutions.",
  },
  {
    link: "marketing",
    icon: <FiUsers />,
    title: "Digital Marketing",
    description: "Reach, engage, and convert with data-driven strategies.",
  },
  {
    link: "software",
    icon: <FiMonitor />,
    title: "Software Solutions",
    description: "Build what your business needs, without the tech headaches.",
  },
];

const Section = ({ title, bgClass, wrapperClass }) => (
  <div
    style={{ opacity: 1 }}
    className={`service-area ${wrapperClass} ${bgClass}`}
  >
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="section-title text-center mb--30">
            <h2>{title}</h2>
            <p>
              We deliver end-to-end digital solutions across three core pillars
            </p>
          </div>
        </div>
      </div>
      <div
        className={`row ${
          wrapperClass.includes("creative")
            ? "creative-service"
            : "service-one-wrapper"
        }`}
      >
        {serviceContent.map((val, i) => (
          <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12" key={i}>
            <Link
              className={wrapperClass.includes("creative") ? "text-center" : ""}
              to={val.link}
            >
              <div className="service service__style--2">
                <div className="icon">{val.icon}</div>
                <div className="content">
                  <h3 className="title">{val.title}</h3>
                  <p>{val.description}</p>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const Services = () => {
  return (
    <>
      <Navbar />
      <PageHelmet pageTitle="Services" />
      <Breadcrumb title={"Services"} />
      {/* Section Blocks */}
      <div className="service-area ptb--120 bg_color--5">
        <Section title="What We Do" bgClass="bg_color--5" wrapperClass="" />

        {/* Back to Top */}
        <div className="backto-top">
          <ScrollToTop showUnder={160}>
            <FiChevronUp />
          </ScrollToTop>
        </div>
      </div>
      {/* Start How We Work */}
      <div className="rn-about-area ptb--120 bg_color--1">
        <div className="rn-about-wrapper">
          <div className="container">
            <div className="row row--35 align-items-center">
              <div className="col-lg-5 mt_md--40 mt_sm--40">
                <div className="thumbnail">
                  <img className="w-100" src={about} alt="About Images" />
                </div>
              </div>{" "}
              <div className="col-lg-7">
                <div className="about-inner inner">
                  <div className="section-title">
                    <h2 className="title">How We Work</h2>
                    <p className="description">
                      Our process is built around one goal: getting real
                      results, not just delivering deliverables. We work closely
                      with each client, combining strategy, design, and tech to
                      solve the right problems in the right way.
                    </p>
                  </div>
                  <div className="row mt--30">
                    <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                      <div className="about-us-list">
                        <h3 className="title">Our Working Process.</h3>
                        <div className="rn-progress-bar progress-bar--3">
                          <div className="single-progress custom-color--1">
                            <h6 className="title">Designing</h6>
                            <ProgressBar now={99} />
                            <span className="label">99%</span>
                          </div>

                          <div className="single-progress custom-color--2">
                            <h6 className="title">Managment</h6>
                            <ProgressBar now={99} />
                            <span className="label">99%</span>
                          </div>

                          <div className="single-progress custom-color--3">
                            <h6 className="title">Marketing</h6>
                            <ProgressBar now={99} />
                            <span className="label">99%</span>
                          </div>

                          <div className="single-progress custom-color--4">
                            <h6 className="title">Development</h6>
                            <ProgressBar now={99} />
                            <span className="label">99%</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="rn-contact-us ptb--120 bg_color--5" id="contact">
        <Contact />
      </div>
      <Footer />
    </>
  );
};

export default Services;
