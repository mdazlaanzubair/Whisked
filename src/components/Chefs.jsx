const Chefs = () => {
  const masterChefs = [
    {
      img: "https://www.newidea.com.au/media/104852/wolfhang-phuc.jpg?width=720&center=0.0,0.0",
      name: "Wolfgang Puck",
      desc: "Austrian-Am. chef known for modern French cooking in American kitchens, over 30 restaurants, famously catered Kim Kardashian's wedding.",
    },
    {
      img: "https://www.newidea.com.au/media/104853/jamie-oliver.jpg?width=720&center=0.0,0.0",
      name: "Jamie Oliver",
      desc: "World-loved British chef, creates simple recipes, activist for disadvantaged youth, 26 cookbooks, 35 TV shows.",
    },
    {
      img: "https://www.newidea.com.au/media/104854/heston-blumenthal.jpg?width=720&center=0.0,0.0",
      name: "Heston Blumenthal",
      desc: "Famous chef known for black frames, innovative dishes, uses scientific methods in cooking.",
    },
    {
      img: "https://www.newidea.com.au/media/104855/ferran-adria.jpg?width=720&center=0.0,0.0",
      name: "Ferran Adria",
      desc: "Spanish chef, named world's greatest chef, elBulli named best restaurant in world five times.",
    },
    {
      img: "https://www.newidea.com.au/media/104856/marco-pierre-white.jpg?width=720&center=0.0,0.0",
      name: "Marco Pierre White",
      desc: "First celebrity chef, British, television personality, restaurateur, youngest chef w/ 3 Michelin stars.",
    },
    {
      img: "https://www.newidea.com.au/media/104857/gordon-ramsay.jpg?width=720&center=0.0,0.0",
      name: "Gordon Ramsay",
      desc: "Fiery chef famous for temper, star of Hell's Kitchen, MasterChef, Kitchen Nightmares, and Hotel Hell.",
    },
  ];
  return (
    <div className="min-h-fit bg-base-200">
      <div className="flex-col hero-content lg:flex-row-reverse">
        <div>
          <h1 className="mb-2 text-5xl font-bold">Top Chefs</h1>
          <h3 className="mb-5 text-xl font-normal">
            Aspiring & Promising Chefs in the Culinary Industry
          </h3>

          <div className="mb-5">
            <div className="container px-5 py-2 mx-auto lg:py-2 lg:px-5">
              <div className="flex flex-wrap -m-1 md:-m-2">
                {masterChefs.map((chef, index) => (
                  <div className="flex flex-wrap w-1/3 p-1/3" key={index}>
                    <a
                      href={`https://www.google.com/search?q=Master+Chef+${chef.name}`}
                      target="_blank"
                    >
                      <div className="card text-center hover:border-primary hover:border-2">
                        <figure className="px-10 py-10">
                          <img
                            src={chef.img}
                            className="rounded-xl shadow-xl"
                          />
                        </figure>
                        <div className="card-body bg-transparent">
                          <h2 className="text-2xl font-bold text-center">
                            {chef.name}
                          </h2>
                          <p>{chef.desc}</p>
                        </div>
                      </div>
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chefs;
