import React from "react";
import Header from "./components/Header";
import About from "./components/About";
import Interests from "./components/Interests";
import Footer from "./components/Footer";

import "font-awesome/css/font-awesome.min.css";
import "./App.css";

function App() {
  return (
    <div className="container">
      <Header />
      <About />
      <Interests />
      <Footer />
    </div>
  );
}

export default App;
