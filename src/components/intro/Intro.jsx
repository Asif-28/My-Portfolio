import "./intro.scss";
import { init } from "ityped";
import { useEffect, useRef } from "react";
import Typed from "typed.js";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function Intro() {
  const textRef = useRef();
  const el = useRef(null);
  const typed = useRef(null);
  // useEffect(() => {
  //   // init(textRef.current, {
  //   //   showCursor: false,
  //   //   strings: ["Video", "Asif", "Designer"],
  //     const options = {
  //   	strings: [
  //       'Some <i>strings</i> are slanted',
  //       'Some <strong>strings</strong> are bold',
  //       'HTML characters &times; &copy;'
  //     ],
  //     typeSpeed: 50,
  //     backSpeed: 50,
  //   // });
  // }, []);

  useEffect(() => {
    const options = {
      showCursor: false,
      strings: [
        " <i>Freelancer</i>",
        " <strong>Developer</strong> ",
        "Designer &copy;",
      ],
      typeSpeed: 50,
      backSpeed: 50,
    };

    // elRef refers to the <span> rendered below
    typed.current = new Typed(el.current, options);

    return () => {
      // Make sure to destroy Typed instance during cleanup
      // to prevent memory leaks
      typed.current.destroy();
    };
  }, []);

  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgContainer">
          <img src="" alt="profile" />
        </div>
      </div>

      <div className="right">
        <div className="wrapper">
          <h2>Hi There, I'm</h2>
          <h1> Asif Ali</h1>
          <h3>
            Freelancer <span style={{ whiteSpace: "pre" }} ref={el}></span>
          </h3>
          <a href="#portfolio" id="">
            <ExpandMoreIcon fontSize="large" />
          </a>
        </div>
      </div>
    </div>
  );
}
