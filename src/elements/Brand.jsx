import React, { Component } from "react";

import naddi from "../assets/images/clients/logos/naddi.png";
import avon from "../assets/images/clients/logos/avon.png";
import blue from "../assets/images/clients/logos/blue.png";
import clear from "../assets/images/clients/logos/clear.png";
import court from "../assets/images/clients/logos/court.png";
import croquis from "../assets/images/clients/logos/croquis.png";
import elm from "../assets/images/clients/logos/elm.png";
import flora from "../assets/images/clients/logos/flora.png";
import jeel from "../assets/images/clients/logos/jeel.png";
import jt from "../assets/images/clients/logos/jt.png";
import magic from "../assets/images/clients/logos/magic.png";
import meals from "../assets/images/clients/logos/meals.png";
import munaques from "../assets/images/clients/logos/munaqes.png";
import ringo from "../assets/images/clients/logos/ringo.png";
import stc from "../assets/images/clients/logos/stc.png";
import straumann from "../assets/images/clients/logos/straumann.png";
import taraf from "../assets/images/clients/logos/taraf.png";
import tech from "../assets/images/clients/logos/tech.png";
import zqr from "../assets/images/clients/logos/zqr.png";

const brandLogos = [
  naddi,
  avon,
  blue,
  clear,
  // court,
  croquis,
  elm,
  flora,
  jeel,
  jt,
  magic,
  meals,
  // munaques,
  // ringo,
  stc,
  straumann,
  taraf,
  tech,
  zqr,
];

class Brand extends Component {
  render() {
    const { branstyle } = this.props;
    return (
      <div className="active-light">
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
          {brandLogos.map((logo, index) => (
            <li key={index}>
              <img src={logo} alt={`Brand logo  ${index + 1}`} />
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
export default Brand;
