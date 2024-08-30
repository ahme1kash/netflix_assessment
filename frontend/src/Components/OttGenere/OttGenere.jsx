import React from "react";
import MovieCards from "../MovieCards/MovieCards.jsx";
const api_key = import.meta.env.VITE_TMDB_API_KEY;
// const api_key = "";
const genreUrls = {
  popular: `https://api.themoviedb.org/3/discover/movie?api_key=${api_key}`,
  tv: `https://api.themoviedb.org/3/discover/tv?api_key=${api_key}`,
  action: `https://api.themoviedb.org/3/discover/movie?api_key=${api_key}&with_genres=28&sort_by=popularity.desc`,
  comedy: `https://api.themoviedb.org/3/discover/movie?api_key=${api_key}&with_genres=35&sort_by=popularity.desc`,
  kids: `https://api.themoviedb.org/3/discover/movie?api_key=${api_key}&with_genres=10751&sort_by=popularity.desc`,
};

const MovieSections = () => {
  return (
    <div>
      {/* Render MovieCards component with different titles and fetch URLs */}
      <MovieCards title="Popular on Netflix" fetchUrl={genreUrls.popular} />
      <br></br>
      <MovieCards title="Action Movies" fetchUrl={genreUrls.action} />
      <br></br>
      <MovieCards title="TV Shows" fetchUrl={genreUrls.tv} />
      <br></br>
      <MovieCards title="Comedy Movies" fetchUrl={genreUrls.comedy} />
      <br></br>
      <MovieCards title="Kids Movies" fetchUrl={genreUrls.kids} />
    </div>
  );
};
export default MovieSections;
