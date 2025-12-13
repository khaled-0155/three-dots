import { Component } from "react";

import ScrollToTop from "react-scroll-up";
import serviceImg from "../assets/images/service/service-011.png";
import { FiChevronUp } from "react-icons/fi";

import Testimonial from "../elements/Testimonial";
import BlogContent from "../elements/blog/BlogContent";
import Contact from "../elements/contact/ContactTwo";
import Helmet from "../component/common/Helmet";

import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim"; // if you are going to use `loadSlim`, install the "@tsparticles/slim" package too.
import About from "../component/HomeLayout/homeOne/About";
import ServiceTwo from "../elements/service/ServiceTwo";
import { TbWorldSearch } from "react-icons/tb";
import { MdOutlineDesignServices } from "react-icons/md";
import { IoBuildOutline } from "react-icons/io5";
import { GrOptimize } from "react-icons/gr";
import Footer from "../component/footer/Footer";
import Navbar from "../custom-component/Navbar";
import BrandOne from "../elements/Brand";

const SlideList = [
  {
    textPosition: "text-center",
    category: "Integrated Business & Digital Solutions That Drive Results",
    title: "Welcome to Three Dots",
    subTitle: "Odoo Systems. Smart Marketing. Custom Software",
    category2: "",
    description:
      "We help businesses scale efficiently by integrating operations, marketing, and technology into one powerful ecosystem. ",
    buttonText: "Book a Free Consultation",
    buttonLink: "/contact",
    buttonLink2: "/contact",
    buttonText2: "/contact",
  },
];

// const serviceContent = [
//   {
//     link: "erp",
//     icon: <FiLayers />,
//     title: "ERP Systems",
//     description:
//       "Streamline your business operations with smart, scalable ERP solutions.",
//   },
//   {
//     link: "marketing",
//     icon: <FiUsers />,
//     title: "Digital Marketing",
//     description: "Reach, engage, and convert with data-driven strategies.",
//   },
//   {
//     link: "software",
//     icon: <FiMonitor />,
//     title: "Software Solutions",
//     description: "Build what your business needs, without the tech headaches.",
//   },
// ];

const serviceContent = [
  {
    number: "01",
    icon: <TbWorldSearch />,
    title: "Discover",
    description:
      "We dive deep into your business, challenges, and goals to uncover what really matters. Every solution starts with understanding.",
  },
  {
    number: "02",
    icon: <MdOutlineDesignServices />,
    title: "Design & Strategize",
    description:
      "From systems architecture to marketing funnels, we map out a clear plan tailored to your operations, audience, and objectives.",
  },
  {
    number: "03",
    icon: <IoBuildOutline />,
    title: "Build & Execute",
    description:
      "Our multidisciplinary teams turn strategy into reality, whether it’s building software, launching campaigns, or integrating tools.",
  },
  {
    number: "04",
    icon: <GrOptimize />,
    title: "Optimize & Grow",
    description:
      "We don’t disappear after launch. We monitor, test, improve, and help you grow, because performance is an ongoing process.",
  },
];

class HomeParticles extends Component {
  constructor(props) {
    super(props);
    this.menuTrigger = this.menuTrigger.bind(this);
    this.CLoseMenuTrigger = this.CLoseMenuTrigger.bind(this);
    this.stickyHeader = this.stickyHeader.bind(this);
    this.state = {
      init: false,
    };

    //  this.subMetuTrigger = this.subMetuTrigger.bind(this);
    window.addEventListener("load", function () {
      console.log("All assets are loaded");
    });
  }

  menuTrigger() {
    document.querySelector(".header-wrapper")?.classList.toggle("menu-open");
  }

  CLoseMenuTrigger() {
    document.querySelector(".header-wrapper")?.classList.remove("menu-open");
  }

  async componentDidMount() {
    try {
      await initParticlesEngine(async (engine) => {
        // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
        await loadSlim(engine);
      });
      this.setState({ init: true });
    } catch (error) {
      console.error("Error initializing particles engine:", error);
    }
  }

  particlesLoaded(container) {
    // console.log(container);
    // console.log("first");
  }

