import PortfolioList from "../portfolioList/PortfolioList";
import "./portfolio.scss";
import { useState } from "react";
export default function Portfolio() {
  const [selected, setSelected] = useState("feature");
  const list = [
    { id: "feature", title: "Feature" },
    { id: "web", title: "web App" },
    { id: "video", title: "Video Edits" },
    { id: "design", title: "UX/UI designer" },
    { id: "languages", title: "Java C/C++  " },
    { id: "content", title: "Content  " },
  ];
  return (
    <div className="portfolio" id="portfolio">
      <h1>Portfolio</h1>
      <ul>
        {list.map((item) => (
          <PortfolioList
            title={item.title}
            active={selected === item.id}
            setSelected={setSelected}
            id={item.id}
          />
        ))}
      </ul>
      <div className="container">
        <div className="item">
          <img src="assets/colour.jpg" alt="" />
          <h3>Banking App</h3>
        </div>
        <div className="item">
          <img src="assets/colour.jpg" alt="" />
          <h3>Banking App</h3>
        </div>
        <div className="item">
          <img src="assets/colour.jpg" alt="" />
          <h3>Banking App</h3>
        </div>
        <div className="item">
          <img src="assets/colour.jpg" alt="" />
          <h3>Banking App</h3>
        </div>
        <div className="item">
          <img src="assets/colour.jpg" alt="" />
          <h3>Banking App</h3>
        </div>
        <div className="item">
          <img src="assets/colour.jpg" alt="" />
          <h3>Banking App</h3>
        </div>
      </div>
    </div>
  );
}
