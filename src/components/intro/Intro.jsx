import "./intro.scss";
import { init } from "ityped";
import { useEffect, useRef } from "react";

export default function Intro() {
  const textRef = useRef();
  useEffect(() => {
    init(textRef.current, {
      showCursor: false,
      strings: ["Video", "Developer", "Designer"],
    });
  }, []);

  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgContainer">
          <img src="assets/man.png" alt="profile" />
        </div>
      </div>

      <div className="right">
        <div className="wrapper">
          <h2>Hi There, I'm</h2>
          <h1> Asif Ali</h1>
          <h3>
            Freelancer <span ref={textRef}></span>
          </h3>
          <a href="#portfolio" id="">
            <img src="../../assets/down.png" alt="downArrow" />
          </a>
        </div>
      </div>
    </div>
  );
}
