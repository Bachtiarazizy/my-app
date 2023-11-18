import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./components/header/header";
import Home from "./components/home/home";
import About from "./components/about/about";

const App = () => {
  return (
    <div>
      <Header />;
      <Home />
      <About />
    </div>
  );
};

export default App;
