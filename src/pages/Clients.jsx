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
import Contact from "../elements/contact/ContactTwo";

// Replace with your actual client images later
import placeholder from "../assets/images/portfolio/portfolio-big-01.jpg";
import Breadcrumb from "../elements/common/Breadcrumb";
import Navbar from "../custom-component/Navbar";

const SocialShare = [
  { Social: <FaFacebookF />, link: "https://www.facebook.com/" },
  { Social: <FaLinkedinIn />, link: "https://www.linkedin.com/" },
  { Social: <FaInstagram />, link: "https://www.instagram.com/" },
  { Social: <FaTwitter />, link: "https://twitter.com/" },
];

const projects = [
  {
    title: "Court Plus",
    tagline: "The Product Architect",
    desc: "Court Plus didn’t start with a brief—it started with a vision. We initiated the concept internally to solve the fragmented, outdated court-booking experience.",
    extra:
      "Today, we continue to lead Court Plus through its growth journey across the region.",
    image: placeholder,
    branch: "Sports Tech",
    type: "Mobile + Web App",
    program: "Digital Platform",
  },
  {
    title: "Ringo",
    tagline: "The Engineer Within",
    desc: "Ringo came with a goal—streamline queueing and ticketing—but lacked definition. We stepped in to co-architect the product, mapping user flows for customers, admins, and staff.",
    extra:
      "With QR scanning, dynamic queue logic, and real-time updates, Ringo is now in pilot across high-traffic venues.",
    image: placeholder,
    branch: "Operations",
    type: "App + Dashboard",
    program: "Queue Management",
  },
  {
    title: "Technique Fitness",
    tagline: "The Digital Coach",
    desc: "In a crowded wellness market, Technique Fitness aimed to unify fitness and nutrition into one seamless app.",
    extra:
      "The result? The #1 fitness app in Saudi Arabia on the App Store in May 2023.",
    image: placeholder,
    branch: "Health & Fitness",
    type: "Mobile App",
    program: "Digital Coach",
  },
  {
    title: "Al-Nadi Al-Faried",
    tagline: "From Tradition to Digital Taste",
    desc: "Tasked with digitising the experience of ordering traditional Saudi cuisine, we built the Al-Nadi Al-Faried ecosystem from scratch.",
    extra:
      "Balancing heritage with functionality, the platform is now expanding across the Kingdom.",
    image: placeholder,
    branch: "Food & Beverage",
    type: "App + Website",
    program: "Restaurant Platform",
  },
  {
    title: "Magic Stamp",
    tagline: "Loyalty Meets Simplicity",
    desc: "We managed content and social media for one of the region’s most innovative loyalty platforms, helping vendors drive engagement.",
    image: placeholder,
    branch: "Retail",
    type: "Social + Content",
    program: "Loyalty Marketing",
  },
  {
    title: "Technique Meals",
    tagline: "Smart Nutrition, Smarter Reach",
    desc: "We supported Technique Meals with social media marketing focused on awareness and conversion.",
    image: placeholder,
    branch: "Health & Wellness",
    type: "Social Media",
    program: "Digital Marketing",
  },
  {
    title: "Flora Café",
    tagline: "Where Style Meets Sip",
    desc: "We handled the full branding for Flora Café—translating the elegance of their space into a distinctive, modern visual identity.",
    image: placeholder,
    branch: "Hospitality",
    type: "Brand Identity",
    program: "Design",
  },
  {
    title: "J&T",
    tagline: "UK Brand Identity",
    desc: "We built the brand identity for J&T’s UK launch—focused on clarity, versatility, and global ambition.",
    image: placeholder,
    branch: "Logistics",
    type: "Branding",
    program: "Identity Design",
  },
  {
    title: "Taraf",
    tagline: "Luxury Defined",
    desc: "We partnered with Taraf on branding and social media marketing—crafting a bold, luxurious identity.",
    image: placeholder,
    branch: "Real Estate",
    type: "Branding + Marketing",
    program: "Luxury Identity",
  },
];

const Clients = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <PageHelmet pageTitle="Clients" />
      <Navbar />

      <Breadcrumb
        title={"Our Clients"}
        // description="Discover the diverse range of clients we've had the privilege to work with, each with their unique challenges and goals."
      />
      <div className="rn-page-title-area pt--120 pb--60 bg_color--1">
        <div className="container text-center">
          <h2 className="title">Partners in Innovation</h2>
          <h3
            style={{
              fontWeight: "normal",
              maxWidth: "720px",
              textAlign: "center",
              margin: "0 auto",
            }}
          >
            Discover the diverse range of clients we've had the privilege to
            work with, each with their unique challenges and goals.
          </h3>
        </div>
      </div>
      {/* Projects */}
      <div className="rn-portfolio-details ptb--120 bg_color--1">
        {/* Hero Section with Description */}

        <div className="container">
          {projects.map((proj, idx) => (
            <div className="row mb--80 align-items-center" key={idx}>
              {/* Alternate layout left/right */}
              <div
                className={`col-lg-6 mb--30 ${
                  idx % 2 === 0 ? "" : "order-lg-2"
                }`}
              >
                <img src={proj.image} alt={proj.title} className="w-100" />
              </div>
              <div className="col-lg-6">
                <h3>{proj.title}</h3>
                <h5 className="theme-color mb--15">{proj.tagline}</h5>
                <p>{proj.desc}</p>
                {proj.extra && <p>{proj.extra}</p>}

                {/* Portfolio Meta */}
                <div className="portfolio-view-list d-flex flex-wrap mt--20">
                  <div className="port-view">
                    <span>Branch</span>
                    <h4>{proj.branch}</h4>
                  </div>
                  <div className="port-view">
                    <span>Project Types</span>
                    <h4>{proj.type}</h4>
                  </div>
                  <div className="port-view">
                    <span>Program</span>
                    <h4>{proj.program}</h4>
                  </div>
                </div>

                {/* Social Links */}
                <div className="portfolio-share-link mt--20 pb--40">
                  <ul className="social-share rn-lg-size d-flex justify-content-start liststyle mt--15">
                    {SocialShare.map((val, i) => (
                      <li key={i}>
                        <a href={val.link}>{val.Social}</a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Call To Action */}
      <div className="rn-page-title-area pt--120 pb--120 bg_image bg_image--3">
        <div className="container text-center">
          <h2 className="title theme-gradient">Ready to Be Next?</h2>
          <p className="mt--20">
            If you're building something bold, or stuck trying to, let's talk.
            We work with brands that are ready to scale, evolve, and leave a
            mark.
          </p>
        </div>
      </div>

      {/* Back To Top */}
      <div className="backto-top">
        <ScrollToTop showUnder={160}>
          <FiChevronUp />
        </ScrollToTop>
      </div>

      <div className="rn-contact-us ptb--120 bg_color--5" id="contact">
        <Contact />
      </div>

      <Footer />

      {/* Video Modal Example (optional) */}
      <ModalVideo
        channel="youtube"
        isOpen={isOpen}
        videoId="ZOoVOfieAF8"
        onClose={() => setIsOpen(false)}
      />
    </>
  );
};

export default Clients;
