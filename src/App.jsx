import { useState } from "react";
import SearchBar from "./components/SearchBar";
import MoviesList from "./components/MoviesList";
import { useGetDataQuery } from "./store/api/moviesApi";
import "./App.scss";

const App = () => {
  const [searchTerm, setSearchTerm] = useState('mad max');


  const { data, isError, isLoading } = useGetDataQuery(searchTerm);
  console.log(data?.d);

  const handleSubmit = async (term) => {
    const result = await setSearchTerm(term);
    // console.log(result);
    setMovies(result || []);
  };

  return (
    <div className="container">
      <h1>Search Movies</h1>
      <SearchBar onFormSubmit={handleSubmit} />
      <MoviesList moviesList={data?.d} isLoading={isLoading} isError={isError} />
    </div>
  );
};

export default App;
