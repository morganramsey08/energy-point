import React from "react";
import "./index.scss";

const stats = [
  { number: 200, stat: "satisfied Clients" },
  { number: "613m", stat: "resolved unclaimed property" },
  { number: 29, stat: "full time employees" },
  { number: "2100+", stat: "Completed projects" },
];
function Stats() {
  return (
    <div className="stats">
      {stats.map((stat) => {
        return (
          <div className="stat">
            <div>{stat.number}</div>
            <div>{stat.stat}</div>
          </div>
        );
      })}
    </div>
  );
}
export default Stats;
