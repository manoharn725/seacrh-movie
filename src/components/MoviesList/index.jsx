import MovieCrad from "../MovieCard";
import "./index.scss";

const MoviesList = ({ moviesList, isLoading, isError }) => {
  if (!Array.isArray(moviesList)) {
    return <div>No movies found.</div>; 
  }
   return (
    <div className="movies-list">
      {moviesList.map((movie) => {
        return <MovieCrad key={movie.id} movie={movie} isLoading={isLoading} />;
      })}
    </div>
  );
};
export default MoviesList;
