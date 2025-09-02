import React, { useContext } from "react";
import { BsCCircle } from "react-icons/bs";
import { Themecontext } from "./ThemeChanger";

const Footer = () => {
  const [theme] = useContext(Themecontext);
  return (
    <nav
      className={`navbar fixed-bottom ${
        theme === "light" ? "bg-light text-dark" : "bg-dark text-light"
      }`}
    >
      <div className="container-fluid">
        <span className="mx-auto">
          Copyright <BsCCircle />
          2025 achieversit. All rights Reserved.
        </span>
      </div>
    </nav>
  );
};

export default Footer;
