import React, { useState, useEffect } from "react";
import classnames from "classnames";
import { slide as Menu } from "react-burger-menu";
import { Link } from "react-router-dom";
import colorLogo from "./img/logo-color.svg";
import whiteLogo from "./img/logo-white.svg";
import "./index.scss";

interface navProps {
  internal?: Boolean;
}

const NavBar = ({ internal }: navProps) => {
  const [yOffset, setYOffset] = useState(window.pageYOffset);
  const [visible, setVisible] = useState(true);
  const [insideThePage, setInsideThePage] = useState(false);
  const [screenSize, setScreenSize] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  });

  function handleScroll() {
    const currentYOffset = window.pageYOffset;
    setInsideThePage(currentYOffset > 80);
    setYOffset(currentYOffset);
    setVisible(yOffset > currentYOffset);
  }

  function handleResize() {
    setScreenSize(window.innerWidth);
  }

  const navigation = (
    <>
      <Link className="nav-link" to="/">
        Home
      </Link>
      <Link className="nav-link" to="/team">
        The Team
      </Link>
      <Link className="nav-link" to="/consulting">
        Consulting
      </Link>
      <Link className="nav-link" to="/services">
        Services
      </Link>
      <Link className="nav-link" to="/the-point">
        The Point
      </Link>
      <Link className="nav-link" to="/contact">
        Contact
      </Link>
    </>
  );

  return (
    <div
      className={classnames("nav-wrapper", {
        hidden: !visible,
        "solid-bg": insideThePage,
        "internal-page": internal,
      })}
    >
      {screenSize < 900 && (
        <>
          <Menu
            disableOverlayClick
            width={"100%"}
            right
            className="hamburger-menu"
          >
            {navigation}
          </Menu>
          <div id="page-wrap"></div>
        </>
      )}
      <div className="nav-container">
        <span className="logo">
          <a href="/">
            {insideThePage || internal ? (
              <img src={colorLogo} alt="EnergyPoint LLC" />
            ) : (
              <img src={whiteLogo} alt="EnergyPoint LLC" />
            )}
          </a>
        </span>
        {screenSize > 900 && <nav>{navigation}</nav>}
      </div>
    </div>
  );
};

export default NavBar;
