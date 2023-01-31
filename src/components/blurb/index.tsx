import React from "react";
import "./index.scss";
import classnames from "classnames";

interface blurbProps {
  heading: string;
  subtext?: string;
  blurbClass?: string;
}

const Blurb = ({ heading, subtext, blurbClass }: blurbProps) => {
  return (
    <div
      className={classnames("blurb-wrapper", {
        blurbClass: blurbClass,
      })}
    >
      <h2>{heading}</h2>
      <p className="subtext">{subtext}</p>
    </div>
  );
};

export default Blurb;
