const About = () => {
  const cardData = [
    {
      title: "Discover New Recipes",
      desc: "Discover new recipes and expand your culinary horizons with Whisked's recipe library. ",
    },
    {
      title: "100s of options",
      desc: "With hundreds of delicious options, you'll never run out of meal ideas.",
    },
    {
      title: "Recipe Recommendations",
      desc: "Whisked simplifies meal planning with personalized recipe suggestions based on your taste profile.",
    },
    {
      title: "Find Recipe you Love",
      desc: "Build your profile and discover recipes you'll love.",
    },
    {
      title: "Stay organized",
      desc: "Stay organized with our grocery list feature and meal planner.",
    },
    {
      title: "Ingredient List",
      desc: "Easily add ingredients and plan your meals for the week to avoid eating out.",
    },
  ];

  return (
    <div id="about" className=" min-h-fit bg-base-200">
      <div className="hero-content flex-row items-start">
        <img
          src="https://images.unsplash.com/photo-1543353071-873f17a7a088?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
          className="max-w-sm rounded-lg shadow-2xl"
        />
        <div className="container">
          <div className="px-10">
            <h1 className="mb-5 text-5xl font-bold">
              Recipes for Every Occasion
            </h1>
            <p className="mb-5">
              With thousands of recipes to choose from, you're sure to find the
              perfect dish for any occasion. From breakfast to dinner, snacks to
              desserts, and everything in between, our recipe library is
              constantly growing and updated with the latest and greatest
              recipes. Browse by ingredient, cuisine, or dietary restrictions to
              find the perfect meal for you.
            </p>
          </div>
          <div className="container w-auto">
            <div className="px-10 grid grid-cols-3 gap-0">
              {cardData.map((data, index) => (
                <div key={index}>
                  <div className="w-full h-full card text-center bg-transparent hover:bg-primary hover:text-primary-content hover:shadow-2xl">
                    <div className="card-body bg-transparent">
                      <h1 className="card-title text-sm mx-auto capitalize font-bold">
                        {data.title}
                      </h1>
                      <p className="text-xs">{data.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
