import React from "react";
import "./index.scss";

const datas = [
  {
    title: "Land Admin",
    copy: "Our team provides full service support, customizing approach based on business needs, augmenting staffing needs, and improving processes with knowledge of software systems.",
  },
  {
    title: "Land Exploration and Production",
    copy: "Our team of dynamic former in-house landmen prioritize client needs, providing title verification, due diligence, regulatory affairs, Lease & ROW negotiation, GIS Mapping, well proposal tracking, and drill schedule management.",
  },
  {
    title: "Asset and Energy Estate Management",
    copy: "We proactively manage mineral owner assets, digitizing, reporting and ensuring timely interest transfer and lease compliance.",
  },
  {
    title: "Software Evaluation and Implementation",
    copy: "We identify your needs and handpick the best in class software solutions, saving you time and money with our expertise in customizing and tailoring technology and process solutions.",
  },
];

function HowDoesItWork() {
  return (
    <div className="how-does-it-work">
      <h2>How does it work?</h2>
      <div className="copy-container">
        {datas.map((data) => {
          return (
            <div className="copy">
              <div>{data.title}</div>
              <div>{data.copy}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default HowDoesItWork;
