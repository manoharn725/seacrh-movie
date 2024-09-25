import "./index.scss";

const MovieCard = ({ movie }) => {
  return (
    <div className="card">
        <img src={movie?.i?.imageUrl} />
      <p>{movie?.l}</p>
    </div>
  );
};
export default MovieCard;
