import { useState } from "react";

// react router
import { BrowserRouter, Routes, Route } from "react-router-dom";

// components
import Home from "./pages/Home";
import Recipes from "./pages/Recipes";
import Header from "./components/Header";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import Footer from "./components/Footer";
import JumpToTop from "./components/JumpToTop";

function App() {
  // list of routes
  const routes_list = [
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/recipes",
      element: <Recipes />,
    },
  ];

  // themes of application
  const [theme, setTheme] = useState("light");

  return (
    <div className="App" data-theme={theme}>
      <div className="container mx-auto font-default p-5">
        <BrowserRouter>
          <Header setTheme={setTheme} theme={theme} />
          <div className="container">
            <Routes>
              {routes_list.map((item, index) => (
                <Route
                  exact
                  path={item.path}
                  element={item.element}
                  key={index}
                />
              ))}
            </Routes>
          </div>
          <Footer />
          <JumpToTop />
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
