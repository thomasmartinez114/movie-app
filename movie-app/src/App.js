import React, { useState, useEffect } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import MovieList from './components/MovieList';

const App = () => {
  const [movies, setmovies] = useState([]);

  const getMovieRequest = async () => {
    const url = "http://www.omdbapi.com/?s=home alone&apikey=fe627a67"

    const response = await fetch(url);
    const responseJson = await response.json(); //convert http request to json

    console.log(responseJson);
    setmovies(responseJson.Search);
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