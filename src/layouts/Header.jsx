import React from "react";
import "../styles/Header.css";
import { Route, Routes } from "react-router-dom";

import img1 from "../images/bike.webp";
import img2 from "../images/dart.webp";
import img3 from "../images/galery2.webp";
import img4 from "../images/trabant.webp";
import img5 from "../images/galery.webp";

const Img1 = () => <img src={img1} alt="propa" />;
const Img2 = () => <img src={img2} alt="propa" />;
const Img3 = () => <img src={img3} alt="propa" />;
const Img4 = () => <img src={img4} alt="propa" />;
const Img5 = () => <img src={img5} alt="propa" />;


const Header = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Img1 />} />
        <Route path="/news" element={<Img2 />} />
        <Route path="/menu" element={<Img3 />} />
        <Route path="/contact" element={<Img4 />} />
        <Route path="/photos" element={<Img5 />} />
      </Routes>
    </>
  );
};

export default Header;
