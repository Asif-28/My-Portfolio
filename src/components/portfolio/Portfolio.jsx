import PortfolioList from "../portfolioList/PortfolioList";
import "./portfolio.scss";
import { useEffect, useState } from "react";
import {
  featuredPortfolio,
  webPortfolio,
  mobilePortfolio,
  designPortfolio,
  contentPortfolio,
} from "../../data";
export default function Portfolio() {
  const [selected, setSelected] = useState("feature");
  const [data, setDdata] = useState(["feature"]);
  const list = [
    { id: "feature", title: "Feature" },
    { id: "web", title: "Web App" },
    { id: "video", title: "Video Edits" },
    { id: "design", title: "UX/UI designer" },
    { id: "content", title: "Content  " },
  ];
  useEffect(() => {
    switch (selected) {
      case "feature":
        setDdata(featuredPortfolio);
        break;
      case "web":
        setDdata(webPortfolio);
        break;
      case "video":
        setDdata(mobilePortfolio);
        break;
      case "design":
        setDdata(designPortfolio);
        break;
      case "content":
        setDdata(contentPortfolio);
        break;
      default:
        setDdata(featuredPortfolio);
    }
  }, [selected]);
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
        {data.map((d) => (
          <div className="item">
            <img src={d.img} alt="" />
            <h3>{d.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}
