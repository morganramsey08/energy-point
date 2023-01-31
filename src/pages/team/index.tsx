import React from "react";
import NavBar from "../../components/nav/index";
import "./index.scss";
import donnaKing from "./img/donna-king.jpg";
import johnRoss from "./img/john-ross-everett.jpg";
import michaelaDierinzo from "./img/michaela-dierinzo.jpg";
import tracyLongcrier from "./img/tracy-longcrier.jpg";
import Footer from "../../components/footer";

const Team = [
  {
    name: "Donna King",
    title: "Founder",
    bio: "<p>Donna King founded Energy Point to serve a niche in the asset management services market. Leveraging industry skills and a deliverable focused business model, Donna leads the company in delivering value to its clients through high quality services, modern data management and creative service solutions. </p><p>Most recently, Donna served at Flywheel Energy, where she managed its Land, Revenue, and Foundational Initiative teams to increase throughput, value and streamline processes.</p><p>Donna started her 16+ year career at Chesapeake Energy, where she led a team that managed Chesapeake’s division order management in several business units. She later owned and managed a land services company for four years prior to joining Flywheel. Donna obtained her bachelor’s degree at Southern Nazarene University. </p><p>Donna has three darling children and enjoys the sunshine, reading, audiobooks and running.</p>",
    pic: donnaKing,
  },
  {
    name: "John Everett",
    title: "Vice President of Land and  Business Development",
    bio: "<p>John “JR” Everett is serving as the Vice President of Land and Business Development & brings 15 years of experience in Land E&P, managing and developing key portfolio assets for a publicly traded Fortune 500 company and a large private equity investment group.</p><p> JR has extensive experience in several basins, including Marcellus, Anadarko, Eagle Ford, Permian and Delaware across the US. He was appointed as a Land Representative to serve on multiple best practice committees to develop, streamline and implement workflows to increase interdepartmental communication between the Land department and Business Unit divisions as well as worked closely with IT teams to develop software to improve management of the land assets.</p><p>He was also a lead member of Owner Outreach Programs, where he led a series of informational meetings educating the public on current law, division of interest, and future drilling development. JR’s broad background in Land E&P, land systems, data management, reporting, operations, and acquisitions and divestitures, brings a unique perspective and advantage for clients to his role at Energy Point.</p>",
    pic: johnRoss,
  },
  {
    name: "Michaela Dierinzo",
    title: "Director of Operations",
    bio: "<p>Michaela Dierinzo joined Energy Point in July 2021 with 10 years of experience in the Oil & Gas Industry. Prior to joining Energy Point, Michaela held a variety of leadership roles in Land Administration at ConocoPhillips and has extensive experience with land system conversion and project leadership.</p>",
    pic: michaelaDierinzo,
  },
  {
    name: "Tracy Longcrier ",
    title: "Office Manager",
    bio: "<p>Tracy joined Energy Point in June of 2021 after 14 years in education. Prior to joining Energy Point, Tracy held various administrative roles at Miami Public Schools. Tracy is skilled in managing vendor and contractor relationships and has brought her breadth of experience to the energy industry.</p>",
    pic: tracyLongcrier,
  },
];

function TeamPage() {
  return (
    <div className="team-page">
      <NavBar internal />
      <div className="content-wrapper">
        <h1>Our team of creators and innovators.</h1>
        <p className="subtext">
          Energy Point's team is skilled, diverse and experienced to help
          businesses grow.
        </p>
        {Team.map((member) => {
          return (
            <div className="team-member" key={member.name}>
              <div className="bio-pic">
                <img src={member.pic} alt={member.name} />
              </div>
              <div className="copy">
                <span className="name">{member.name}</span>
                <span className="title">{member.title}</span>
                <div
                  className="bio"
                  dangerouslySetInnerHTML={{ __html: member.bio }}
                />
              </div>
            </div>
          );
        })}
      </div>
      <Footer />
    </div>
  );
}
export default TeamPage;
