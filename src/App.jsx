import Intro from "./components/intro/Intro";
import Portfolio from "./components/portfolio/Portfolio";
import Topbar from "./components/topbar/Topbar";
import Works from "./components/works/Works";
import "./app.scss";
import Testimonials from "./components/testimonials/Testimonials";
import Contact from "./components/contact/Contact";
import { useState } from "react";
import Menu from "./components/menu/Menu";
import "fullpage.js/vendors/scrolloverflow"; // Optional. When using scrollOverflow:true
import ReactFullpage from "@fullpage/react-fullpage";

function App() {
  return (
    <div className="app">
      <Topbar />
      <Menu />
      <div className="section">
        <Intro />
        <Portfolio />
        <Works />
        <Testimonials />
        <Contact />
      </div>
    </div>
  );
}

export default App;
