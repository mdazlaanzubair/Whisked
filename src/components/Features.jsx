const Features = () => {
  const whiskedFeatures = [
    "Learn new recipes",
    "Experiment with food",
    "Make you own recipes by adding more to it",
    "Know nutrition facts",
    "Get cooking tips",
  ];
  return (
    <div id="how-to" className="min-h-fit bg-base-200">
      <div className="flex-col hero-content lg:flex-row-reverse">
        <img
          src="https://images.unsplash.com/photo-1598762888384-ef5fd4345ef7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872&q=80"
          className="max-w-sm rounded-lg shadow-2xl"
        />
        <div>
          <h1 className="mb-5 text-5xl font-bold">
            Step-by-Step Cooking Instructions
          </h1>

          <p className="mb-5">
            Whisked takes the guesswork out of cooking with step-by-step
            instructions for each recipe. Follow along with our detailed
            instructions and cooking tips, and you'll be able to create
            delicious meals like a pro. Plus, our app even keeps track of where
            you are in each recipe, so you never have to worry about losing your
            place.
          </p>

          <ul className="menu menu-normal w-auto py-3 bg-transparent">
            <li>
              <h1 className="text-xl font-bold text-primary">
                Improve Your Culinary Skills
              </h1>
            </li>
            {whiskedFeatures.map((recipe, index) => (
              <li className="border-l-4 hover:border-primary" key={index}>
                <a>{recipe}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Features;
