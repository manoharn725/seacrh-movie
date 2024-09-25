import noPosterAvailabel from '../../assets/no-poster-available.png'
import "./index.scss";

const MovieCard = ({ movie }) => {
  return (
    <div className="card">
        <img src={movie?.i?.imageUrl || noPosterAvailabel} alt="no poster available" />
      <p>{movie?.l}</p>
    </div>
  );
};
export default MovieCard;
