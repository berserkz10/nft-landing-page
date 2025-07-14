/* eslint-disable no-unused-vars */
import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import GlobalStyles from "./styles/GlobalStyles";
import NavBar from "./components/NavBar";
import MainSection from "./components/MainSection";

import "./App.css";

function App() {
  return (
    <>
      <GlobalStyles />
      <NavBar />
      <MainSection/>
    </>
  );
}

export default App;
