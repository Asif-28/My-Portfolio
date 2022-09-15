import "./testimonials.scss";
import LinkIcon from "@mui/icons-material/Link";
import { LinkOutlined } from "@material-ui/icons";

export default function Testimonials() {
  const data = [
    {
      id: 1,
      name: "Portfolio",
      title: "Web Developer",
      img: "https://images.pexels.com/photos/1680172/pexels-photo-1680172.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      icon: "assets/twitter.png",
      desc: "Web Development. HTML CSS JAVASCRIPT TAILWINDSCSS SASS/SCSS REACTJS NODEJS EXPRESS",
    },
    {
      id: 2,
      name: "E-commerce",
      title: "Responsive Design ",
      img: "https://images.pexels.com/photos/428321/pexels-photo-428321.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      icon: "assets/youtube.png",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam dolorem recusandae perspiciatis ducimus vel hic temporibus. ",
      featured: true,
    },
    {
      id: 3,
      name: "React Form",
      title: "Backend data stored in json format",
      img: "https://images.pexels.com/photos/3863793/pexels-photo-3863793.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      icon: "assets/linkedin.png",
      desc: "Complete React form with Responsive Design.",
    },
  ];
  return (
    <div className="testimonials" id="testimonials">
      <h1>Projects</h1>
      <div className="container">
        {data.map((d) => (
          <div className={d.featured ? "cards featured" : "cards"}>
            <div className="top">
              <img src="assets/right-arrow.png" className="left" alt="" />
              <img className="user" src={d.img} alt="" />
              <img className="right" alt="" />
              <LinkOutlined />
            </div>
            <div className="centre">{d.desc}</div>
            <div className="bottom">
              <h3>{d.name}</h3>
              <h4>{d.title}</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
