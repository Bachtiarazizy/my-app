import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./components/header/header";
import Home from "./components/home/home";

const App = () => {
  return (
    <div>
      <Header />;
      <Home />
    </div>
  );
};

export default App;
