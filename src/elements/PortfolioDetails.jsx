import React, { useState } from "react";
import PageHelmet from "../component/common/Helmet";
import ModalVideo from "react-modal-video";
import {
  FaTwitter,
  FaInstagram,
  FaFacebookF,
  FaLinkedinIn,
} from "react-icons/fa";
import ScrollToTop from "react-scroll-up";
import { FiChevronUp } from "react-icons/fi";
import Header from "../component/header/Header";
import Footer from "../component/footer/Footer";

import portfolio1 from "../assets/images/portfolio/portfolio-big-01.jpg";
import portfolio2 from "../assets/images/portfolio/portfolio-big-02.jpg";
import portfolio3 from "../assets/images/portfolio/portfolio-big-03.jpg";
import relatedImg1 from "../assets/images/portfolio/related-image-01.jpg";
import relatedImg2 from "../assets/images/portfolio/related-image-02.jpg";

const SocialShare = [
  { Social: <FaFacebookF />, link: "https://www.facebook.com/" },
  { Social: <FaLinkedinIn />, link: "https://www.linkedin.com/" },
  { Social: <FaInstagram />, link: "https://www.instagram.com/" },
  { Social: <FaTwitter />, link: "https://twitter.com/" },
];

const PortfolioDetails = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <PageHelmet pageTitle="Portfolio Details" />

      <Header
        headertransparent="header--transparent"
        colorblack="color--black"
        logoname="logo.png"
      />

      {/* Breadcrumb */}
      <div
        className="rn-page-title-area pt--120 pb--190 bg_image bg_image--4"
        data-black-overlay="7"
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="rn-page-title text-center pt--100">
                <h2 className="title theme-gradient">
                  Getting tickets to the big show
                </h2>
                <p>
                  Contrary to popular belief, Lorem Ipsum is not simply random
                  text.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Portfolio Details */}
      <div className="rn-portfolio-details ptb--120 bg_color--1">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="portfolio-details">
                <div className="inner">
                  <h2>Trydo</h2>
                  <p className="subtitle">
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration in some
                    form.
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua...
                  </p>

                  <div className="portfolio-view-list d-flex flex-wrap">
                    <div className="port-view">
                      <span>Branch</span>
                      <h4>Ability</h4>
                    </div>
                    <div className="port-view">
                      <span>Project Types</span>
                      <h4>Website</h4>
                    </div>
                    <div className="port-view">
                      <span>Program</span>
                      <h4>View Project</h4>
                    </div>
                  </div>

                  <div className="portfolio-share-link mt--20 pb--70 pb_sm--40">
                    <ul className="social-share rn-lg-size d-flex justify-content-start liststyle mt--15">
                      {SocialShare.map((val, i) => (
                        <li key={i}>
                          <a
                            href={val.link}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {val.Social}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="portfolio-thumb-inner">
                  <div className="thumb position-relative mb--30">
                    <img src={portfolio3} alt="Portfolio" />
                    <ModalVideo
                      channel="youtube"
                      isOpen={isOpen}
                      videoId="ZOoVOfieAF8"
                      onClose={() => setIsOpen(false)}
                    />
                    <button
                      className="video-popup position-top-center"
                      onClick={() => setIsOpen(true)}
                    >
                      <span className="play-icon"></span>
                    </button>
                  </div>

                  <div className="thumb mb--30">
                    <img src={portfolio2} alt="Portfolio" />
                  </div>

                  <div className="thumb">
                    <img src={portfolio1} alt="Portfolio" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Related Work */}
      <div className="portfolio-related-work pb--120 bg_color--1">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title text-center">
                <span className="theme-color font--18 fontWeight600">
                  Related Work
                </span>
                <h2>Our More Projects</h2>
              </div>
            </div>
          </div>
          <div className="row mt--10">
            {[relatedImg1, relatedImg2].map((img, idx) => (
              <div className="col-lg-6 col-md-6 col-12" key={idx}>
                <div className="related-work text-center mt--30">
                  <div className="thumb">
                    <a href="/portfolio-details">
                      <img src={img} alt="Portfolio Related" />
                    </a>
                  </div>
                  <div className="inner">
                    <h4>
                      <a href="/portfolio-details">
                        {idx === 0 ? "Digital Analysis" : "Plan Management"}
                      </a>
                    </h4>
                    <span className="category">
                      {idx === 0 ? "Technique" : "PLANNING"}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

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

export default PortfolioDetails;
