import { useState } from "react";
import "./App.css";
import ThemeChange from "./ThemeChange";
import Footer from "./Footer";
import Navbar from "./Navbar";
import ThemeChanger from "./ThemeChanger";

function App() {
  return (
    <>
      <Navbar />
      <ThemeChange />
      <Footer />
      {/* <ThemeChanger /> */}
    </>
  );
}

export default App;