  stickyHeader() {}
  render() {
    const PostList = BlogContent.slice(0);

    window.addEventListener("scroll", function () {
      var value = window.scrollY;
      if (value > 100) {
        document.querySelector(".header--fixed")?.classList.add("sticky");
      } else {
        document.querySelector(".header--fixed")?.classList.remove("sticky");
      }
    });

    var elements = document.querySelectorAll(".has-droupdown > a");
    for (var i in elements) {
      if (elements.hasOwnProperty(i)) {
        elements[i].onclick = function () {
          this.parentElement
            .querySelector(".submenu")
            ?.classList.toggle("active");
          this?.classList.toggle("open");
        };
      }
    }

    return (
      <div className="active-dark">
        <Helmet pageTitle="Home" />
        {/* Start Header Area  */}
        <Navbar logoColor="white" />

        {/* End Header Area  */}
        {/* Start Slider Area   */}
        <div
          className="slider-activation slider-creative-agency with-particles"
          id="home"
        >
          <div className="frame-layout__particles">
            {this.state.init && (
              <Particles
                className="particle"
                particlesLoaded={this.particlesLoaded}
                options={{
                  style: {
                    position: "absolute",
                  },
                  fpsLimit: 100,
                  interactivity: {
                    detectsOn: "canvas",
                    events: {
                      onClick: {
                        enable: true,
                        mode: "push",
                      },
                      onHover: {
                        enable: true,
                        mode: "repulse",
                      },
                      resize: true,
                    },
                    modes: {
                      bubble: {
                        distance: 100,
                        duration: 2,
                        opacity: 0.8,
                        size: 10,
                        color: "#888",
                      },
                      push: {
                        quantity: 4,
                      },
                      repulse: {
                        distance: 100,
                        duration: 0.4,
                        color: "#888",
                      },
                    },
                  },
                  particles: {
                    color: {
                      value: "#888",
                    },
                    links: {
                      color: "#888",
                      distance: 150,
                      enable: true,
                      opacity: 0.5,
                      width: 1,
                    },
                    collisions: {
                      enable: true,
                    },
                    move: {
                      direction: "none",
                      enable: true,
                      outMode: "bounce",
                      random: false,
                      speed: 6,
                      straight: false,
                    },
                    number: {
                      density: {
                        enable: true,
                        value_area: 2000,
                      },
                      value: 80,
                    },
                    opacity: {
                      value: 0.5,
                    },
                    shape: {
                      type: "circle",
                    },
                    size: {
                      random: true,
                      value: 5,
                    },
                  },
                  detectRetina: true,
                }}
              />
            )}
          </div>
          <div className="bg_image bg_image--27">
            {SlideList.map((value, index) => (
              <div
                className="slide slide-style-2 slider-paralax d-flex align-items-center justify-content-center"
                key={index}
              >
                <div className="container">
                  <div className="row">
                    <div className="col-lg-12">
                      <div className={`inner ${value.textPosition}`}>
                        {value.category ? <span>{value.category}</span> : ""}
                        {value.title ? (
                          <h1 className="title theme-gradient">
                            {value.title}
                          </h1>
                        ) : (
                          ""
                        )}{" "}
                        {value.subTitle ? (
                          <h3 className="title theme-gradient">
                            {value.subTitle}
                          </h3>
                        ) : (
                          ""
                        )}
                        {value.category2 ? <span>{value.category2}</span> : ""}
                        {value.description ? (
                          <p className="description">{value.description}</p>
                        ) : (
                          ""
                        )}
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "space-around",
                            alignItems: "center",
                            gap: "10px",
                          }}
                        >
                          {value.buttonText ? (
                            <div className="slide-btn">
                              <a
                                className="rn-button-style--2 btn-primary-color"
                                href={`${value.buttonLink}`}
                              >
                                {value.buttonText}
                              </a>
                            </div>
                          ) : (
                            ""
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* End Slider Area   */}
        {/* Start About Area */}
        <div className="about-area about-position-top pb--120 bg_color--1">
          <About />
        </div>

        {/* Start Blog Area */}
        <div className="rn-blog-area pt--120 bg_color--1 mb-dec--30">
          <div className="container">
            <div className="row align-items-end">
              <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                <div className="section-title text-left">
                  <h2>What We Do</h2>
                  <p>
                    We deliver end-to-end digital solutions built around three
                    core pillars that drive performance and growth.
                  </p>
                </div>
              </div>
              {/* <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                <div className="blog-btn text-left text-lg-right mt_sm--10 mt_md--10">
                  <a className="btn-transparent rn-btn-dark" href="/blog">
                    <span className="text">View All News</span>
                  </a>
                </div>
              </div> */}
            </div>
            <div className="row mt--60 mt_sm--40">
              {PostList.map((value, i) => (
                <div className="col-lg-4 col-md-6 col-12" key={i}>
                  <div className="blog blog-style--1">
                    <div className="thumbnail">
                      <a href="/blog-details">
                        <img
                          className="w-100"
                          src={value.images}
                          alt="Blog Images"
                        />
                      </a>
                    </div>
                    <div className="content">
                      <p className="blogtype">{value.category}</p>
                      <h4 className="title">
                        <a href="/blog-details">{value.title}</a>
                      </h4>
                      <div className="blog-btn">
                        <a className="rn-btn text-white" href="/blog-details">
                          Discover Service
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* End Blog Area */}

        {/* End About Area */}
        {/* Start Service Area  */}
        <div className="service-area ptb--80  bg_image bg_image--3">
          <div className="container">
            <ServiceTwo content={serviceContent} />
          </div>
        </div>
        {/* End Service Area  */}

        {/* Start How We Work */}
        {/* <div className="rn-about-area ptb--120 bg_color--1">
          <div className="rn-about-wrapper">
            <div className="container">
              <div className="row row--35 align-items-center">
                <div className="col-lg-7">
                  <div className="about-inner inner">
                    <div className="section-title">
                      <h2 className="title">How We Work</h2>
                      <p className="description">
                        Our process is built around one goal: getting real
                        results, not just delivering deliverables. We work
                        closely with each client, combining strategy, design,
                        and tech to solve the right problems in the right way.
                      </p>
                    </div>
                    <div className="row mt--30">
                      <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                        <div className="about-us-list">
                          <h3 className="title">Our Working Process.</h3>
                          <div className="rn-progress-bar progress-bar--3">
                            <div className="single-progress custom-color--1">
                              <h6 style={{ color: "white" }} className="title">
                                Designing
                              </h6>
                              <ProgressBar now={99} />
                              <span
                                style={{ color: "white" }}
                                className="label"
                              >
                                99%
                              </span>
                            </div>

                            <div className="single-progress custom-color--2">
                              <h6 style={{ color: "white" }} className="title">
                                Managment
                              </h6>
                              <ProgressBar now={99} />
                              <span
                                style={{ color: "white" }}
                                className="label"
                              >
                                99%
                              </span>
                            </div>

                            <div className="single-progress custom-color--3">
                              <h6 style={{ color: "white" }} className="title">
                                Marketing
                              </h6>
                              <ProgressBar now={99} />
                              <span
                                style={{ color: "white" }}
                                className="label"
                              >
                                99%
                              </span>
                            </div>

                            <div className="single-progress custom-color--4">
                              <h6 style={{ color: "white" }} className="title">
                                Development
                              </h6>
                              <ProgressBar now={99} />
                              <span
                                style={{ color: "white" }}
                                className="label"
                              >
                                99%
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-5 mt_md--40 mt_sm--40">
                  <div className="thumbnail">
                    <img className="w-100" src={about} alt="About Images" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> */}

        {/* Start Single Area */}
        <div className="rn-service-details ptb--120 bg_color--1">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="service-details-inner">
                  <div className="inner">
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
                        <h2 className="title">Why Choose 3 dots</h2>
                        <h4 className="">
                          Not Just Another Tech Provider.. A Growth Partner
                        </h4>

                        <div className="details mt_md--30 mt_sm--30">
                          <p style={{ color: "#aaa" }}>
                            In a market flooded with generic agencies and
                            one-size-fits-all software, we offer something
                            different: focus, depth, and a results-first
                            mindset.
                          </p>
                          <p style={{ color: "#aaa" }}>
                            With every project, we bring the strategy of a
                            consultancy, the precision of a tech firm, and the
                            hustle of a startup.
                          </p>
                          <h4 className="title"></h4>
                          <ul className="liststyle">
                            <li style={{ color: "#fff" }}>
                              Backed by Experience
                            </li>
                            <li style={{ color: "#fff" }}>
                              Unified Digital Expertise
                            </li>
                            <li style={{ color: "#fff" }}>Tailored to You</li>
                            <li style={{ color: "#fff" }}>
                              Fast, Agile, Reliable
                            </li>
                            <li style={{ color: "#fff" }}>
                              Long-Term Thinking
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End Single Area */}
        {/* Start Testimonial Area */}
        <div
          className="rn-testimonial-area bg_color--5 ptb--120"
          id="testimonial"
        >
          <div className="container">
            <Testimonial />
          </div>
        </div>

        {/* Start Brand Area  */}
        <div className="rn-brand-area ptb--120 bg_color--5">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <BrandOne branstyle="branstyle--2" />
              </div>
            </div>
          </div>
        </div>
        {/* End Testimonial Area */}
        {/* Start Contact Us */}
        <div className="rn-contact-us ptb--120 bg_color--5" id="contact">
          <Contact />
        </div>
        {/* End Contact Us */}
        {/* Start Footer Style  */}
        <Footer />
        {/* End Footer Style  */}
        {/* Start Back To Top */}
        <div className="backto-top">
          <ScrollToTop showUnder={160}>
            <FiChevronUp />
          </ScrollToTop>
        </div>
        {/* End Back To Top */}
      </div>
    );
  }
}
export default HomeParticles;
