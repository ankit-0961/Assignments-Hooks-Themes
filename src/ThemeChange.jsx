import React, { useContext } from "react";
import { Themecontext } from "./ThemeChanger";

const ThemeChange = () => {
  const [theme] = useContext(Themecontext);
  return (
    <div
      style={{ height: "450px" }}
      className={`p-4 ${
        theme === "light" ? " bg-light text-dark" : "bg-dark text-light"
      }`}
    >
      <h2>Welcome to the Theme Switcher App !</h2>
      <p>This is the content area.The theme is currently {theme}.</p>
    </div>
  );
};

export default ThemeChange;
