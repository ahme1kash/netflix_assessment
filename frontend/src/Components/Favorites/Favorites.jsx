import React from "react";
import { useFavorites } from "../Context/FavoritesContext";
import "./Favorites.css";
const FavoritesPage = () => {
  const { favorites } = useFavorites();

  if (favorites.length === 0) {
    return <p>No favorites added yet!</p>;
  }

  return (
    <div className="favorites-page">
      <h2>Your Favorite Movies</h2>
      <div className="favorites-list">
        {favorites.map((movie) => (
          <div className="movie-card" key={movie.id}>
            <img
              src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
              alt={movie.title}
              style={{ width: "200px", borderRadius: "8px" }}
            />
            <h4>{movie.title || movie.name}</h4>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FavoritesPage;
