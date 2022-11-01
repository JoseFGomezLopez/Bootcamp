import "./index.css";

import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import App from "./App";
import Home from "./pages/Home/Home";
import Gallery from "./pages/Gallery/Gallery";
import Difusion from "./pages/Difusion/Difusion";
import Contact from "./pages/Contact/Contact";
import NotFound from "./pages/NotFound/404";
import { DetailCard } from "./pages/DetailCard/DetailCard";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter basename="/">
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="difusion" element={<Difusion />} />
          <Route path="gallery/:id" element={<DetailCard />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
