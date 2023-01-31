import React from "react";
import Blurb from "../../components/blurb";
import Button from "../../components/button";
import Footer from "../../components/footer";
import NavBar from "../../components/nav/index";
import "./index.scss";

const thePoint = [
  {
    title: "JR Talks Unclaimed Property",
    excerpt:
      "Unclaimed Property laws are established by each state and have varying degrees of due diligence requirements. Establishing processes to manage suspended funds can help avoid unanticipated audits, and potentially, steep penalties.",
    link: "https://www.linkedin.com/posts/john-everett-a0231b85_letsgettothepoint-unclaimedproperty-modernlandmanagment-activity-6967856430544543744-W0cR?utm_source=share&utm_medium=member_desktop",
  },
  {
    title: "Renewable Energy Conference",
    excerpt:
      "Energy Point Consulting went on the road to Anaheim for the RE+ Renewable Energy Conference 2022. The team enjoyed the educational and networking opportunities presented there.",
    link: "https://www.linkedin.com/feed/update/urn:li:activity:6980187775996231680/?utm_source=share&utm_medium=member_desktop",
  },
  {
    title: "Energy Point Sponsors NARO",
    excerpt:
      "Donna  joins Michaela Dierinzo, Darrel Lankford, and Lindsay Dick in Tulsa for the NARO - National Association of Royalty Owners Convention. She also spoke at the Sooner Association of Division Order Analysts Seminar.",
    link: "https://www.linkedin.com/posts/donna-king-202b22a7_modernlandmanagement-letsgettothepoint-landdatamanagement-activity-6990805182926249984-iMWo/?utm_source=share&utm_medium=member_desktop",
  },
  {
    title: "Talking Energy Show",
    excerpt:
      "Donna  joins Matthew Hill, Scott Garrison, and Jeremiah Smith and Talking Energy Show to talk about modern energy management. They covered everything from the first oil and gas lease through potential bitcoin royalty payments!",
    link: "https://www.linkedin.com/posts/donna-king-202b22a7_donna-king-of-energy-point-consulting-scott-activity-6847161239706120192-yJEJ/?utm_source=linkedin_share&utm_medium=member_desktop_web",
  },
  {
    title: "Digital Oil and Gas - Interview",
    excerpt:
      "Donna joins Geoffrey Cann for a great conversation regarding the use of technology, kan ban, agile methods and modern land management.",
    link: "https://www.linkedin.com/posts/donna-king-202b22a7_224-interview-with-donna-king-of-energy-activity-6818565083837329408-I0BW/?utm_source=linkedin_share&utm_medium=member_desktop_web",
  },
  {
    title: "State of the Industry",
    excerpt:
      "How is your land team responding to meet internal land management demands? Join Quorum Sr. Manager Rachelle Sutherland and Energy Point Consulting, LLC founder, Donna King for the state of the industry and tips for modern land departments to succeed.",
    link: "https://www.linkedin.com/posts/donna-king-202b22a7_join-our-webcast-on-modern-land-management-activity-6815691629035356160-JutH/?utm_source=linkedin_share&utm_medium=member_desktop_web",
  },
  {
    title: "Fossil Fuel Fridays",
    excerpt:
      "Energy Point Consulting, LLC share their dynamic service and assest management company focused on leveraging technology with industry experience to deliver value to their clients.",
    link: "https://www.linkedin.com/posts/donna-king-202b22a7_fossilfuelfridays-assetmanagement-technology-activity-6793865534162186240-cBMz/?utm_source=linkedin_share&utm_medium=member_desktop_web",
  },
  {
    title: "ATX-ALTA and Quorum",
    excerpt:
      "Hear from Donna King, founder of Energy Point Consulting, LLC, as she shares the technology roadmap to reduce manual workloads, accomplish tasks faster, and increase accuracy through common industry.",
    link: "https://www.linkedin.com/posts/donna-king-202b22a7_see-how-modern-land-management-reduces-manual-activity-6786307057558568961-PD06/?utm_source=linkedin_share&utm_medium=member_desktop_web",
  },
];
function ThePointPage() {
  return (
    <div className="point-page">
      <NavBar internal />
      <div className="content-wrapper">
        <Blurb
          heading="The Point"
          subtext="Energy Point offers a wide selection of technology implementation and land data management services tailored to the Energy industry's land acquisition and data management needs for scalability, forecasting and reporting."
        />
        <div className="news-grid">
          {thePoint.map((article) => {
            return (
              <div className="article" key={article.title}>
                <h3 className="title">
                  <a href={article.link} target="_blank" rel="noreferrer">
                    {article.title}
                  </a>
                </h3>
                <p>{article.excerpt}</p>
                <Button href={article.link}>Read More</Button>
              </div>
            );
          })}
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default ThePointPage;
