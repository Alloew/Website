import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./Home";
import Nav from "./Nav";
import Games from "./Games";
import Gallery from "./Gallery";
import Halloween from "./Halloween";
import Other from "./Other";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Footer from "./Footer";

ReactDOM.render(
  <React.StrictMode>
    <Nav />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/game" element={<Games />} />
        <Route path="/games" element={<Games />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/halloween" element={<Halloween />} />
        <Route path="/other" element={<Other />} />
      </Routes>
    </BrowserRouter>
    <Footer />
  </React.StrictMode>,
  document.getElementById("root")
);

var main = document.getElementById("Main");
if (main) {
  main.style.paddingTop = `${document.getElementById("Nav")?.clientHeight}px`;
}
