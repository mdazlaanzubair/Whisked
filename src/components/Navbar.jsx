import { Link } from "react-router-dom";
import MobileNavbar from "./MobileNavbar";
import DesktopNavbar from "./DesktopNavbar";

const Navbar = () => {
  return (
    <nav className="navbar bg-neutral text-neutral-content rounded-box shadow-2xl">
      <div className="navbar-start">
        <MobileNavbar />
        <DesktopNavbar />
      </div>
      <div className="navbar-center">
        <Link
          to="/"
          className="btn btn-ghost normal-case text-2xl font-fancy font-normal text-neutral-content hover:bg-transparent hover:text-primary"
        >
          Whisked
        </Link>
      </div>
      <div className="navbar-end">
        <Link to="/signup" className="btn btn-primary">
          Join Us
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
