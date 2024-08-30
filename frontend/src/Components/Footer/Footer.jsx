import React from "react";
import "./Footer.css";
import youtube_icon from "../../netflix_react_assets/youtube.png";
import twitter_icon from "../../netflix_react_assets/twitter.png";
import instagram_icon from "../../netflix_react_assets/instagram.png";
import facebook_icon from "../../netflix_react_assets/facebook.png";
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-icons">
        <img src={facebook_icon} alt="facebook icon" />
        <img src={youtube_icon} alt="youtube icon" />
        <img src={twitter_icon} alt="twitter icon" />
        <img src={instagram_icon} alt="instagram icon" />
      </div>
      <ul className="footer-lists">
        <div className="footer-block1">
          <li>Audio Description</li>
          <li>Investor Relations</li>
          <li>Legal Notices</li>
        </div>
        <div className="footer-block2">
          <li>Help Centre</li>
          <li>Jobs</li>
          <li>Cookie Preferences</li>
        </div>
        <div className="footer-block3">
          <li>Gift Cards</li>
          <li>Terms of Use</li>
          <li>Corporate Information</li>
        </div>
        <div className="footer-block4">
          <li>Media centre</li>
          <li>Privacy</li>
          <li>Contact Us</li>
        </div>
      </ul>
      <p className="copyright-text">© 1997-2024 Netflix Inc.</p>
    </div>
  );
};

export default Footer;
