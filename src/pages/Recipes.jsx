import RecipesGrid from "../components/RecipesGrid";

const Recipes = () => {
  return (
    <section id="">
      <div className="hero min-h-fit py-10">
        <div className="text-center hero-content">
          <div className="max-w-lg">
            <h1 className="mb-5 text-5xl font-bold font-fancy text-gradient-primary-secondary">
              It is even better than an expensive cookery book
            </h1>
            <p className="mb-5 text-2xl">
              Learn how to make your favorite restaurant’s dishes.
            </p>
            <div className="form-control">
              <div className="flex space-x-2">
                <input
                  type="text"
                  placeholder="I want to make..."
                  className="w-full input input-primary border-2 border-base-200 focus:border-primary focus:outline-none rounded-3xl focus:shadow-2xl"
                />
                <button className="btn btn-primary btn-circle border-0 hover:shadow-2xl">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    class="w-5 h-5"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="hero min-w-full p-0">
        <RecipesGrid />
      </div>
    </section>
  );
};

export default Recipes;
