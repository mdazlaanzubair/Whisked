import { Link } from "react-router-dom";
import AppLogo from "../assets/app-logo.png";
import Navbar from "./Navbar";

const Header = ({ setTheme, theme }) => {
  // themes list
  const themes = [
    {
      title: "Corporate",
      slug: "light",
    },
    {
      title: "Lo-Fi",
      slug: "synthwave",
    },
    {
      title: "Olive",
      slug: "emerald",
    },
    {
      title: "Fancy",
      slug: "halloween",
    },
  ];

  const themeSwitch = (e) => setTheme(e.target.value);

  return (
    <header>
      <div className="flex w-full justify-end px- items-center py-2">
        <h3 className="font-semibold text-sm mx-3">Theme</h3>
        <select
          className="select select-bordered select-dark w-auto select-xs max-w-xs border-gray-100 focus:border-gray-300 outline-none focus:outline-none"
          onChange={themeSwitch}
          defaultValue={theme}
        >
          <option disabled="disabled">Choose Theme</option>
          {themes.map((item, index) => (
            <option
              key={index}
              value={item.slug}
              className="capitalize"
              defaultValue={item.slug === theme ? theme : item.slug}
            >
              {item.title}
            </option>
          ))}
        </select>
      </div>
      <Navbar />
    </header>
  );
};

export default Header;
