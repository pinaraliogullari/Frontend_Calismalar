import React, { useState } from "react";
import SearchBar from './Components/SearchBar';
import MovieList from './Components/MovieList';


const App = () => {
  const [movies, setMovies] = useState([

    {
      "id": 1,
      "name": "The Matrix 3",
      "rating": "8.1",
      "overview": "Set in the 22nd century, The Matrix tells the story of a computer hacker who joins a group of underground insurgents fighting the vast and powerful computers who now rule the earth.",
      "imageURL": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/dXNAPwY7VrqMAo51EKhhCJfaGb5.jpg"

    },

    {
      "id": 2,
      "name": "Blitz 007",
      "rating": "11",
      "overview": "Set in the 22nd century, The Matrix tells the story of a computer hacker who joins a group of underground insurgents fighting the vast and powerful computers who now rule the earth.",
      "imageURL": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/qCPMjT8Ld8tvs1zs7LY2jpKlRIK.jpg"

    },
    {
      "id": 3,
      "name": "Hostage",
      "rating": "6.3",
      "imageURL": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/4hne3v6jN4MlCnhSkxOW7YspJhr.jpg",
      "overview": "Set in the 22nd century, The Matrix tells the story of a computer hacker who joins a group of underground insurgents fighting the vast and powerful computers who now rule the earth."

    }

  ])
  //silinmeyen filmler için liste oluşturuyoruz.
 const deleteMovie = id => {
    setMovies(
      movies.filter(movie => movie.id != id)
    );

  }

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <SearchBar />

          </div>
        </div>
        <MovieList movies={movies}
          deleteMovie={deleteMovie}
        />


      </div>

    </>
  )
}

export default App;

