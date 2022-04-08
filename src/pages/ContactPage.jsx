import React from "react";
import {
  AiOutlineInstagram,
  AiOutlineFacebook,
  AiOutlineMail,
  AiOutlineGoogle,
} from "react-icons/ai";
import { FiMap } from "react-icons/fi";
import "../styles/Contact.css";

const ContactPage = () => {
  return (
    <>
      <div className="contact">
        <h1>Kontakt z nami: </h1>
        <p>Pub Propaganda ul.Miodowa 20, Kraków</p>
        <a
          href={"https://www.facebook.com/propapub"}
          target="_blank"
          rel="noopener noreferrer"
        >
          <AiOutlineFacebook />
        </a>
        <a
          href={"https://www.instagram.com/pub_propaganda/"}
          target="_blank"
          rel="noopener noreferrer"
        >
          <AiOutlineInstagram />
        </a>
        <a
          href={"https://pubpropaganda.business.site/"}
          target="_blank"
          rel="noopener noreferrer"
        >
          <AiOutlineGoogle />
        </a>
        <a href={"mailto:propaway@propashop.pl"}>
          <AiOutlineMail />
        </a>
        <a
          href={
             "https://www.google.com/maps/dir//PUB+Propaganda/@50.0527577,19.8737538,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x47165b6afe1cf8bf:0xc565cb891f25209f!2m2!1d19.9437934!2d50.0527788"
          }
          target="_blank"
          rel="noopener noreferrer"
        >
          <FiMap />
        </a>
        <h2>Godziny otwarcia lokalu:</h2>
        <p> od poniedziałku do czwartku: </p>
        <span>od godz. 17.00 do godz 02.00</span>
        <p>w piątek i sobotę: </p>
        <span>od godz. 18.00 do godz 04.00</span>
        <p>niedziela: </p>
        <span>od godz. 18.00 do godz 04.00</span>
      </div>
    </>
  );
};

export default ContactPage;
