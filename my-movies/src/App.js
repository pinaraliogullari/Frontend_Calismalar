
import React, { useState, useEffect } from "react";
import SearchBar from './Components/SearchBar';
import MovieList from './Components/MovieList';
import axios from 'axios';
import AddMovie from "./Components/AddMovie";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const App = () => {
  const [movies, setMovies] = useState([]);

  // Filmleri çekme işlemi

  //axios ile:direkt json formatına çeviriyor.
  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get("http://localhost:3002/movies");
        const data = response.data;
        setMovies(data);
      } catch (error) {
        console.error("Filmler getirilirken hata oluştu:", error.response.data || error.message || error);
      }
    };

    fetchMovies();
  }, []);

  // Film silme işlemi
  const deleteMovie = async (id) => {
    try {
      await axios.delete(`http://localhost:3002/movies/${id}`);
      const newMovieList = movies.filter(movie => movie.id !== id);
      setMovies(newMovieList);
    } catch (error) {
      console.error("Film silinirken hata oluştu:", error.response.data || error.message || error);
    }
  };

  // Filmleri filtreleme işlemi
  const [filteredMovies, setFilteredMovies] = useState([]);

  // const searchMovie = (e) => {
  //   const query = e.target.value.toLowerCase();
  //   setFilteredMovies(movies.filter(movie =>
  //     movie.name.toLowerCase().indexOf(query) !== -1)
  //   );
  // };
  //axios ile
  const searchMovie = async (e) => {
    const query = e.target.value.toLowerCase();
    try {
      const response = await axios.get("http://localhost:3002/movies");
      const data = response.data;
      const filteredData = data.filter(movie =>
        movie.name.toLowerCase().indexOf(query) !== -1
      );
      setFilteredMovies(filteredData);
    } catch (error) {
      console.error("Filmler getirilirken hata oluştu:", error.response.data || error.message || error);
    }
  };

  //film ekleme
  const addMovie = async (movie) => {
    try {
      await axios.post(`http://localhost:3002/movies/`, movie)
      setMovies([...movies, movie]);
   return;
    } catch (error) {
      console.error("Film eklenirken hata oluştu:", error.response.data || error.message || error);
    }
  };

  return (

    <Router>

      <Routes>
        <Route path="/" element={
          <React.Fragment>
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
          </React.Fragment>
        }>
        </Route>
        <Route path="add" element={
        
        <AddMovie 
        onAddMovie={(movie)=>{AddMovie(movie)}}
        />} />
      </Routes>
    </Router>

  );

      }
  export default App;




