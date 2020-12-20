import React, { useState, useEffect } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import MovieList from './components/MovieList';
import MovieListHeading from './components/MovieListHeading';

const App = () => {
  const [movies, setmovies] = useState([]);
  const [searchValue, setSearchValue] = useState('');

  const getMovieRequest = async () => {
    const url = "http://www.omdbapi.com/?s=star wars&apikey=fe627a67"

    const response = await fetch(url);
    const responseJson = await response.json(); //convert http request to json

    console.log(responseJson);
    setmovies(responseJson.Search);
  };

  useEffect(() => {
    getMovieRequest();
  }, []); // gets called when page loads only

  return (
  <div className="container-fluid movie-app">
    <div className='row'>
      <MovieListHeading heading='Movies'/>
    </div>
    <div className="row">
      <MovieList movies = {movies} />
    </div>
  </div>
  );
};

export default App;