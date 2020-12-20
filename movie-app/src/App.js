import React, { useState, useEffect } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import MovieList from './components/MovieList';

const App = () => {
  const [movies, setmovies] = useState([
    {
      "Title": "The Mighty Ducks",
      "Year": "1992",
      "imdbID": "tt0104868",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BZTc4YzQ4NTMtZjc2Yy00OWY1LWIxNGMtZTJkMmFiN2M4ZGViL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"
  },
  {
      "Title": "D2: The Mighty Ducks",
      "Year": "1994",
      "imdbID": "tt0109520",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BMjA1YjVjZWQtZTNkYS00NTA2LThhODUtZTI1MzIwMWRjNWMzXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg"
  },
  {
      "Title": "D3: The Mighty Ducks",
      "Year": "1996",
      "imdbID": "tt0116000",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BNWMyZmNkNTMtYTZlMi00MmQ5LWE4NWQtMzVjZWZhNmU1Yjc1L2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"
  },
  {
      "Title": "Mighty Ducks",
      "Year": "1996–",
      "imdbID": "tt0115269",
      "Type": "series",
      "Poster": "https://m.media-amazon.com/images/M/MV5BNWQwYmIwZDEtM2I4OS00Mjg4LWE3YTgtNGFmYjYyZDExN2Y2XkEyXkFqcGdeQXVyNjExODE1MDc@._V1_SX300.jpg"
  },
  {
      "Title": "Mighty Ducks the Movie: The First Face-Off",
      "Year": "1996",
      "imdbID": "tt0179976",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BMTc0NjA2NzYwOV5BMl5BanBnXkFtZTcwNTg1MTAyMQ@@._V1_SX300.jpg"
  }
  ]);

  const getMovieRequest = async () => {
    const url = "http://www.omdbapi.com/?s=Mighty Ducks&apikey=fe627a67"

    const response = await fetch(url);
    const responseJson = await response.json(); //convert http request to json

    console.log(responseJson);
  };

  useEffect(() => {
    getMovieRequest();
  }, []);

  return (
  <div className="container-fluid movie-app">
    <div className="row">
      <MovieList movies = {movies} />
    </div>
  </div>
  );
};

export default App;