import React from "react";
import "../styles/App.css";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./Header";
import Navigation from "./Navigation";
import Page from "./Page";
import Footer from "./Footer";

const App = () => {
  return (
    <Router>
      <div className="navi">{<Navigation />}</div>
      <div className="app">
        <h1>Pub Propaganda</h1>
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
