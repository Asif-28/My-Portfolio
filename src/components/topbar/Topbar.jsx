import "./topbar.scss";
import { Person, Mail } from "@material-ui/icons";
import { useRecoilState } from "recoil";
import openNav from "../../atom/openMenu";

export default function Topbar() {
  const [navOpen, setNavOpen] = useRecoilState(openNav);
  return (
    <div className={"topbar " + (navOpen && "active")}>
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
          <div
            className="hamburger"
            onClick={() => {
              setNavOpen(!navOpen);
            }}
          >
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
}
