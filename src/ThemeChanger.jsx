import React, { createContext, useState } from "react";

export const Themecontext = createContext();

const ThemeChanger = ({ children }) => {
  const [theme, setTheme] = useState("light");

  const themeHandler = () => {
    setTheme((prestate) => (prestate == "light" ? "dark" : "light"));
  };
  return (
    <Themecontext.Provider value={[theme, themeHandler]}>
      {children}
    </Themecontext.Provider>
  );
};

export default ThemeChanger;
