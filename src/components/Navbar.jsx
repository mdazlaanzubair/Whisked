import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar mb-2 shadow-xl bg-neutral text-neutral-content rounded-box">
      <div className="px-2 mx-2 navbar-start">
        <Link to="/">
          <span className="text-lg font-bold uppercase">Whisked</span>
        </Link>
      </div>
      <div className="px-2 mx-2 navbar-center flex">
        <div className="flex items-stretch">
          <Link to="/recipes" className="btn btn-ghost btn-sm rounded-btn">
            Recipes
          </Link>
        </div>
      </div>
      <div className="navbar-end">
        <Link to="/signin" className="mx-2 btn btn-ghost">
          Signin
        </Link>
        <Link to="/signup" className="mx-2 btn btn-primary">
          Signup
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
