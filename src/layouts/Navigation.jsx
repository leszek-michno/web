import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "../styles/Navigation.css";
import { AiOutlineMenu } from 'react-icons/ai'

const Navigation = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const toggleNav = () => {
    setToggleMenu(!toggleMenu);
  };

  useEffect(() => {
    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    };
    window.addEventListener("resize", changeWidth);

    return () => {
      window.removeEventListener("resize", changeWidth);
    };
  }, []);

  const list = [
    { name: "start", path: "/" },
    { name: "aktualności", path: "news" },
    { name: "menu", path: "menu" },
    { name: "kontakt", path: "contact" },
  ];

  const menu = list.map((item) => (
    <li className="nav"  key={item.name}>
      <NavLink onClick={toggleNav} to={item.path}>{item.name}</NavLink>
    </li>
  ));
  return (
    <nav className="list">
      {(toggleMenu || screenWidth > 600) && <ul>{menu}</ul>}
      <button onClick={toggleNav} className="btn"><AiOutlineMenu/></button>
    </nav>
  );
};

export default Navigation;
