import ScrollToTop from "react-scroll-up";
import { FiChevronUp } from "react-icons/fi";
import PageHelmet from "../component/common/Helmet";
import Breadcrumb from "../elements/common/Breadcrumb";
import Testimonial from "../elements/Testimonial";
import Footer from "../component/footer/Footer";
import findingImg from "../assets/images/about/finding-us-011.png";

import Navbar from "../custom-component/Navbar";
import About from "../component/HomeLayout/homeOne/About";
import Contact from "../elements/contact/ContactTwo";

const longDescription = [
  "At Three Dots, we believe that true digital transformation is not about adding more tools, it’s about building an ecosystem where strategy, systems, and execution operate in harmony.",
  "We started with a simple question: How can businesses grow smarter, not just faster? The answer became our philosophy: to simplify complexity through integrated solutions that connect people, processes, and technology.",
  "Today, Three Dots helps companies of every size move from fragmented operations to unified, data-driven performance.",
  "We design Odoo-based ERP systems that streamline workflows and optimise resources.",
  "We craft performance-driven marketing strategies that translate insight into measurable results.",
  "And we develop scalable software solutions that adapt to every stage of growth.",
  "Our mission is clear: to empower businesses with the right systems, tools, and strategies to overcome real challenges, boost efficiency, and achieve sustainable growth.",
  "Our vision is to redefine business growth, creating a future where organisations no longer manage disconnected departments, but operate as one intelligent, interconnected network.",
  "Every project we take on begins with understanding — your goals, your challenges, your opportunities. Then we connect the dots: transforming ideas into structure, and strategy into success.",
  "At Three Dots, we don’t just deliver digital solutions; we build ecosystems that last.",
];

const CustomAbout = () => {
  const title = "About";

  return (
    <>
      <PageHelmet pageTitle="About" />
      <Navbar />

      <Breadcrumb title={title} />

      {/* Start Finding Us Area  */}
      <div className="rn-finding-us-area rn-finding-us bg_color--1">
        <div className="inner">
          <div className="content-wrapper">
            <div className="content">
              <h4 className="theme-gradient">About Us</h4>
              {longDescription.map((text, index) => (
                <p className="description" key={index}>
                  {text}
                </p>
              ))}
              <a className="rn-btn btn-white" href="/about">
                Get Started
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

      {/* Start About Area */}
      {/* <div className="about-area about-position-top pb--120 bg_color--1">
        <About content={longDescription} />
      </div> */}

      <div className="rn-testimonial-area bg_color--5 ptb--120">
        <div className="container">
          <Testimonial />
        </div>
      </div>

      {/* Start Contact Us */}
      <div className="rn-contact-us ptb--120 bg_color--5" id="contact">
        <Contact />
      </div>
      {/* End Contact Us */}

      <Footer />

      <div className="backto-top">
        <ScrollToTop showUnder={160}>
          <FiChevronUp />
        </ScrollToTop>
      </div>
    </>
  );
};

export default CustomAbout;
