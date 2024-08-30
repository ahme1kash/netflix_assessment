import React, { useState, useEffect } from "react";
import "./Nav.css";
import logo from "../../netflix_react_assets/logo.png";
import search_icon from "../../netflix_react_assets/search.svg";
import bell_icon from "../../netflix_react_assets/bell.svg";
import caret_icon from "../../netflix_react_assets/caret.svg";
import profile_img from "../../netflix_react_assets/profile_img.png";
import edit_icon from "../../netflix_react_assets/edit.png";
import account_icon from "../../netflix_react_assets/account.png";
import ask_icon from "../../netflix_react_assets/ask.png";
import transfer_icon from "../../netflix_react_assets/transfer.png";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import axios from "axios";
const Nav = () => {
  const [nav, setNav] = useState(false);
  useEffect(() => {
    const changeNavBg = () => {
      if (window.scrollY >= "100") {
        setNav(true);
      } else {
        setNav(false);
      }
    };
    window.addEventListener("scroll", changeNavBg);
  }, []);

  const navigate = useNavigate();
  const handleLogout = async (e) => {
    try {
      const local_url = import.meta.env.VITE_LOCAL_URL;
      await axios.post(`${local_url}/api/auth/logout`, null, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("Token")}`,
        },
      });

      localStorage.removeItem("Token");

      toast.success("Logged out successfully", { position: "bottom-right" });
      navigate("/");
    } catch (error) {
      console.error("Error logging out:", error);
      toast.error("Failed to logout", { position: "bottom-right" });
    }
  };

  return (
    <div className={nav ? "nav active" : "nav"}>
      <div className="nav-left">
        <img src={logo} alt="Netflix Logo" />
        <ul>
          <Link
            to="/favorites"
            style={{
              background:
                "linear-gradient(50deg, rgba(255,121,180,1) 0%, rgba(2,120,154,1) 50%, rgba(252,176,69,1) 100%)",
              color: "#ffffff",
              fontSize: "22px",
              fontWeight: "400",
              textDecoration: "none",
            }}
          >
            Favorites
          </Link>
          <li>Home</li>
          <li>TV Shows</li>
          <li>Movies</li>
          <li>New & Popular</li>
          <li>My List</li>
          <li>Browse by Languages</li>
        </ul>
      </div>
      <div className="nav-right">
        <img src={search_icon} alt="Search Icon" className="icons" />
        <p>Children</p>
        <img src={bell_icon} alt="Bell Icon" className="icons" />
        <div className="nav-profile">
          <img src={profile_img} alt="Profile Img" className="profile" />
          <img src={caret_icon} alt="Dropdown Icon" aria-label="User Account" />
          <div className="dropdown">
            <div className="dd-list1">
              <img
                className="dropdown-icons"
                src={edit_icon}
                alt="edit profile"
              />
              <li>Manage Profiles</li>
            </div>
            <div className="dd-list2">
              <img
                className="dropdown-icons"
                src={transfer_icon}
                alt="transfer profile"
              />

              <li>Transfer Profiles</li>
            </div>
            <div className="dd-list3">
              <img
                className="dropdown-icons"
                src={account_icon}
                alt="account info"
              />
              <li>Account</li>
            </div>
            <div className="dd-list4">
              <img
                className="dropdown-icons"
                src={ask_icon}
                alt="ask for help"
              />
              <li>Help Center</li>
            </div>

            <hr />
            <div className="dd-list5">
              <p className="signout">
                <Link
                  style={{ color: "white", textDecoration: "inherit" }}
                  onClick={handleLogout}
                >
                  Sign out of Netflix
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
