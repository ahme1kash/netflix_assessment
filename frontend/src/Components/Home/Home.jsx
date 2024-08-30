import React from "react";
import "./Home.css";
import hero_banner from "../../netflix_react_assets/hero_banner.jpg";
import hero_title from "../../netflix_react_assets/hero_title.png";
import play_icon from "../../netflix_react_assets/play.png";
import info_icon from "../../netflix_react_assets/info.png";
import Nav from "../Nav/Nav.jsx";

import MovieSections from "../OttGenere/OttGenere.jsx";
import Footer from "../Footer/Footer.jsx";
const HomePage = () => {
  return (
    <div className="home">
      <Nav />
      <div className="banner">
        <img src={hero_banner} className="banner-img" alt="banner" />
        <div className="banner-caption">
          <img src={hero_title} alt="banner title" className="caption-img" />
          {/* <p> */}
          <p>
            In Bhopal, India, a factory leaks poisonous gas into the air,killing
            thousands.This is the story of the railway workers who risked
            everything to help.
          </p>
          <div className="banner-btns">
            <button className="btn">
              <img src={play_icon} alt="Play Video" />
              Play
            </button>
            <button className="btn btn-dark">
              <img src={info_icon} alt="Video info" />
              More Info
            </button>
          </div>
        </div>
      </div>
      <MovieSections />
      <Footer />
    </div>
  );
};

export default HomePage;
