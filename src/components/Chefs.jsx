const Chefs = () => {
  const masterChefs = [
    {
      title: "Austrian-American chef",
      img: "https://www.newidea.com.au/media/104852/wolfhang-phuc.jpg?width=720&center=0.0,0.0",
      name: "Wolfgang Puck",
      desc: "Austrian-Am. chef known for modern French cooking in American kitchens, over 30 restaurants, famously catered Kim Kardashian's wedding.",
    },
    {
      title: "British Chef",
      img: "https://www.newidea.com.au/media/104853/jamie-oliver.jpg?width=720&center=0.0,0.0",
      name: "Jamie Oliver",
      desc: "World-loved British chef, creates simple recipes, activist for disadvantaged youth, 26 cookbooks, 35 TV shows.",
    },
    {
      title: "Scientific Chef",
      img: "https://www.newidea.com.au/media/104854/heston-blumenthal.jpg?width=720&center=0.0,0.0",
      name: "Heston Blumenthal",
      desc: "Famous chef known for black frames, innovative dishes, uses scientific methods in cooking.",
    },
    {
      title: "Spanish Chef",
      img: "https://www.newidea.com.au/media/104855/ferran-adria.jpg?width=720&center=0.0,0.0",
      name: "Ferran Adria",
      desc: "Spanish chef, named world's greatest chef, elBulli named best restaurant in world five times.",
    },
    {
      title: "Most Celebrated Chef",
      img: "https://www.newidea.com.au/media/104856/marco-pierre-white.jpg?width=720&center=0.0,0.0",
      name: "Marco Pierre White",
      desc: "First celebrity chef, British, television personality, restaurateur, youngest chef w/ 3 Michelin stars.",
    },
    {
      title: "Fiery Chef",
      img: "https://www.newidea.com.au/media/104857/gordon-ramsay.jpg?width=720&center=0.0,0.0",
      name: "Gordon Ramsay",
      desc: "Fiery chef famous for temper, star of Hell's Kitchen, MasterChef, Kitchen Nightmares, and Hotel Hell.",
    },
  ];
  return (
    <section id="chefs" className="container">
      <div className="max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8 rounded-3xl shadow-2xl">
        <div className="hero-content flex-col space-y-3 items-start">
          <div className="flex flex-col space-y-5">
            <div className="max-w-2xl">
              <h2 className="text-3xl sm:text-5xl font-bold">Testimonials</h2>

              <p className="mt-4 text-lg sm:text-xl font-light md:font-medium md:text-1xl">
                Don't just take our word for it... Read reviews from our
                customers
              </p>
            </div>
          </div>
        </div>
        <div className="mt-8 grid grid-cols-1 gap-8 md:mt-16 md:grid-cols-2 md:gap-12 lg:grid-cols-3">
          {masterChefs.map((item, index) => (
            <a
              key={index}
              href={`https://www.google.com/search?q=${item.name}+aka+${item.title}+bios`}
              class="group relative block bg-black"
              target="_blank"
            >
              <img
                alt="Developer"
                src={item.img}
                class="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-30"
              />

              <div class="relative p-8">
                <p class="text-sm font-medium uppercase tracking-widest text-primary">
                  {item.title}
                </p>

                <p class="text-2xl font-bold text-primary-content">
                  {item.name}
                </p>

                <div class="mt-64">
                  <div class="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
                    <p class="text-sm text-primary-content">{item.desc}</p>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Chefs;
