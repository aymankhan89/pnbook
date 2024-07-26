import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "../src/Pages/App";
import reportWebVitals from "./reportWebVitals";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import AboutUs from "./Pages/AboutUs";
import ContactPage from "./Pages/ContactPage";
import BlogsPage from "./Pages/BlogsPage";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/aboutus" element={<AboutUs />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/about" element={<BlogsPage />} />
    </Routes>
  </Router>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
