import React, { Children } from "react";
import classnames from "classnames";
import "./index.scss";

interface ButtonProps {
  text?: string;
  secondary?: boolean;
  transparent?: boolean;
  bordered?: boolean;
  onClick?: React.MouseEventHandler;
  href?: string;
  children?: string;
  xlarge?: boolean;
}

const Button = ({
  text,
  secondary,
  transparent,
  onClick,
  href,
  children,
  xlarge,
}: ButtonProps) => {
  return (
    <div
      className={classnames("button-container", {
        secondary: secondary,
        transparent: transparent,
        xlarge: xlarge,
      })}
    >
      {href ? (
        <a href={href} className="button">
          {children}
        </a>
      ) : (
        <button onClick={onClick} className="button">
          {children}
        </button>
      )}
    </div>
  );
};

export default Button;
