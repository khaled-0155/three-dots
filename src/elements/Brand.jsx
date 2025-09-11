import React, { Component } from "react";

import brand1 from "../assets/images/brand/brand-01.png";
import brand2 from "../assets/images/brand/brand-02.png";
import brand3 from "../assets/images/brand/brand-03.png";
import brand4 from "../assets/images/brand/brand-04.png";
import brand5 from "../assets/images/brand/brand-05.png";
import brand6 from "../assets/images/brand/brand-06.png";

class Brand extends Component {
  render() {
    const { branstyle } = this.props;
    return (
      <>
        <h2
          style={{ color: "#fff", textAlign: "center", marginBottom: "30px" }}
        >
          Our Clients
        </h2>
        <p style={{ color: "#fff", textAlign: "center", marginBottom: "50px" }}>
          We are proud to work with a diverse range of clients, from startups to
          established enterprises, helping them achieve their digital goals.
        </p>
        <ul className={`brand-style-2`}>
          <li>
            <img src={brand1} alt="Logo Images" />
          </li>
          <li>
            <img src={brand2} alt="Logo Images" />
          </li>
          <li>
            <img src={brand3} alt="Logo Images" />
          </li>
          <li>
            <img src={brand4} alt="Logo Images" />
          </li>
          <li>
            <img src={brand5} alt="Logo Images" />
          </li>
          <li>
            <img src={brand6} alt="Logo Images" />
          </li>
        </ul>
      </>
    );
  }
}
export default Brand;
