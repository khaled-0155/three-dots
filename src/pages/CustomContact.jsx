import GoogleMapReact from "google-map-react";
import { FiChevronUp, FiHeadphones, FiMail, FiMapPin } from "react-icons/fi";
import ScrollToTop from "react-scroll-up";
import PageHelmet from "../component/common/Helmet";
import Footer from "../component/footer/Footer";
import Navbar from "../custom-component/Navbar";
import ContactTwo from "../elements/contact/ContactTwo";

const AnyReactComponent = ({ text }) => <div>{text}</div>;

const CustomContact = () => {
  const center = { lat: 59.95, lng: 30.33 };
  const zoom = 11;

  return (
    <>
      <PageHelmet pageTitle="Contact" />
      <Navbar />

      {/* Breadcrumb */}
      <div
        className="rn-page-title-area pt--120 pb--190 bg_image bg_image--17"
        data-black-overlay="9"
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="rn-page-title text-center pt--100">
                <h2 className="title theme-gradient">Contact With Us</h2>
                <p>
                  Ready to turn your vision into a scalable digital reality?
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Info */}
      <div className="rn-contact-top-area ptb--120 bg_color--5">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-6 col-12 mt_mobile--50">
              <div className="rn-address">
                <div className="icon">
                  <FiMail />
                </div>
                <div className="inner">
                  <h4 className="title">Email Address</h4>
                  <p>
                    <a href="mailto:info@the3dots.org">info@the3dots.org</a>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6 col-12">
              <div className="rn-address">
                <div className="icon">
                  <FiHeadphones />
                </div>
                <div className="inner">
                  <h4 className="title">Contact With Phone Number</h4>
                  <p>
                    <a href="tel:+966537556518">+966 537 556 518</a>
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-6 col-12 mt_md--50 mt_sm--50">
              <div className="rn-address">
                <div className="icon">
                  <FiMapPin />
                </div>
                <div className="inner">
                  <h4 className="title">Location</h4>
                  <p>
                    Building No. 3940, Prince Saud Al Faisal Ibn Abdulaziz
                    Street
                  </p>
                  <p>Ar Rawdah District, Jeddah 23433</p>
                  <p>Kingdom of Saudi Arabia</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Form */}
      <div className="rn-contact-page ptb--120 bg_color--1">
        <ContactTwo />
      </div>

      {/* Map Section */}
      <div className="rn-contact-map-area position-relative">
        <div style={{ height: "650px", width: "100%" }}>
          <GoogleMapReact defaultCenter={center} defaultZoom={zoom}>
            <AnyReactComponent
              lat={21.5640546}
              lng={39.1687836}
              text="My Marker"
            />
          </GoogleMapReact>
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

export default CustomContact;
