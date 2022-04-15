import React from "react";
import News from "../components/News";
import img1 from "../images/pro4.webp";
import img2 from "../images/Tshirt.webp";
import img3 from "../images/img13.jpg";

const news = [
  
  {
    id: 1,
    title: "Wielkanoc w Propagandzie",
    date: "(1 maja 2022)",
    img: img3,
    text: "W piątek (15 kwietnia) i sobotę (16 kwietnia) lokal otwarty od godz. 18.00 do godz. 4.00. W niedzielę (17 kwietnia) lokal zamknięty! W poniedziałek (18 kwietnia)  lokal otwarty od 17.00 do 2.00.",
  },
  {
    id: 2,
    title: "Sprzedajemy koszulki z naszym logo",
    date: "(23 marzec 2022)",
    img: img2,
    text: "Z powodu braku miejsca nie jesteśmy w stanie trzymać wszystkich t-shirtów w lokalu. Dlatego, jeżeli ktoś chcę nabyć nasz t-shirt to: 1) prosimy o złożenie zamówienia (np. za pomocą messengera lub e-maila). Wystarczy podać jakieś imię (byśmy przekazali towar odpowiedniej osobie), ilość i rozmiar zamawianych t-shirtów; 2) następnego dnia towar będzie do odbioru w Pubie Propaganda; 3) będzie tam czekał na zamawiającego przez tydzień. Jeżeli nie zostanie w tym czasie odebrany, to zamówienie będzie automatycznie anulowane. Cena jednego t-shirta: 60 zł (płatne przy odbiorze). Obecnie mamy t-shirty kobiece w rozmiarach L, M, S, XS; męskie: w rozmiarach: XXL , XL, L, M, S. Uwaga! Nie prowadzimy sprzedaży wysyłkowej.",
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
