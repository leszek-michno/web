import React from "react";
import "../styles/Newpage.css";

const News = (props) => {
  return (
    <>
    <div className="newpage">
      <p>{props.title}{''} {props.date}</p>
      <img src={props.img} alt="logo" />
      <span>{props.text}</span>  
    </div>
    <br />
    
    </>
  );
};

export default News;
