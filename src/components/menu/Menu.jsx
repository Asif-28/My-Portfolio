import "./menu.scss";

import React, { useState } from "react";
import { useRecoilState } from "recoil";
import openNav from "../../atom/openMenu";

function Menu() {
  const [openMenu, setOpenMenu] = useRecoilState(openNav);
  return (
    <div className={"menu " + (openMenu && "active")}>
      <ul>
        <li onClick={() => setOpenMenu(false)}>
          <a href="#intro">Home</a>
        </li>
        <li onClick={() => setOpenMenu(false)}>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li onClick={() => setOpenMenu(false)}>
          <a href="#works">Works</a>
        </li>
        <li onClick={() => setOpenMenu(false)}>
          <a href="#testimonials">Testimonial</a>
        </li>
        <li onClick={() => setOpenMenu(false)}>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </div>
  );
}

export default Menu;
