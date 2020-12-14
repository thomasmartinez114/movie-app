import React, { useState } from 'react';
import MovieList from './components/MovieList';

const App = () => {
  const [movies, setmovies] = useState([
      {
        "Title": "Dumb and Dumber",
        "Year": "1994",
        "imdbID": "tt0109686",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BZDQwMjNiMTQtY2UwYy00NjhiLTk0ZWEtZWM5ZWMzNGFjNTVkXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"
    },
    {
        "Title": "Dumb and Dumber To",
        "Year": "2014",
        "imdbID": "tt2096672",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BMTYxMzA0MzAyMF5BMl5BanBnXkFtZTgwMjMyNjcwMjE@._V1_SX300.jpg"
    },
    {
        "Title": "Dumb and Dumber",
        "Year": "1995–1996",
        "imdbID": "tt0111946",
        "Type": "series",
        "Poster": "https://m.media-amazon.com/images/M/MV5BMTQyMDA5Mjc3Ml5BMl5BanBnXkFtZTcwNzE4NjIyMQ@@._V1_SX300.jpg"
    },
    {
        "Title": "That's Awesome! The Story of 'Dumb and Dumber To'",
        "Year": "2015",
        "imdbID": "tt4470986",
        "Type": "movie",
        "Poster": "N/A"
    },
  ]);
  return <div>
    <MovieList movies = {movies} />
  </div>;
};

export default App;