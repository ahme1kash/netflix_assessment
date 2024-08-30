import React from "react";
import Home from "./Components/Home/Home.jsx";
import Favorite from "./Components/Favorites/Favorites.jsx";
import { FavoritesProvider } from "./Components/Context/FavoritesContext.jsx";
import { Routes, Route, Link } from "react-router-dom";
import Login from "./Components/Login/Login.jsx";
import invalid from "./netflix_react_assets/invalid.png";

const App = () => {
  return (
    <FavoritesProvider>
      <div>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/favorites" element={<Favorite />} />
          <Route
            path="/*"
            element={
              <span style={{ fontSize: "small" }}>
                <img
                  src={invalid}
                  style={{
                    width: "70%",

                    paddingLeft: "20%",
                    margin: "auto",
                  }}
                  alt="Not Found"
                />
                <h1
                  style={{ color: "gray", margin: "auto", paddingLeft: "10em" }}
                >
                  OOPS! NO SIMILAR ROUTES
                </h1>
                <br />
                <Link
                  style={{
                    cursor: "pointer",
                    color: "gray",
                    textDecoration: "none",
                    fontSize: "1.2em",
                    paddingLeft: "20em",
                  }}
                  to={"/home"}
                >
                  Back To home
                </Link>
              </span>
            }
          />
        </Routes>
      </div>
    </FavoritesProvider>
  );
};

export default App;
