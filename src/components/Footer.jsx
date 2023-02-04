import React, { useEffect, useState } from "react";

const Footer = () => {
  const [year, setYear] = useState();

  const currentYear = () => {
    const date = new Date();
    const currentYear = date.getFullYear();
    const nextYear = (currentYear + 1).toString().slice(-2);
    setYear(`${currentYear}-${nextYear}`);
    return;
  };

  useEffect(() => currentYear, []);

  return (
    <footer className="p-4 footer bg-base-300 text-base-content footer-center flex justify-between px-24">
      <div>
        <p>
          Copyright © <span className="font-medium">{year}</span> - All right
          reserved by{" "}
          <a
            className="btn btn-link px-0 font-semibold"
            href="https://github.com/mdazlaanzubair/Whisked"
            title="Source Code"
            alt="Link to Github Repo"
            target="_blank"
          >
            Whisked
          </a>
        </p>
      </div>
      <div>
        <p>
          Crafted -{" "}
          <a
            className="btn btn-link px-0 font-semibold"
            href="https://github.com/mdazlaanzubair"
            title="Muhammad Azlaan Zubair"
            alt="Developer's Github link"
            target="_blank"
          >
            MD Azlaan Zubair
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
