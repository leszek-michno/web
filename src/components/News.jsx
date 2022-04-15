import React from "react";
import "../styles/Newpage.css";

const News = (props) => {
  return (
    <div className="news">
    <div className="newpage">
      <p>{props.title}{" "}{props.date}</p>
      <img src={props.img} alt="logo" />
      <span>{props.text}</span>  
    </div>
  </div>
  );
};

export default News;
