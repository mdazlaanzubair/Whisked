import AnchorLink from "react-anchor-link-smooth-scroll";
import { Link } from "react-router-dom";

const MobileNavbar = () => {
  return (
    <div className="dropdown visible lg:hidden">
      <label tabIndex={0} className="btn btn-ghost btn-circle">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16M4 18h7"
          />
        </svg>
      </label>
      <ul
        tabIndex={0}
        className=" menu menu-compact dropdown-content mt-3 p-2 shadow-2xl bg-neutral rounded-box w-52"
      >
        <li>
          <AnchorLink href="#about">About</AnchorLink>
        </li>
        <li>
          <AnchorLink href="#how-to">How to</AnchorLink>
        </li>
        <li>
          <AnchorLink href="#chefs">Master Chefs</AnchorLink>
        </li>
        <li>
          <Link to="/recipes">Recipes</Link>
        </li>
      </ul>
    </div>
  );
};

export default MobileNavbar;
