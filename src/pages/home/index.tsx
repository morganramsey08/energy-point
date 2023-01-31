import React from "react";
import CalloutBox from "../../components/callout-box";
import Footer from "../../components/footer";
import Hero from "../../components/hero";
import HowDoesItWork from "../../components/how-does-it-work";
import NavBar from "../../components/nav/index";
import Stats from "../../components/stats";
import calloutImage from "./img/book-consult-callout.svg";
import "./index.scss";

function HomePage() {
  return (
    <div className="home-page">
      <NavBar />
      <Hero />
      <Stats />
      <HowDoesItWork />
      <CalloutBox
        header="Book a consult with us today"
        copy="We leverage our extensive experience and expertise in each field in order to positively impact the bottom line through efficient uses of technology, reporting, and process."
        ctaCopy="Click to Book"
        image={calloutImage}
      />
      <Footer />
    </div>
  );
}
export default HomePage;
