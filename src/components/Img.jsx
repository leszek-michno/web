import React from "react";
import "../styles/Img.css";

const Img = ({ item }) => {
  return (
    <div className="galery">
      <img src={item.img} alt="zd" />
    </div>
  );
};
export default Img;
