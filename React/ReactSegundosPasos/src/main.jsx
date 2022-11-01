import "./index.css";

import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter,Route,Routes } from "react-router-dom";

import App from "./App";
import About from "./pages/About";
import Home from "./pages/Home";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter basename="/">
     <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} /> 
      </Route>
     </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
