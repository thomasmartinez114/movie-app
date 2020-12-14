import React, { useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import MovieList from './components/MovieList';

const App = () => {
  const [movies, setmovies] = useState([
        {
          "Title": "Friday",
          "Year": "1995",
          "imdbID": "tt0113118",
          "Type": "movie",
          "Poster": "https://m.media-amazon.com/images/M/MV5BYmEwNjNlZTUtNzkwMS00ZTlhLTkyY2MtMjM2MzlmODQyZGVhXkEyXkFqcGdeQXVyNTI4MjkwNjA@._V1_SX300.jpg"
        },
        {
        "Title": "Next Friday",
        "Year": "2000",
        "imdbID": "tt0195945",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BZTg4NTkzMDEtM2MzOS00MDE1LWJmYWItYzdiMGRiNTdmZmFkXkEyXkFqcGdeQXVyNjUwNzk3NDc@._V1_SX300.jpg"
        },
        {
        "Title": "Friday After Next",
        "Year": "2002",
        "imdbID": "tt0293815",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BMTE5NTI3OTYyN15BMl5BanBnXkFtZTYwNjUxNTg2._V1_SX300.jpg"
        }
  ]);
  return <div>
    <MovieList movies = {movies} />
  </div>;
};

export default App;