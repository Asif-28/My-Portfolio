import "./topbar.scss";
import { Person, Mail } from "@material-ui/icons";

export default function Topbar({ openMenu, setOpenMenu }) {
  return (
    <div className={"topbar " + (openMenu && "active ")} id="topbar">
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            Asif
          </a>
          <div className="itemContainer">
            <Person className="icon" />
            <span>+91 79039 16011 </span>
          </div>
          <div className="itemContainer">
            <Mail className="icon" />
            <span>asif.a.7277@gmail.com</span>
          </div>
        </div>
        {/* <h1>Hello</h1> */}
        <div className="right">
          <div className="hamburger" onClick={() => setOpenMenu(!openMenu)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
}
