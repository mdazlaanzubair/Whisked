import { Link } from "react-router-dom";
import ImgGrid from "./ImgGrid";

const Hero = () => {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="flex-col hero-content lg:flex-row-reverse">
        <div className="flex-1 mb-5">
          <ImgGrid />
        </div>
        <div className="flex-1 mb-5">
          <h1 className="mb-5 text-5xl font-bold">
            Whisked – Your Personal Recipe Companion
          </h1>
          <p className="mb-5">
            Cooking delicious meals just got a lot easier with Whisked. Our app
            is the ultimate kitchen companion, offering a wide variety of
            recipes and cooking tools to help you whip up the perfect dish every
            time. Whether you're a seasoned chef or just starting out, Whisked
            has everything you need to create amazing meals.
          </p>
          <Link className="btn btn-primary" to="/recipes">
            Enhance Your Skills
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
