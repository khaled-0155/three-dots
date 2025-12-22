import PageHelmet from "../component/common/Helmet";
import Breadcrumb from "../elements/common/Breadcrumb";
import ScrollToTop from "react-scroll-up";
import { FiChevronUp } from "react-icons/fi";
import Footer from "../component/footer/Footer";
import about from "../assets/images/marketing/marketing-1.png";
import findingImg from "../assets/images/marketing/marketing-2.png";

import {
  FiShare2,
  FiEdit3,
  FiTarget,
  FiTrendingUp,
  FiSearch,
  FiBarChart2,
} from "react-icons/fi";
import Navbar from "../custom-component/Navbar";

const ServiceList = [
  {
    icon: <FiShare2 />,
    title: "Social Media Marketing",
    description:
      "Build a strong presence on Instagram, Facebook, LinkedIn, and more. We craft your brand voice, manage daily content, and foster meaningful engagement with your community.",
  },
  {
    icon: <FiEdit3 />,
    title: "Content Strategy & Creation",
    description:
      "We write, design, and produce content that educates, entertains, and sells — including blogs, videos, infographics, and email campaigns.",
  },
  {
    icon: <FiTarget />,
    title: "Paid Advertising (Google, Meta, LinkedIn)",
    description:
      "We manage and optimise ad spend to maximise ROI through targeted campaigns, split testing, and data-driven performance tuning.",
  },
  {
    icon: <FiTrendingUp />,
    title: "Conversion Funnel Design",
    description:
      "We guide users from awareness to action with custom landing pages, lead magnets, and nurturing sequences designed to convert.",
  },
  {
    icon: <FiSearch />,
    title: "Search Engine Optimization (SEO)",
    description:
      "Improve your organic visibility and climb Google rankings with technical audits, content optimisation, and authority building.",
  },
  {
    icon: <FiBarChart2 />,
    title: "Marketing Analytics & Reporting",
    description:
      "Get clear insights on every campaign through real-time dashboards, KPI tracking, and strategic recommendations.",
  },
];

const Marketing = () => {
  const title = "Digital Marketing";
  const description =
    "From Visibility to Conversion, We Build Brands That Perform At Three Dots, our digital marketing services are not just about traffic, they're about traction. We design and execute performance-driven strategies that attract, engage, and convert the right audience for your business.";

  return (
    <>
      <PageHelmet pageTitle="Digital Marketing" />

      <Navbar />

      {/* Start Breadcrump Area */}
      <Breadcrumb
        title="Digital Marketing"
        description="From Visibility to Conversion, We Build Brands That Perform"
      />
      {/* End Breadcrump Area */}

      {/* Start Service Area */}
      <div className="service-area ptb--120 bg_color--5">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title text-center mb--30">
                <h2 className="title ">Our Marketing Capabilities Include</h2>
                <p>
                  At Three Dots, our digital marketing services are not just
                  about traffic, they're about traction. We design and execute
                  performance-driven strategies that attract, engage, and
                  convert the right audience for your business.
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

      {/* Start About Area */}
      <div className="rn-about-area ptb--120 bg_color--1">
        <div className="rn-about-wrapper">
          <div className="container">
            <div className="row row--35 align-items-center">
              {/* Image */}
              <div className="col-lg-5">
                <div className="thumbnail">
                  <img className="w-100" src={about} alt="About Images" />
                </div>
              </div>

              {/* Content */}
              <div className="col-lg-7">
                <div className="about-inner inner">
                  {/* Title + Intro */}
                  <div className="section-title">
                    <h2 className="title">What Our Marketing Delivers</h2>

                    <p className="description">
                      Our marketing isn’t about noise, it’s about impact. We
                      focus on clarity, consistency, and results that move the
                      needle for your business.
                    </p>

                    <p className="description">
                      Because at 3 Dots, we don’t chase reach, we build
                      momentum. Your brand deserves marketing that delivers
                      outcomes, not promises.
                    </p>
                  </div>

                  {/* Key Points */}
                  <div className="row mt--30">
                    <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                      <div className="about-us-list">
                        <h3 className="title">Strategic Alignment</h3>
                        <p>
                          Every campaign begins with your business goals,
                          ensuring marketing drives measurable growth, not
                          vanity metrics.
                        </p>
                      </div>
                    </div>

                    <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                      <div className="about-us-list">
                        <h3 className="title">B2B & B2C Expertise</h3>
                        <p>
                          Whether you sell to businesses or consumers, our team
                          understands the psychology, behaviour, and data behind
                          every decision.
                        </p>
                      </div>
                    </div>

                    <div className="col-lg-6 col-md-12 col-sm-12 col-12 mt--30">
                      <div className="about-us-list">
                        <h3 className="title">Transparent Results</h3>
                        <p>
                          We believe in full visibility. You’ll always know
                          where your budget goes, what performs, and why.
                        </p>
                      </div>
                    </div>

                    <div className="col-lg-6 col-md-12 col-sm-12 col-12 mt--30">
                      <div className="about-us-list">
                        <h3 className="title">Continuous Optimisation</h3>
                        <p>
                          Our work doesn’t stop at launch. We refine, test, and
                          adapt every element to keep performance improving week
                          after week.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End About Area */}

      {/* Start Finding Us Area */}
      <div className="rn-finding-us-area rn-finding-us bg_color--1">
        <div className="inner">
          <div className="content-wrapper">
            <div className="content">
              <h4 className="theme-gradient">
                Ready to turn strategy into measurable growth?
              </h4>
              <p>Let’s build your next winning campaign.</p>
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

export default Marketing;
