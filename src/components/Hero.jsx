import bg1 from "../assets/bg1.jpg";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Hero = () => {
  return (
    <section id="home" className="container">
      <div
        className="hero min-h-screen rounded-3xl shadow-2xl"
        style={{
          backgroundImage: `url(${bg1})`,
        }}
      >
        <div className="hero-overlay bg-[#091526] bg-opacity-60 rounded-3xl"></div>
        <div className="hero-content w-full text-center lg:text-left text-neutral-content">
          <div className="max-w-2xl mr-auto px-5">
            <h1 className="mb-10 text-3xl sm:text-5xl lg:font-fancy">
              Whisked – Your Personal Recipe Companion
            </h1>
            <p className="mb-5 text-lg sm:text-xl font-light md:font-medium md:text-1xl">
              It is even better than an expensive cookery book. Having thousands
              of recipes to choose from, you're sure to find the perfect dish
              for any occasion.
            </p>
            <p className="mb-5 text-lg md:text-xl font-light">
              Cooking delicious meals just got a lot easier with Whisked. Our
              app is the ultimate kitchen companion, offering a wide variety of
              recipes and cooking tools to help you whip up the perfect dish
              every time.
            </p>
            <AnchorLink href="#about" className="btn btn-primary btn-wide">
              Try it out!
            </AnchorLink>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
