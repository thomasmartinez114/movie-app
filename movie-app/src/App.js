import React, { useState, useEffect } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import MovieList from './components/MovieList';
import MovieListHeading from './components/MovieListHeading';
import SearchBox from './components/SearchBox';
import AddFavorites from './components/AddFavorites';
import RemoveFavorites from './components/RemoveFavorites';

const App = () => {
  const [movies, setmovies] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [searchValue, setSearchValue] = useState('');

  const getMovieRequest = async (searchValue) => {
    const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=fe627a67`

    const response = await fetch(url);
    const responseJson = await response.json(); //convert http request to json

    if(responseJson.Search) {
    setmovies(responseJson.Search);
    }
  };

  // useEffect always gets called on first render of app
  useEffect(() => {
    getMovieRequest(searchValue);
  }, [searchValue]); // gets called when page loads only

  useEffect(() => {
    const movieFavorites = JSON.parse(localStorage.getItem('react-movie-app-favorites'));

    setFavorites(movieFavorites);
  }, []);

  const saveToLocalStorage = (items) => {
    localStorage.setItem('react-movie-app-favorites', JSON.stringify(items));
  };

  const addFavoriteMovie = (movie) => {
    const newFavoriteList = [...favorites, movie]; //copy of favorites arr, add the new movie to it
    setFavorites(newFavoriteList);
    saveToLocalStorage(newFavoriteList); // to save to local storage
  };

  const removeFavoriteMovie = (movie) => {
    const newFavoriteList = favorites.filter(
      (favorite) => favorite.imdbID !== movie.imdbID
      );

      setFavorites(newFavoriteList);
  }

  return (
  <div className="container-fluid movie-app">
    <div className='row d-flex align-items-center mt-4 mb-4'>
      <MovieListHeading heading='TommieTheatre'/>
      <SearchBox searchValue={searchValue} setSearchValue={setSearchValue}/>
    </div>
    <div className="row">
      <MovieList movies = {movies} handleFavoritesClick={addFavoriteMovie} favoriteComponent={AddFavorites}/>
    </div>
    <div className='row d-flex align-items-center mt-4 mb-4'>
          <MovieListHeading heading='Favorites'/>
    </div>
    <div className="row">
      <MovieList movies = {favorites} handleFavoritesClick={removeFavoriteMovie} favoriteComponent={RemoveFavorites}/>
    </div>
  </div>
  );
};

export default App;