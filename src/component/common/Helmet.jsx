import React, { Component } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";

class PageHelmet extends Component {
  render() {
    return (
      <HelmetProvider>
        <Helmet>
          <title>{this.props.pageTitle} || 3Dots</title>
          <meta
            name="description"
            content="We combine ERP, software development, and data-driven marketing to help businesses move smarter, faster, and stronger."
          />
        </Helmet>
      </HelmetProvider>
    );
  }
}

export default PageHelmet;
