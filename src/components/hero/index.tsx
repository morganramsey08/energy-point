import React from "react";
import Button from "../button/index";
import "./index.scss";

const Hero = () => {
  return (
    <div className="hero-wrapper">
      <div className="scrim"></div>
      <div className="hero-bg"></div>
      <div className="content-container">
        <h1>Data solutions for your business</h1>
        <p>
          We leverage our extensive experience and expertise in each field in
          order to positively impact the bottom line through efficient uses of
          technology, reporting, and process.
        </p>
        <Button href="/contact" xlarge>
          Book a consult
        </Button>
      </div>
    </div>
  );
};

export default Hero;
