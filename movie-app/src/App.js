import React, { useState, useEffect } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import MovieList from './components/MovieList';
import MovieListHeading from './components/MovieListHeading';
import SearchBox from './components/SearchBox';
import AddFavorites from './components/AddFavorites';

const App = () => {
  const [movies, setmovies] = useState([]);
  const [searchValue, setSearchValue] = useState('');

  const getMovieRequest = async (searchValue) => {
    const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=fe627a67`

    const response = await fetch(url);
    const responseJson = await response.json(); //convert http request to json

    if(responseJson.Search) {
    setmovies(responseJson.Search);
    }
  };

  // useEffect always gets called on first render
  useEffect(() => {
    getMovieRequest(searchValue);
  }, [searchValue]); // gets called when page loads only

  return (
  <div className="container-fluid movie-app">
    <div className='row d-flex align-items-center mt-4 mb-4'>
      <MovieListHeading heading='TommieTheatre'/>
      <SearchBox searchValue={searchValue} setSearchValue={setSearchValue}/>
    </div>
    <div className="row">
      <MovieList movies = {movies} favoriteComponent={AddFavorites}/>
    </div>
  </div>
  );
};

export default App;