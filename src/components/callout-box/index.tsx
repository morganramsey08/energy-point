import React from "react";
import "./index.scss";
import Button from "../button/index";

interface dataProps {
  header?: string;
  copy?: string;
  ctaCopy?: string;
  image?: string;
}

const CalloutBox = ({ header, copy, ctaCopy, image }: dataProps) => {
  return (
    <div className="callout-box">
      <div className="wrapper">
        <div className="left">
          <h2>{header}</h2>
          <p>{copy}</p>
          <Button href="/contact" secondary>
            {ctaCopy}
          </Button>
        </div>
        <div className="right">
          <img src={image} alt="Header" />
        </div>
      </div>
    </div>
  );
};
export default CalloutBox;
