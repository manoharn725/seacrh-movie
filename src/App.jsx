import { useState } from "react";
import searchMovies from "./api";
import SearchBar from "./components/SearchBar";
import MoviesList from "./components/MoviesList";
import "./App.scss";

function App() {
  const [movies, setMovies] = useState([]);
  
  const handleSubmit = async (term) => {
    const result = await searchMovies(term);
    console.log(result)
    setMovies(result || []);
  };

  return (
    <div className="container">
      <h1>Search English Movies</h1>
      <SearchBar onFormSubmit={handleSubmit} />
      <MoviesList 
      moviesList={movies} 
      />
    </div>
  );
}

export default App;
