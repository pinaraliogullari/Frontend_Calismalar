import React, { useState } from "react";
import SearchBar from './Components/SearchBar';
import MovieList from './Components/MovieList';



const App = () => {
  const [movies, setMovies] = useState([
//JSON format
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

    },
    {
      "id": 4,
      "name": "The Matrix Reloaded",
      "rating": "6.9",
      "imageURL": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/jBegA6V243J6HUnpcOILsRvBnGb.jpg",
      "overview": "Set in the 22nd century, The Matrix tells the story of a computer hacker who joins a group of underground insurgents fighting the vast and powerful computers who now rule the earth."

    },
    {
      "id": 5,
      "name": "Saw 3D",
      "rating": "7.5",
      "overview": "Set in the 22nd century, The Matrix tells the story of a computer hacker who joins a group of underground insurgents fighting the vast and powerful computers who now rule the earth.",
      "imageURL": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/qHCZ6LjtmqWDfXXN28TlIC9OppK.jpg"

    },

    {
      "id": 6,
      "name": "Hostage",
      "rating": "6.3",
      "imageURL": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/4hne3v6jN4MlCnhSkxOW7YspJhr.jpg",
      "overview": "Set in the 22nd century, The Matrix tells the story of a computer hacker who joins a group of underground insurgents fighting the vast and powerful computers who now rule the earth."

    }

  ])

  // silinmeyen filmler için liste oluşturuyoruz.
 
    const deleteMovie = (id) => {
      setMovies(movies.filter(movie => movie.id !== id));
  }


  //search
  const [filteredMovies, setFilteredMovies] = useState([]);

  const searchMovie = (e) => {
    const query = e.target.value.toLowerCase();

     setFilteredMovies(movies.filter(movie =>
      movie.name.toLowerCase().indexOf(query)!==-1) 
    );

  }

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <SearchBar searchMovie={searchMovie} />
          </div>
        </div>
        <MovieList
          movies={filteredMovies.length > 0 ? filteredMovies : movies}
          deleteMovie={deleteMovie}
        />
      </div>
    </>
  )
}

export default App;