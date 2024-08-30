import React, { useState, useEffect, useRef } from "react";
import { useFavorites } from "../Context/FavoritesContext.jsx";
import "./MovieCards.css";
import left_icon from "../../netflix_react_assets/left.png";
import right_icon from "../../netflix_react_assets/right.png";
import favorite_icon from "../../netflix_react_assets/favorite.png";
import not_favorite_icon from "../../netflix_react_assets/not_favorite.png";
const MovieCards = ({ title, fetchUrl }) => {
  const { addFavorite, removeFavorite, isFavorite } = useFavorites();

  const cardRef = useRef();
  const [ottType, setOttType] = useState([]);

  const slideCards = (direction) => {
    const scrollAmount = 1000;
    if (direction === "left") {
      cardRef.current.scrollBy({
        left: scrollAmount,
        behavior: "smooth",
      });
    } else if (direction == "right") {
      cardRef.current.scrollBy({
        left: -scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const ottGenere = () => {
    fetch(fetchUrl)
      .then((res) => res.json())
      .then((movie_data) => {
        setOttType(movie_data.results);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    ottGenere();
  }, [fetchUrl]);

  return (
    <div className="movie-cards-container">
      <h2>{title}</h2>

      <div className="card-list" ref={cardRef}>
        <button
          className="left-button"
          onClick={() => slideCards("left")}
          aria-label="Left Button"
        >
          <img src={left_icon} alt="Left Button" />
        </button>

        {ottType.map((movie) => {
          const handleFavoriteClick = () => {
            if (isFavorite(movie.id)) {
              removeFavorite(movie.id);
            } else {
              addFavorite(movie);
            }
          };
          return (
            <div className="cards" key={movie.id}>
              <img
                //
                alt={movie.original_title}
                style={{
                  width: "300px",
                  height: "170px",
                  objectFit: "fill",
                  borderRadius: "7px",
                  margin: "1em",
                }}
                src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
              />
              <p className="movie-title">{movie.name || movie.title}</p>
              <button className="add-favorite" onClick={handleFavoriteClick}>
                {isFavorite(movie.id) ? (
                  <img src={favorite_icon} alt="Favorite Icon" />
                ) : (
                  <img src={not_favorite_icon} alt="Not Favorite Icon" />
                )}
              </button>
            </div>
          );
        })}

        <button
          className="right-button"
          onClick={() => slideCards("right")}
          aria-label="Right Button"
        >
          <img src={right_icon} alt="Right Button" />
        </button>
      </div>
    </div>
  );
};

export default MovieCards;
