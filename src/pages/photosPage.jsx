import React from "react";
import Img from "../layouts/Img";
import img1 from "../images/IMG1.webp";
import img2 from "../images/IMG2.webp";
import img3 from "../images/IMG3.webp";
import img4 from "../images/IMG4.webp";
import img5 from "../images/IMG5.webp";
import img6 from "../images/IMG6.webp";
import img7 from "../images/img11.jpg";
import img8 from "../images/img13.jpg";

const imgArray = [
  {
    id: 1,
    img: img1,
  },
  {
    id: 2,
    img: img2,
  },
  {
    id: 3,
    img: img3,
  },
  {
    id: 4,
    img: img4,
  },
  {
    id: 5,
    img: img5,
  },
  {
    id: 6,
    img: img6,
  },
  {
    id: 7,
    img: img7,
  },
  {
    id: 8,
    img: img8,
  },
];

const Photos = () => {
  const newImgArray = imgArray.map((item) => <Img key={item.id} item={item} />);
  
  return (
    <>
      <h1>Zdjęcia</h1>
      <div>
      {newImgArray}
      </div>
    </>
  );
};

export default Photos;
