import MovieCrad from "../MovieCard";
import "./index.scss";

const MoviesList = ({ moviesList }) => {
  if (!Array.isArray(moviesList)) {
    return <div>No movies found.</div>; // Fallback for non-array cases
  }
  return (
    <div className="movies-list">
      {moviesList.map((movie) => {
        return <MovieCrad key={movie.id} movie={movie} />;
      })}
    </div>
  );
};
export default MoviesList;
