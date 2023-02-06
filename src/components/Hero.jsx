import { Link } from "react-router-dom";
import ImgGrid from "./ImgGrid";

const Hero = () => {
  return (
    <section id="home" className="container bg-green-500">
      <div className="grid gap-4 grid-cols-2 md:grid-cols-4">
        <div className="col-span-2 md:col-span-3 bg-red-600 gap-4">
          <h1 className="text-4xl md:text-5xl font-bold bg-yellow-400">
            Whisked – Your Personal Recipe Companion
          </h1>
        </div>
        <div className="col-span-2 bg-blue-600 md:col-span-2 md:col-start-1">
          <p className="mb-3 text-3xl row-start-2 md:text-lg self-center">
            It is even better than an expensive cookery book.
          </p>
          <p className="mb-3 text-2xl row-start-2 md:text-lg self-center">
            With thousands of recipes to choose from, you're sure to find the
            perfect dish for any occasion.
          </p>
        </div>
        <div className="col bg-blue-600 aspect-square">
          <p>
            Cooking delicious meals just got a lot easier with Whisked. Our app
            is the ultimate kitchen companion, offering a wide variety of
            recipes and cooking tools to help you whip up the perfect dish every
            time.
          </p>
          <Link className="btn btn-primary" to="/recipes">
            Enhance Your Skills
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
