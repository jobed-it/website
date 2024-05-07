import React from "react";
import ReactDOM from "react-dom/client";
import "./tailwind.css";
import Navbar from "./navbar";
import Footer from "./footer";
import Hero from "./intro";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Navbar />
    <div className="grid grid-cols-2 bg-secondary h-screen">
      <div className="col-span-1 p-10 flex justify-center items-center">
        <Hero />
      </div>
      <div className="col-span-1 p-10 flex justify-center items-center">
        <img
          className="mask mask-squircle"
          src="https://images.pexels.com/photos/1438072/pexels-photo-1438072.jpeg"
          alt="Happy students"
        />
      </div>
    </div>
    <Footer />
  </React.StrictMode>
);
