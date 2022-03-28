import React from "react";
import "../styles/Newpage.css";

const News = (props) => {
  return (
    <div className="newpage">
      <h3>{props.title}</h3>
      <span>{props.date}</span>
      <img src={props.img} alt="logo" />
      <p>{props.text}</p>
      <br />
    </div>
  );
};

export default News;
