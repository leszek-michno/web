import React, { useState } from "react";
import "../styles/Img.css";

const Img = ({ item }) => {

const [width, setWidth] = useState(true);


const handleClick =()=> {
  setWidth(width === true ? "100%" : true);
}

return (
    <div className="galery">
      <img 
       style={{width: width}} 
       onClick={handleClick}  
       src={item.img} alt="propaganda" />
    </div>
  );
};
export default Img;
