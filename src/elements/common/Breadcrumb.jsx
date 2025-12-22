import React from "react";
import { Link } from "react-router-dom";

const Breadcrumb = ({ title, parent, description }) => {
  return (
    <>
      <div
        className="breadcrumb-area rn-bg-color ptb--120 bg_image bg_image--1"
        data-black-overlay="9"
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="breadcrumb-inner pt--100">
                <h2 className="title">{title}</h2>
                {description && <p style={{ color: "#fff" }}>{description}</p>}

                <ul className="page-list">
                  <li className="breadcrumb-item">
                    <Link to="/">Home</Link>
                  </li>

                  {parent && <li className="breadcrumb-item">{parent}</li>}

                  <li className="breadcrumb-item active">{title}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Breadcrumb;
