import React from "react";
import BottleBeer from "../components/BottleBeer";
import BottleBeer2 from "../components/BottleBeer2";
import BottleBeer3 from "../components/BottleBeer3";
import DraftBeer from "../components/DraftBeer";
import NoAlco from "../components/NoAlco";
import StrongAlco from "../components/StrongAlco";
import Wins from "../components/Wins";
import "../styles/MenuPage.css";

const draftBeer = [
  { id: 1, name: "Holba (0,5 l)", price: 12 },
  { id: 2, name: "Holba (0,3 l)", price: 7 },
  { id: 3, name: "Zubr - ciemny lager  (0,5 l)", price: 10 },
  { id: 4, name: "Zubr - ciemny lager (0,3 l)", price: 7 },
];
const bottleBeer = [
  { id: 1, name: "Litovel Premium (0,5 l)", price: 10 },
  { id: 2, name: "Litovel Premium Dark (0,5 l)", price: 10 },
  { id: 3, name: "Litovel Citron (0,5 l)", price: 12 },
  { id: 4, name: "Desperados (0,5 l)", price: 12 },
  { id: 7, name: "West Cost IPA (0,5 l)", price: 15 },
  { id: 8, name: "Sour Mango (0,5 l)", price: 15 },
];
const bottleBeer2 = [
  { id: 1, name: "Litovel Pszeniczne (0,5 l)", price: 12 },
  { id: 2, name: "Żywiec Biały (0,5 l)", price: 12 },
  { id: 3, name: "Cieszyn Pszeniczne (0,5 l)", price: 15 },
];
const bottleBeer3 = [
  { id: 1, name: "Litovel Free (0,5 l)", price: 10 },
  { id: 2, name: "Heineken (0,35 l)", price: 10 },
];
const strongAlco = [
  { id: 1, name: "Wyborowa (40 ml)", price: 10 },
  { id: 2, name: "Soplica Wiśniowa (40 ml)", price: 10 },
  { id: 3, name: "Soplica Śliwkowa (40 ml)", price: 10 },
  { id: 4, name: "Soplica Kawowa (40 ml)", price: 10 },
  { id: 5, name: "Soplica Pigwowa (40 ml)", price: 10 },
  { id: 6, name: "Soplica Malinowa (40 ml)", price: 10 },
  { id: 7, name: "Krupnik - miodowy (40 ml)", price: 12 },
  { id: 8, name: "Żubrówka - Bison Grass (40 ml)", price: 12 },
  { id: 9, name: "Żołądkowa Gorzka (40 ml)", price: 10 },
  { id: 10, name: "Żołądkowa Gorzka Miętowa (40 ml)", price: 10 },
  { id: 11, name: "Gin Seagrams (40 ml)", price: 12 },
  { id: 12, name: "Gin Bombay (40 ml)", price: 16 },
  { id: 13, name: "Capitan Morgan Dark (40 ml)", price: 14 },
  { id: 14, name: "Capitan Morgan Spiced Gold (40 ml)", price: 14 },
  { id: 15, name: "Johnny Walker (40 ml)", price: 12 },
  { id: 16, name: "Jack Daniels (40 ml)", price: 14 },
  { id: 17, name: "Jim Beam (40 ml)", price: 14 },
  { id: 18, name: "Jameson (40 ml)", price: 14 },
  { id: 19, name: "Ballantines (40 ml)", price: 14 },
  { id: 20, name: "Baileys (40 ml)", price: 14 },
  { id: 21, name: "Khalua (40 ml)", price: 14 },
  { id: 22, name: "Malibu (40 ml)", price: 14 },
  { id: 23, name: "Tequila Sierra Silver (40 ml)", price: 14 },
  { id: 24, name: "Olmeca Gold (40 ml)", price: 16 },
  { id: 25, name: "Śliwowica Passover (40 ml)", price: 16 },
  { id: 26, name: "Remy Martin (40 ml)", price: 20 },
];

const wins = [
  { id: 1, name: "Cabernet Savinione (100 ml)", price: 10 },
  { id: 2, name: "Chardonnay (100 ml)", price: 10 },
  { id: 3, name: "Martini Bianco (100 ml)", price: 10 },
  { id: 4, name: "Martini Dry (100 ml)", price: 10 },
];

const noAlco = [
  { id: 1, name: "Coca cola (but 250 ml)", price: 6 },
  { id: 2, name: "Coca cola Zero (but 250 ml)", price: 6 },
  { id: 3, name: "Tonik (but 250 ml)", price: 6 },
  { id: 4, name: "Sprite (but 250 ml)", price: 6 },
  { id: 5, name: "Fanta (but 250 ml)", price: 6 },
  { id: 6, name: "Red bull (250 ml)", price: 10 },
  { id: 7, name: "Red bull light (250 ml)", price: 10 },
  { id: 8, name: "Sok pamarańczowy (250 ml)", price: 6 },
  { id: 9, name: "Sok grejfrutowy (250 ml)", price: 6 },
  { id: 10, name: "Sok jabłkowy (250 ml)", price: 6 },
  { id: 11, name: "Sok porzeczkowy (250 ml)", price: 6 },
  { id: 12, name: "Woda Kinga (but 350 ml)", price: 6 },
  { id: 12, name: "Woda Kinga gazowana (but 350 ml)", price: 6 },
];

const MenuPage = () => {
  const draftBeerMenu = draftBeer.map((item) => (
    <DraftBeer key={item.id} {...item} />
  ));
  const bottleBeerMenu = bottleBeer.map((item) => (
    <BottleBeer key={item.id} {...item} />
  ));
  const bottleBeerMenu2 = bottleBeer2.map((item) => (
    <BottleBeer2 key={item.id} {...item} />
  ));
  const bottleBeerMenu3 = bottleBeer3.map((item) => (
    <BottleBeer3 key={item.id} {...item} />
  ));
  const strongAlcoList = strongAlco.map((item) => (
    <StrongAlco key={item.id} {...item} />
  ));
  const noAlcoList = noAlco.map((item)=>(
      <NoAlco key={item.id} {...item} />
  )) 

  const winsList = wins.map((item) => <Wins key={item.id} {...item} />);

  return (
    <div className="menu">
      <h2>Menu</h2>
      <h3>piwa lane</h3>
      {draftBeerMenu}
      <h3>piwa butelkowe</h3>
      {bottleBeerMenu}
      <h3>piwa butelkowe pszeniczne</h3>
      {bottleBeerMenu2}
      <h3>piwa butelkowe bezalkoholowe</h3>
      {bottleBeerMenu3}
      <h3>alkohole wysokoprocentowe</h3>
      {strongAlcoList}
      <h3>Wina i wermuty</h3>
      {winsList}
      <h3>Napoje bezalkoholowe</h3>
      {noAlcoList}
    </div>
  );
};

export default MenuPage;
