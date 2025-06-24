import ScrollToTop from "react-scroll-up";
import { FiChevronUp } from "react-icons/fi";
import PageHelmet from "../component/common/Helmet";
import Breadcrumb from "../elements/common/Breadcrumb";
import Testimonial from "../elements/Testimonial";
import Footer from "../component/footer/Footer";
import findingImg from "../assets/images/about/finding-us-01.png";
import teamImg1 from "../assets/images/team/team-01.jpg";
import teamImg2 from "../assets/images/team/team-02.jpg";
import teamImg3 from "../assets/images/team/team-03.jpg";
import Navbar from "../custom-component/NavBar";
import About from "../component/HomeLayout/homeOne/About";
import Contact from "../elements/contact/ContactTwo";

const CustomAbout = () => {
  const title = "About";
  const description =
    "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. If you are going to use a passage of Lorem Ipsum Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. If you are going.";

  const teamMembers = [
    { name: "Jone Due", role: "Sr. Web Developer", img: teamImg1 },
    { name: "BM. Alamin", role: "Sr. Web Developer", img: teamImg2 },
    { name: "Jone Due", role: "Sr. Web Developer", img: teamImg3 },
  ];

  return (
    <>
      <PageHelmet pageTitle="About" />
      <Navbar />

      <Breadcrumb title={title} />

      {/* Start About Area */}
      <div className="about-area about-position-top pb--120 bg_color--1">
        <About />
      </div>

      <div className="rn-finding-us-area rn-finding-us bg_color--1">
        <div className="inner">
          <div className="content-wrapper">
            <div className="content">
              <h4 className="theme-gradient">
                One team. Three dimensions of digital success.
              </h4>
              <p>Integrated Digital Solutions That drive results</p>
              <a className="rn-btn btn-white" href="/contact">
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
