import React from "react";
import "../styles/App.css";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./Header";
import Navigation from "./Navigation";
import Page from "./Page";
import Footer from "./Footer";

const App = () => {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div className="navi">{<Navigation />}</div>
      <div className="app">
        <p className="name">Pub Propaganda</p>
        <header>{<Header />}</header>
        <main>
          <section className="page">{<Page />}</section>
        </main>
        <footer>{<Footer />}</footer>
      </div>
    </Router>
  );
};

export default App;
