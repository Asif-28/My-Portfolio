import "./menu.scss";

import React, { useState } from "react";
import { useRecoilState } from "recoil";
import openNav from "../../atom/openMenu";

function Menu() {
  const [openMenu, setOpenMenu] = useRecoilState(openNav);
  return (
    <div className={"menu " + (openMenu && "active")}>
      <ul className="menu-items">
        <li onClick={() => setOpenMenu(false)}>
          <a className="tag" href="#intro">
            Home
          </a>
        </li>
        <li onClick={() => setOpenMenu(false)}>
          <a className="tag" href="#portfolio">
            Portfolio
          </a>
        </li>
        <li onClick={() => setOpenMenu(false)}>
          <a className="tag" href="#works">
            Works
          </a>
        </li>
        <li onClick={() => setOpenMenu(false)}>
          <a className="tag" href="#testimonials">
            Projects
          </a>
        </li>
        <li onClick={() => setOpenMenu(false)}>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </div>
  );
}

export default Menu;
