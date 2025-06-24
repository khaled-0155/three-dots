import { useState } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import logoWhite from "../assets/images/logo/logo-white.png";
import logoBlack from "../assets/images/logo/logo-black.png";

export default function Navbar({ logoColor = "black" }) {
  const logo = logoColor === "black" ? logoBlack : logoWhite;

  const menuTrigger = () => {
    document.querySelector(".header-wrapper")?.classList.toggle("menu-open");
  };

  const closeMenuTrigger = () => {
    document.querySelector(".header-wrapper")?.classList.remove("menu-open");
  };

  return (
    <header className="header-area formobile-menu header--fixed">
      <div className="header-wrapper" id="header-wrapper">
        {/* Logo */}
        <div className="header-left">
          <div className="logo">
            <Link to="/">
              <img
                className="logo-1"
                src={logoWhite}
                alt="Logo"
                style={{ width: "120px", padding: "5px 0", maxWidth: "100%" }}
              />
              <img
                className="logo-2"
                src={logo}
                alt="Logo"
                style={{ width: "80px", padding: "5px 0", maxWidth: "100%" }}
              />
            </Link>
          </div>
        </div>

        {/* Navigation */}
        <div className="header-right">
          <nav className="mainmenunav d-lg-block">
            <ul className="mainmenu">
              <li>
                <Link to="/">Home</Link>
              </li>

              <li className="has-droupdown">
                <Link to="/services">Services</Link>
                <ul className="submenu">
                  <li>
                    <Link to="/services/erp">ERP Systems</Link>
                  </li>
                  <li>
                    <Link to="/services/marketing">Digital Marketing</Link>
                  </li>
                  <li>
                    <Link to="/services/software">Software Solutions</Link>
                  </li>
                </ul>
              </li>

              <li>
                <Link to="/about">About</Link>
              </li>

              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </nav>

          {/* Mobile Menu Icons */}
          <div className="humberger-menu d-block d-lg-none pl--20">
            <span onClick={menuTrigger} className="menutrigger text-white">
              <FiMenu />
            </span>
          </div>
          <div className="close-menu d-block d-lg-none">
            <span onClick={closeMenuTrigger} className="closeTrigger">
              <FiX />
            </span>
          </div>
        </div>
      </div>
    </header>
  );
}
