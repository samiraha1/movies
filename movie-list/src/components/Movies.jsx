import "./../css/Movies.css";
import "./../css/MoviePlaylist.css";

import silence from '../images/silence of the lambs.jpg';
import shining from '../images/theShining.jpg';
import dracula from '../images/dracula.jpg';
import insidious from '../images/insidious.png';


const Movies = (movie) => {
    const imageSrc = 'http://localhost:3001/${movie.img}';
    return (
        <div className="movie">
            <div id="movie-list">
                <h3>{movie.name}</h3>
                <p>Director: {movie.director}</p>
                <p>Release Date: {movie.release}</p>
                <img src={imageSrc} alt={movie.name}/>
            </div>
        </div>
    );
}

export default Movies;