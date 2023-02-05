import { Link } from "react-router-dom";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Navbar = () => {
  return (
    <div className="navbar navbar-center mb-2 shadow-xl bg-neutral text-neutral-content rounded-box">
      <div className="px-2 mx-2 navbar-start">
        <Link to="/">
          <span className="text-lg font-bold uppercase">Whisked</span>
        </Link>
      </div>
      <div className="px-2 mx-2 navbar-end flex">
        <div className="flex items-stretch">
          <Link to="/" className="btn btn-ghost">
            Home
          </Link>
          <AnchorLink href="#about" className="btn btn-ghost">
            About
          </AnchorLink>
          <AnchorLink href="#how-to" className="btn btn-ghost">
            How To
          </AnchorLink>
          <AnchorLink href="#chefs" className="btn btn-ghost">
            Master Chefs
          </AnchorLink>
          <Link to="/recipes" className="btn btn-ghost">
            Recipes
          </Link>
          <Link to="/signup" className="btn btn-primary ml-10">
            Join Whisked
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
