import { Link } from "react-router-dom";

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
          <Link to="/recipes" className="btn btn-ghost rounded-btn">
            Recipes
          </Link>
          <Link to="/signin" className="btn btn-ghost rounded-btn">
            Signin
          </Link>
          <Link to="/signup" className="btn btn-ghost rounded-btn">
            Signup
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
