import React from "react";
import News from "../components/News";
import img1 from "../images/pro1.webp";
import img2 from "../images/pro3.webp";


const news = [
  {
    id: 4,
    title: "Próbka",
    date: "(1 maja 2022)",
    img: img1,
    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur eum fugiat ad doloremque ipsum in dolor excepturi fuga consequuntur, nesciunt accusamus harum possimus nihil officia ex commodi asperiores repellat alias? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur eum fugiat ad doloremque ipsum in dolor excepturi fuga consequuntur, nesciunt accusamus harum possimus nihil officia ex commodi asperiores repellat alias?",
  },
  {
    id: 1,
    title: "Sprzedajemy koszulki z naszym logo",
    date: "(23 marzec 2022)",
    img: img1,
    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur eum fugiat ad doloremque ipsum in dolor excepturi fuga consequuntur, nesciunt accusamus harum possimus nihil officia ex commodi asperiores repellat alias?",
  },
  {
    id: 2,
    title: "Otwarcie knajpy",
    date: "(23 marzec 2022)",
    img: img2,
    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur eum fugiat ad doloremque ipsum in dolor excepturi fuga consequuntur, nesciunt accusamus harum possimus nihil officia ex commodi asperiores repellat alias?",
  },
  {
    id: 3,
    title: "Urodziny Propy",
    date: "(23 maja 2022)",
    img: img1,
    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur eum fugiat ad doloremque ipsum in dolor excepturi fuga consequuntur, nesciunt accusamus harum possimus nihil officia ex commodi asperiores repellat alias? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur eum fugiat ad doloremque ipsum in dolor excepturi fuga consequuntur, nesciunt accusamus harum possimus nihil officia ex commodi asperiores repellat alias?",
  },
  
];

const NewsPage = () => {
  const newsList = news.map((item) => <News key={item.id} {...item} />);

  return (
    <div>
      <h1>Aktualności</h1>
      {newsList}
    </div>
  );
};

export default NewsPage;
