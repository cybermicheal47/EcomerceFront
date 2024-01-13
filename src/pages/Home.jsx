import React from "react";
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import Sliders from "../components/Sliders";
import Categories from "../components/Categories";
import Products from "../components/Products";
import NewsLetter from "../components/NewsLetter";
import Footer from "../components/Footer";
import Navbarr from "../components/Navbar/Navbarr";

function Home() {
  return (
    <div>
      <Announcement />
      <Navbarr />
      <Sliders />
      <Categories />
      <Products />
      <NewsLetter />
      <Footer />
    </div>
  );
}

export default Home;
