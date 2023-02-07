const About = () => {
  const cardData = [
    {
      title: "Weeknight Dinners",
      desc: "Whether you're short on time or just don't feel like spending hours in the kitchen, our collection of weeknight dinner recipes has you covered. Quick and easy meals that are packed with flavor and nutrition.",
      img: "https://images.pexels.com/photos/4551176/pexels-photo-4551176.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      title: "Comfort Food",
      desc: "Craving something warm and cozy? Look no further than our collection of comfort food recipes. From classic mac and cheese to hearty stews, we have all your favorite comfort foods, with a healthy twist.",
      img: "https://cdn.pixabay.com/photo/2020/05/22/08/20/breakfast-5204360_960_720.jpg",
    },
    {
      title: "Special Occasions",
      desc: "Impress your guests with our collection of special occasion recipes. From romantic dinners for two to holiday feasts for a crowd, we have something for every celebration.",
      img: "https://cdn.pixabay.com/photo/2013/07/18/08/03/birthday-163362_960_720.jpg",
    },
    {
      title: "Healthy Eating",
      desc: "Eat well and feel good with our collection of healthy eating recipes. We've got a wide range of nutritious meals to suit every taste and lifestyle, including gluten-free, vegan, and low-carb options.",
      img: "https://images.pexels.com/photos/1092730/pexels-photo-1092730.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      title: "Vegetarian & Vegan",
      desc: "Discover a world of delicious, plant-based meals with our collection of vegetarian and vegan recipes. From hearty main courses to mouth-watering sides, you'll find everything you need to enjoy a balanced and satisfying diet.",
      img: "https://cdn.pixabay.com/photo/2017/04/24/22/12/asparagus-2258013_960_720.jpg",
    },
    {
      title: "International Cuisine",
      desc: "Take your taste buds on a global adventure with our collection of international cuisine recipes. From Italian pasta dishes to Asian stir-fries, we've got something to suit every palate and culinary preference.",
      img: "https://cdn.pixabay.com/photo/2017/03/23/21/47/eggs-2169558_960_720.jpg",
    },
  ];

  return (
    <section id="about" className="container">
      <div className="max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8 rounded-3xl shadow-2xl">
        <div className="">
          <div class="hero-content flex-col lg:flex-row-reverse space-y-3 items-start justify-center">
            <img
              src="https://cdn.pixabay.com/photo/2015/08/25/03/50/background-906135_960_720.jpg"
              class="max-w-md rounded-lg shadow-2xl hidden lg:block"
            />
            <div className="flex flex-col space-y-5">
              <div className="mb-5">
                <h2 className="text-3xl sm:text-5xl font-bold">
                  What makes us special
                </h2>

                <p className="mt-4 text-lg sm:text-xl font-light md:font-medium md:text-1xl">
                  At Whisked, we are dedicated to making cooking easy,
                  accessible, and enjoyable for everyone. With our innovative
                  technology and user-friendly design, we have created an app
                  that makes meal planning, grocery shopping, and cooking a
                  breeze.
                </p>
              </div>
              <div>
                <h2 className="text-3xl sm:text-5xl font-semibold">
                  Recipes for Every Occasion
                </h2>

                <p className="mt-4 text-lg md:text-xl font-light">
                  With thousands of recipes to choose from Wh, you're sure to
                  find the perfect dish for any occasion. From breakfast to
                  dinner, snacks to desserts, and everything in between, our
                  recipe library is constantly growing and updated with the
                  latest and greatest recipes. Browse by ingredient, cuisine, or
                  dietary restrictions to find the perfect meal for you.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8 grid grid-cols-1 gap-8 md:mt-16 md:grid-cols-2 md:gap-12 lg:grid-cols-3">
          {cardData.map((item, index) => (
            <div key={index} class="card">
              {/* <figure class="px-10 pt-10"> */}
              <img
                src={item.img}
                alt="Shoes"
                class="rounded-xl shadow-2xl mx-12"
              />
              {/* </figure> */}
              <div class="card-body items-center text-center">
                <h2 class="card-title">{item.title}</h2>
                <p>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
