import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { Link } from "react-router-dom";

const DesktopNavbar = () => {
  return (
    <ul className="hidden lg:menu lg:menu-horizontal lg:p-1">
      <li>
        <AnchorLink
          href="#home"
          className="hover:text-primary hover:bg-transparent border-b-2 border-transparent hover:border-primary rounded-none"
        >
          Home
        </AnchorLink>
      </li>
      <li>
        <AnchorLink
          href="#about"
          className="hover:text-primary hover:bg-transparent border-b-2 border-transparent hover:border-primary rounded-none"
        >
          About
        </AnchorLink>
      </li>
      <li>
        <AnchorLink
          href="#recipes"
          className="hover:text-primary hover:bg-transparent border-b-2 border-transparent hover:border-primary rounded-none"
        >
          Recipes
        </AnchorLink>
      </li>
      <li>
        <AnchorLink
          href="#chefs"
          className="hover:text-primary hover:bg-transparent border-b-2 border-transparent hover:border-primary rounded-none"
        >
          Testimonial
        </AnchorLink>
      </li>
    </ul>
  );
};

export default DesktopNavbar;
