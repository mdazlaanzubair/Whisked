import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { Link } from "react-router-dom";

const DesktopNavbar = () => {
  return (
    <ul className="hidden lg:menu lg:menu-horizontal lg:px-1">
      <li>
        <AnchorLink className="btn" href="#about">
          About
        </AnchorLink>
      </li>
      <li>
        <AnchorLink className="btn" href="#how-to">
          How to
        </AnchorLink>
      </li>
      <li>
        <AnchorLink className="btn" href="#chefs">
          Master Chefs
        </AnchorLink>
      </li>
      <li>
        <Link type="button" className="btn" to="/recipes">
          Recipes
        </Link>
      </li>
    </ul>
  );
};

export default DesktopNavbar;
