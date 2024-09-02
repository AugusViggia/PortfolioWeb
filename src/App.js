import React from "react";
import NavBar from "./components/NavBar/NavBar";
import Particles from "./components/Particles/Particles";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header/Header";
import AboutMe from "./screens/AboutMe/AboutMe";
import Technologies from "./screens/Technologies/Technologies";
import Portfolio from "./screens/Portfolio/Portfolio";
import ContactMe from "./screens/ContactMe/ContactMe";


export function App() {
  return (
    <div className="App">
      <div style={{ position: "relative", zIndex: 1 }}>
        <NavBar />
        <Header />
        <AboutMe />
        <Technologies />
        <Portfolio />
        <ContactMe />
      </div>
      <Particles />
    </div>
  );
};

export default App;
