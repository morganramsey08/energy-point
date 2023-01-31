import React, { useState } from "react";
import NavBar from "../../components/nav/index";
import "./index.scss";
import Footer from "../../components/footer";
import Blurb from "../../components/blurb";
import Stats from "../../components/stats";
import classnames from "classnames";
import landAdmin from "./img/land-administration.svg";
import landExplore from "./img/land-exploration.svg";
import assetManagement from "./img/asset-management.svg";
import softwareEvaluation from "./img/software-evaluation.svg";

import softwareSystems from "./img/software-systems.svg";
import softwareIntegration from "./img/software-integration.svg";
import dataReporting from "./img/data-reporting.svg";
import bestPractices from "./img/best-practices.svg";

import calloutImage from "../home/img/book-consult-callout.svg";
import CalloutBox from "../../components/callout-box";

const consultingServices = [
  {
    icon: landAdmin,
    title: "Land Administration",
    copy: "Our team of experienced division order analysts, lease records analysts and land analysts provide full service support. We customize our approach based on business needs and can leverage our team to augment temporary staffing needs, owner relations services, data cleanse projects, as well as provide long term day to day operations support. Our team’s vast knowledge of the many different software systems and reporting platforms improve processes and create efficiencies.",
  },
  {
    icon: landExplore,
    title: "Land Exploration and Production",
    copy: "Our team of dynamic former in-house landmen prioritize a ‘client first’ mentality. From title verifications, due diligence projects, regulatory affairs, Lease & ROW negotiations, GIS Mapping, well proposals and tracking and drill schedule management. Our experienced team of landmen will work to meet all of your land needs, the right tool for the right job.",
  },
  {
    icon: assetManagement,
    title: "Asset and Energy Estate Management",
    copy: "We offer proactive management of private mineral owner assets. Digitally organize and capture land, production and accounting data, create reporting mechanisms in order to give peace of mind to our mineral owners that their assets are being actively managed, reconciled and monetized. We leverage our team and network to work with operators to transfer interests timely, ensure lease terms are met, and any suspended funds are released.",
  },
  {
    icon: softwareEvaluation,
    title: "Software Evaluation & Implementation",
    copy: "We are software system and reporting platform agnostic. We identify your needs and then hand select the best in class solutions so that your software is right for you and doesn’t leave you wanting more, saving you time and money. Let our expertise go to work for you, we have the ability to customize and tailor technology and process solutions regardless of size or complexity. Good data in equals good data out, better business decisions and higher return on investment.",
  },
];

const experienceServices = [
  {
    icon: softwareSystems,
    title: "Software Systems",
    copy: "The team has 'hands on' knowledge of all of the energy software options on today's market such as Quorum, W Energy, P2 and Enertia. We have worked with each of these platforms from design, to implementation and maintenance.",
  },
  {
    icon: softwareIntegration,
    title: "Software Implementation & Integration",
    copy: "Our deep industry experience enables our team to provide insight and guidance to stay on track with software and reporting implementations as well as identify and evaluate associated data risks. This allows for best in class solutions and innovation.",
  },
  {
    icon: dataReporting,
    title: "Data Management & Reporting",
    copy: "Our data savvy team provides our clients with the right tools to capture Key Performance Indicators (KPIs), quality controls, and the ability to connect real time data. This allows our clients to remain nimble, accurate, and agile in their decision making process.",
  },
  {
    icon: bestPractices,
    title: "Best Practices",
    copy: "We do not look for the bias or the common practice but rather for the most efficient, effective and affordable solution for all parties. Our team is compiled of industry leaders and experts who have developed and implemented best practice solutions across various organization sizes from small private equity to large public corporations.",
  },
];

const TeamPage = () => {
  const [tab, setTab] = useState("consulting");

  const consultingServicesComponent = (
    <>
      {consultingServices.map((service) => {
        return (
          <div
            className={classnames("service", {
              active: tab === "consulting",
            })}
            key={service.title}
          >
            <div className="icon-wrapper">
              <img src={service.icon} alt={service.title} />
            </div>
            <h3>{service.title}</h3>
            <p>{service.copy}</p>
          </div>
        );
      })}
    </>
  );

  const experienceServicesComponent = (
    <>
      {experienceServices.map((service) => {
        return (
          <div
            className={classnames("service", {
              active: tab === "experience",
            })}
            key={service.title}
          >
            <div className="icon-wrapper">
              <img src={service.icon} alt={service.title} />
            </div>
            <h3>{service.title}</h3>
            <p>{service.copy}</p>
          </div>
        );
      })}
    </>
  );

  return (
    <div className="services-page">
      <NavBar internal />
      <div className="content-wrapper">
        <Blurb
          heading="Ready to use Energy Point?"
          subtext="We are a consulting company that partners with our clients to define problems and provide solutions for energy land data management technology and process. "
        />
        <div className="tabs">
          <ul className="tab-switch">
            <li
              className={classnames({
                active: tab === "consulting",
              })}
              onClick={() => setTab("consulting")}
            >
              Consulting
            </li>
            <li
              className={classnames({
                active: tab === "experience",
              })}
              onClick={() => setTab("experience")}
            >
              Experience
            </li>
          </ul>
          <div className="tab-container">
            {tab === "consulting" && consultingServicesComponent}
            {tab === "experience" && experienceServicesComponent}
          </div>
        </div>
        <Stats />
        <CalloutBox
          header="Book a consult with us today"
          copy="We leverage our extensive experience and expertise in each field in order to positively impact the bottom line through efficient uses of technology, reporting, and process."
          ctaCopy="Click to Book"
          image={calloutImage}
        />
      </div>
      <Footer />
    </div>
  );
};
export default TeamPage;
